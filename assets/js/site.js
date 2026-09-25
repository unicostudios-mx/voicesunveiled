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
        var base = (state.monthly ? urls.monthly : urls.once).split("?")[0];
        cta.href = base + "?mode=" + (state.monthly ? "monthly" : "once") + (state.amount ? "&amount=" + state.amount : "");
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

/* ---- Checkout demo (/donate/now/) ---- */
(function () {
  "use strict";
  var form = document.querySelector("form[data-checkout]");
  if (!form) return;
  var tiers = JSON.parse(form.getAttribute("data-tiers") || "[]");
  var monthlyTiers = JSON.parse(form.getAttribute("data-monthly-tiers") || "[]");
  var q = new URLSearchParams(location.search);
  var state = { monthly: q.get("mode") !== "once", amount: Number(q.get("amount")) || 0, custom: false, step: 1 };
  var grid = form.querySelector(".agrid"), impact = form.querySelector(".iline span");
  var customWrap = form.querySelector(".custom-amount"), customInput = form.querySelector("#custom");
  var tabs = form.querySelectorAll("[data-step-tab]"), steps = form.querySelectorAll("[data-step]");
  function list() { return state.monthly ? monthlyTiers : tiers; }
  function fmt(n) { n = Number(n); var dec = Math.abs(n - Math.round(n)) > 0.004; return "$" + n.toLocaleString("en-US", { minimumFractionDigits: dec ? 2 : 0, maximumFractionDigits: 2 }); }
  function amount() { return state.custom ? Number(customInput.value) || 0 : state.amount; }
  function renderAmounts() {
    var l = list();
    if (!state.custom && !l.some(function (t) { return t.amount === state.amount; })) state.amount = (l[1] || l[0]).amount;
    grid.innerHTML = "";
    l.forEach(function (t) {
      var b = document.createElement("button"); b.type = "button";
      var on = t.amount ? (!state.custom && t.amount === state.amount) : state.custom;
      b.className = "achip" + (on ? " is-on" : ""); b.textContent = t.label || fmt(t.amount); b.setAttribute("aria-pressed", on ? "true" : "false");
      b.addEventListener("click", function () { state.custom = !t.amount; if (t.amount) state.amount = t.amount; renderAmounts(); if (state.custom) customInput.focus(); });
      grid.appendChild(b);
    });
    customWrap.hidden = !state.custom;
    var sel = l.filter(function (t) { return state.custom ? !t.amount : t.amount === state.amount; })[0];
    impact.textContent = sel ? sel.impact : "";
    form.querySelectorAll(".toggle button").forEach(function (b) {
      var on = (b.getAttribute("data-mode") === "monthly") === state.monthly; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  form.querySelectorAll(".toggle button").forEach(function (b) { b.addEventListener("click", function () { state.monthly = b.getAttribute("data-mode") === "monthly"; renderAmounts(); }); });
  function fee(a) { return a ? Math.round((a * 0.029 + 0.30) * 100) / 100 : 0; }
  function renderSummary() {
    var a = amount(), cover = form.elements.fee.checked, f = cover ? fee(a) : 0;
    form.querySelector("[data-sum-amount]").textContent = fmt(a);
    form.querySelector("[data-sum-freq]").textContent = state.monthly ? "Monthly" : "One-time";
    form.querySelector(".fee-row").hidden = !cover; form.querySelector("[data-sum-fee]").textContent = fmt(f);
    form.querySelector("[data-sum-total]").textContent = fmt(a + f) + (state.monthly ? " / month" : "");
  }
  form.elements.fee.addEventListener("change", renderSummary);
  form.querySelectorAll(".pay input").forEach(function (r) { r.addEventListener("change", function () { form.querySelectorAll(".pay").forEach(function (l) { l.classList.toggle("is-on", l.contains(r)); }); form.querySelector(".card-fields").style.display = r.value === "card" ? "" : "none"; }); });
  function go(n) {
    state.step = n;
    steps.forEach(function (s) { var k = Number(s.getAttribute("data-step")); s.classList.toggle("is-on", k === n); if (k === 4) s.hidden = n !== 4; });
    tabs.forEach(function (t) { var k = Number(t.getAttribute("data-step-tab")); t.classList.toggle("is-on", k === n); t.classList.toggle("is-done", k < n); });
    if (n === 3) renderSummary();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function validStep(n) {
    if (n === 1) { if (amount() < 1) { customInput.classList.add("touched"); customInput.focus(); return false; } return true; }
    if (n === 2) {
      var ok = true;
      ["first", "last", "email"].forEach(function (id) { var el = form.querySelector("#" + id); el.classList.add("touched"); if (!el.checkValidity()) { ok = false; } });
      if (!ok) form.querySelector(".touched:invalid").focus();
      return ok;
    }
    return true;
  }
  form.querySelectorAll("[data-next]").forEach(function (b) { b.addEventListener("click", function () { if (validStep(state.step)) go(state.step + 1); }); });
  form.querySelectorAll("[data-prev]").forEach(function (b) { b.addEventListener("click", function () { go(state.step - 1); }); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var a = amount(), f = form.elements.fee.checked ? fee(a) : 0;
    form.querySelector("[data-done-name]").textContent = form.elements.first.value || "friend";
    form.querySelector("[data-done-amount]").textContent = fmt(a + f) + (state.monthly ? " monthly" : "");
    form.querySelector("[data-done-email]").textContent = form.elements.email.value;
    go(4);
  });
  renderAmounts();
})();
