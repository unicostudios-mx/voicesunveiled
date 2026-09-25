/* Voices Unveiled — comportamiento del sitio (sin dependencias). */
(function () {
  "use strict";

  /* ---- Navegación móvil ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
      toggle.querySelector(".ico-menu").style.display = open ? "none" : "";
      toggle.querySelector(".ico-close").style.display = open ? "" : "none";
    });
  }

  /* ---- Reveal suave al hacer scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
    setTimeout(function () { reveals.forEach(function (el) { el.classList.add("in"); }); }, 2500);
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Selector de donación ---- */
  document.querySelectorAll("[data-donation]").forEach(function (card) {
    var tiers = JSON.parse(card.getAttribute("data-tiers") || "[]");
    var monthlyTiers = JSON.parse(card.getAttribute("data-monthly-tiers") || "[]");
    var urls = { once: card.getAttribute("data-url-once"), monthly: card.getAttribute("data-url-monthly") };
    var state = { monthly: card.getAttribute("data-default-mode") === "monthly", amount: Number(card.getAttribute("data-default-amount")) || 0 };
    var grid = card.querySelector(".agrid");
    var impact = card.querySelector(".iline span");
    var cta = card.querySelector(".btn--cta");
    var buttons = card.querySelectorAll(".toggle button");

    function current() { return state.monthly && monthlyTiers.length ? monthlyTiers : tiers; }
    function fmt(n) { return "$" + n.toLocaleString("en-US"); }
    function render() {
      var list = current();
      if (!list.some(function (t) { return t.amount === state.amount; })) state.amount = list[Math.min(3, list.length - 1)].amount;
      grid.innerHTML = "";
      list.forEach(function (t) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "achip" + (t.amount === state.amount ? " is-on" : "");
        b.textContent = t.label || fmt(t.amount);
        b.setAttribute("aria-pressed", t.amount === state.amount ? "true" : "false");
        b.addEventListener("click", function () { state.amount = t.amount; render(); });
        grid.appendChild(b);
      });
      var sel = list.filter(function (t) { return t.amount === state.amount; })[0];
      if (impact && sel) impact.textContent = sel.impact;
      if (cta) {
        var amt = state.amount ? fmt(state.amount) + (state.monthly ? "/mo" : "") : "your amount";
        cta.textContent = (state.monthly ? "Give monthly — " : "Give now — ") + amt;
        cta.href = state.monthly ? urls.monthly : urls.once;
      }
      buttons.forEach(function (b) {
        var on = (b.getAttribute("data-mode") === "monthly") === state.monthly;
        b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () { state.monthly = b.getAttribute("data-mode") === "monthly"; render(); });
    });
    var sw = card.querySelector("[data-switch-once]");
    if (sw) sw.addEventListener("click", function (e) { e.preventDefault(); state.monthly = !state.monthly; render(); sw.textContent = state.monthly ? "Prefer to give once? Switch to a one-time gift." : "Make it monthly instead."; });
    render();
  });

  /* ---- Formulario de contacto: endpoint o fallback a correo ---- */
  var contact = document.querySelector("form[data-contact]");
  if (contact) {
    contact.addEventListener("submit", function (ev) {
      var endpoint = contact.getAttribute("data-endpoint");
      if (endpoint) return; // el navegador envía al servicio configurado
      ev.preventDefault();
      var f = contact.elements;
      var to = contact.getAttribute("data-to");
      var subject = "Website message from " + (f.name.value || "a visitor");
      var body = "Name: " + f.name.value + "\nEmail: " + f.email.value +
        (f.source && f.source.value ? "\nHow did you hear about us: " + f.source.value : "") +
        "\n\n" + f.message.value;
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var status = contact.querySelector(".form-status");
      if (status) status.textContent = "Your email app should open with the message ready to send. If it doesn't, write to " + to + ".";
    });
  }

  /* ---- Año en el pie ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());
})();
