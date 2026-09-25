#!/usr/bin/env bash
# Descarga una copia del sitio WordPress original (voicesunveiled.org) a $OUT.
# Uso: tools/fetch.sh [directorio_salida]
set -euo pipefail
OUT="${1:-/tmp/vu-mirror}"
SRC="https://voicesunveiled.org"
REJECT='(/feed/?|wp-json|xmlrpc|/cart/|/checkout/|/my-account/|/shop/|/product|/donor-dashboard/|testing-new-page|/wp-login|/wp-admin|\?add-to-cart|/comments/|\?replytocom|/page/[0-9]+|/tag/|/category/|/author/|/donation-(failed|confirmation)|\?s=)'
COMMON=(-q -e robots=off --page-requisites --adjust-extension --domains=voicesunveiled.org
        --restrict-file-names=windows --timeout=30 --tries=2 --reject-regex="$REJECT")
mkdir -p "$OUT" && cd "$OUT"
# 1) rastreo desde la portada (menús, footer)
wget "${COMMON[@]}" --recursive --level=3 --no-parent "$SRC/" || true
# 2) páginas y posts que no están enlazados desde el menú (inventario tomado de wp-json/wp/v2/pages y /posts)
wget "${COMMON[@]}" -i "$(dirname "$0")/pages.txt" || true
echo "Mirror listo en $OUT/voicesunveiled.org"
