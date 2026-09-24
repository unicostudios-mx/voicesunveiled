#!/usr/bin/env python3
"""
Sube el contenido de site/ al hosting de HostGator por SFTP (puerto 22) o FTP (puerto 21).

Variables de entorno requeridas:
  HOSTGATOR_FTP_HOST   servidor (p. ej. unicopartners.com.mx o la IP del servidor)
  HOSTGATOR_FTP_USER   usuario cPanel o cuenta FTP
  HOSTGATOR_FTP_PASS   contraseña
  HOSTGATOR_FTP_PORT   22 (SFTP) o 21 (FTP). Por defecto 21.
  HOSTGATOR_REMOTE_DIR ruta remota destino. Por defecto: unicopartners.com.mx/voicesunveiled
                       (relativa al directorio inicial de la cuenta). Si la cuenta FTP ya está
                       limitada a esa carpeta, usar ".".

Uso:  tools/deploy.py [--dry-run] [--full]
  --dry-run  solo lista lo que subiría
  --full     sube todo aunque el tamaño remoto coincida
"""
import os
import sys
import posixpath

SITE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "site"))
HOST = os.environ.get("HOSTGATOR_FTP_HOST")
USER = os.environ.get("HOSTGATOR_FTP_USER")
PASS = os.environ.get("HOSTGATOR_FTP_PASS")
PORT = int(os.environ.get("HOSTGATOR_FTP_PORT") or "21")
REMOTE = os.environ.get("HOSTGATOR_REMOTE_DIR") or "unicopartners.com.mx/voicesunveiled"
DRY = "--dry-run" in sys.argv
FULL = "--full" in sys.argv


def local_files():
    for root, _d, files in os.walk(SITE):
        for n in files:
            p = os.path.join(root, n)
            yield os.path.relpath(p, SITE).replace(os.sep, "/"), p, os.path.getsize(p)


class Sftp:
    def __init__(self):
        import paramiko
        t = paramiko.Transport((HOST, PORT))
        t.connect(username=USER, password=PASS)
        self.c = paramiko.SFTPClient.from_transport(t)
        self.sizes = {}

    def mkdirs(self, path):
        cur = ""
        for part in path.split("/"):
            if not part or part == ".":
                continue
            cur = posixpath.join(cur, part) if cur else part
            try:
                self.c.stat(cur)
            except IOError:
                self.c.mkdir(cur)

    def remote_size(self, path):
        try:
            return self.c.stat(path).st_size
        except IOError:
            return None

    def put(self, local, remote):
        self.c.put(local, remote)


class Ftp:
    def __init__(self):
        import ftplib
        try:
            c = ftplib.FTP_TLS()
            c.connect(HOST, PORT, timeout=60)
            c.login(USER, PASS)
            c.prot_p()
        except Exception:
            c = ftplib.FTP()
            c.connect(HOST, PORT, timeout=60)
            c.login(USER, PASS)
        c.set_pasv(True)
        self.c = c
        self.known_dirs = set()

    def mkdirs(self, path):
        cur = ""
        for part in path.split("/"):
            if not part or part == ".":
                continue
            cur = posixpath.join(cur, part) if cur else part
            if cur in self.known_dirs:
                continue
            try:
                self.c.mkd(cur)
            except Exception:
                pass
            self.known_dirs.add(cur)

    def remote_size(self, path):
        try:
            self.c.voidcmd("TYPE I")
            return self.c.size(path)
        except Exception:
            return None

    def put(self, local, remote):
        with open(local, "rb") as f:
            self.c.storbinary("STOR " + remote, f)


def main():
    if not (HOST and USER and PASS):
        sys.exit("Faltan HOSTGATOR_FTP_HOST / HOSTGATOR_FTP_USER / HOSTGATOR_FTP_PASS en el entorno")
    if not os.path.isdir(SITE):
        sys.exit(f"No existe {SITE}; ejecuta tools/build.py primero")
    files = sorted(local_files())
    print(f"{len(files)} archivos locales; destino {HOST}:{PORT} → {REMOTE}")
    if DRY:
        for rel, _p, size in files:
            print(f"  {size:>9}  {rel}")
        return
    client = Sftp() if PORT == 22 else Ftp()
    client.mkdirs(REMOTE)
    uploaded = skipped = 0
    for rel, path, size in files:
        remote = posixpath.join(REMOTE, rel) if REMOTE not in (".", "") else rel
        client.mkdirs(posixpath.dirname(remote))
        if not FULL and client.remote_size(remote) == size:
            skipped += 1
            continue
        client.put(path, remote)
        uploaded += 1
        if uploaded % 50 == 0:
            print(f"  {uploaded} subidos…")
    print(f"Listo: {uploaded} subidos, {skipped} sin cambios")


if __name__ == "__main__":
    main()
