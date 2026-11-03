(() => {
  "use strict";
  const config = window.ARTELVA_CONFIG || {};
  const number = /^\d{10,15}$/.test(config.whatsappNumber || "") ? config.whatsappNumber : "5531986964656";
  const message = config.defaultMessage || "Olá! Vim pelo site da Artelva e gostaria de conversar sobre uma reforma.";
  const clean = (value, limit = 1000) => String(value || "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, limit);
  const campaignParams = new URLSearchParams(window.location.search);
  const campaignKeys = ["utm_source", "utm_medium", "utm_campaign"];
  const campaign = campaignKeys.map(key => clean(campaignParams.get(key), 120).replace(/[\r\n]/g, " "));
  const attribution = campaign.some(Boolean) ? "\n\nOrigem da campanha: " + campaign.filter(Boolean).join(" / ") : "";
  const whatsappUrl = text => "https://wa.me/" + number + "?text=" + encodeURIComponent(text + attribution);
  const configuredEmail = clean(config.contactEmail, 254);
  const email = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(configuredEmail) ? configuredEmail : "artelvaconstrutoraeng@gmail.com";

  document.documentElement.classList.add("js");
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-phone-display]").forEach(el => { el.textContent = config.whatsappDisplay || "(31) 98696-4656"; });
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    const selectedService = clean(el.dataset.whatsappService, 100);
    const customMessage = clean(el.dataset.whatsappMessage, 1000);
    const contactMessage = customMessage || (selectedService ? "Olá, Elvis! Vim pelo site da Artelva e gostaria de solicitar um orçamento para " + selectedService.toLocaleLowerCase("pt-BR") + "." : message);
    el.href = whatsappUrl(contactMessage);
    el.addEventListener("click", () => trackContact(el.dataset.placement || "link", selectedService));
  });
  // Keep campaign context while the visitor reads another marketing page.
  // Hash-only navigation and personal form fields never enter these URLs.
  if (campaign.some(Boolean)) document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("#")) return;
    try {
      const url = new URL(href, window.location.href);
      const marketingPage = /\/(?:index\.html|imobiliarias\.html|servicos\/(?:pintura-revestimentos|eletrica-iluminacao|reforma-banheiro|reforma-ambientes)\.html)$/.test(url.pathname) || url.pathname.endsWith("/");
      if (url.origin !== window.location.origin || !marketingPage || !/^https?:$/.test(url.protocol)) return;
      campaignKeys.forEach((key, i) => { if (campaign[i]) url.searchParams.set(key, campaign[i]); });
      link.href = url.href;
    } catch { /* Preserve the original link if it is not a web address. */ }
  });
  document.querySelectorAll("[data-email]").forEach(el => {
    el.href = "mailto:" + email;
    el.addEventListener("click", () => trackContact(el.dataset.placement || "email", "", "email"));
  });
  document.querySelectorAll("[data-email-display]").forEach(el => { el.textContent = email; });
  if (config.arthurLinkedinUrl) {
    try {
      const url = new URL(config.arthurLinkedinUrl);
      if (url.protocol === "https:" && /^(www\.)?linkedin\.com$/.test(url.hostname) && url.pathname.startsWith("/in/")) document.querySelectorAll("[data-arthur-linkedin]").forEach(el => { el.href = url.href; });
    } catch { /* Preserve the confirmed profile link when configuration is invalid. */ }
  }

  if (config.serviceAreaText) document.querySelectorAll("[data-region]").forEach(el => { el.textContent = clean(config.serviceAreaText, 200); el.hidden = false; });
  if (config.instagramUrl) {
    try {
      const url = new URL(config.instagramUrl);
      if (url.protocol === "https:" && /^(www\.)?instagram\.com$/.test(url.hostname)) document.querySelectorAll("[data-instagram]").forEach(el => { el.href = url.href; el.hidden = false; });
    } catch { /* Invalid optional addresses remain hidden. */ }
  }
  if (config.siteUrl && !document.body.classList.contains("error-page")) {
    try {
      const siteUrl = new URL(config.siteUrl);
      if (siteUrl.protocol === "https:" || siteUrl.protocol === "http:") {
        const base = siteUrl.href.endsWith("/") ? siteUrl.href : siteUrl.href + "/";
        const page = document.body.dataset?.pagePath ?? (document.body.classList.contains("privacy-page") ? "privacidade.html" : "");
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
        canonical.href = new URL(page, base).href;
        [["og:url", canonical.href], ["og:image", new URL("assets/images/artelva-compartilhamento.png", base).href]].forEach(([property, content]) => {
          let meta = document.querySelector('meta[property="' + property + '"]');
          if (!meta) { meta = document.createElement("meta"); meta.setAttribute("property", property); document.head.appendChild(meta); }
          meta.content = content;
        });
      }
    } catch { /* Keep the site functional before the production URL is known. */ }
  }

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const closeMenu = () => { if (!menu || !nav) return; menu.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-label", "Abrir menu"); nav.classList.remove("is-open"); };
  if (menu && nav) {
    menu.hidden = false;
    menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(open)); menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); nav.classList.toggle("is-open", open); });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { closeMenu(); menu.focus(); } });
    document.addEventListener("click", event => { if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
    window.matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
    const sectionLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const markCurrent = id => sectionLinks.forEach(link => {
      if (link.getAttribute("href") === "#" + id) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    // Keep the public section hashes, but align the visible content rather than
    // the section's decorative padding. A single scroll owns each navigation.
    const scrollTargets = {
      inicio: document.getElementById("inicio"),
      servicos: document.querySelector("#servicos .services-layout"),
      processo: document.querySelector("#processo .process-copy > .eyebrow"),
      sobre: document.querySelector("#sobre .about-top"),
      contato: document.querySelector("#contato .contact-layout")
    };
    const scrollToSection = (id, behavior = "instant", moveFocus = false) => {
      const target = scrollTargets[id];
      if (!target) return;
      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const top = id === "inicio" ? 0 : Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerHeight - 24);
      if (moveFocus) {
        target.setAttribute("tabindex", "-1");
        target.focus({preventScroll: true});
      }
      window.scrollTo({top, behavior});
      markCurrent(id);
    };
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      const id = link.getAttribute("href").slice(1);
      if (!scrollTargets[id]) return;
      link.addEventListener("click", event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        closeMenu();
        if (window.location.hash !== "#" + id) window.history.pushState(null, "", "#" + id);
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        scrollToSection(id, reducedMotion ? "instant" : "smooth", true);
      });
    });
    const alignCurrentHash = () => {
      const id = window.location.hash.slice(1);
      if (scrollTargets[id]) scrollToSection(id);
    };
    window.addEventListener("popstate", () => window.requestAnimationFrame(alignCurrentHash));
    const initialHash = window.location.hash;
    const alignInitialHash = () => {
      const ready = document.fonts ? document.fonts.ready : Promise.resolve();
      ready.then(() => { if (window.location.hash === initialHash) alignCurrentHash(); });
    };
    if (document.readyState === "complete") alignInitialHash();
    else window.addEventListener("load", alignInitialHash, {once: true});
    if (sectionLinks.length) {
      const sections = sectionLinks.map(link => ({id: link.getAttribute("href").slice(1), target: scrollTargets[link.getAttribute("href").slice(1)]})).filter(section => section.target);
      let framePending = false;
      const updateCurrentSection = () => {
        framePending = false;
        const header = document.querySelector(".site-header");
        const referenceLine = (header ? header.getBoundingClientRect().height : 88) + 100;
        let current = "inicio";
        sections.forEach(section => { if (section.target.getBoundingClientRect().top <= referenceLine) current = section.id; });
        markCurrent(current);
      };
      const scheduleCurrentSection = () => {
        if (framePending) return;
        framePending = true;
        window.requestAnimationFrame(updateCurrentSection);
      };
      window.addEventListener("scroll", scheduleCurrentSection, {passive: true});
      window.addEventListener("resize", scheduleCurrentSection, {passive: true});
      scheduleCurrentSection();
    }
  }

  // The contact section already has clear actions; keep the floating shortcut
  // from covering the form and the contact details while that section is visible.
  const floatingContact = document.querySelector(".floating-whatsapp");
  const contactSection = document.getElementById("contato") || document.querySelector(".service-contact");
  if (floatingContact && contactSection && "IntersectionObserver" in window) {
    const contactObserver = new window.IntersectionObserver(entries => {
      floatingContact.hidden = entries[0].isIntersecting;
    }, {threshold: 0});
    contactObserver.observe(contactSection);
  }

  const form = document.getElementById("quote-form");
  const service = document.getElementById("client-service");
  const serviceNames = {"pintura-revestimentos": "Pintura e revestimentos", "eletrica-iluminacao": "Elétrica e iluminação", "reforma-banheiro": "Reformas de banheiros", "reforma-ambientes": "Reformas de ambientes"};
  const requestedService = serviceNames[campaignParams.get("servico")];
  if (service && requestedService) service.value = requestedService;
  document.querySelectorAll("[data-service]").forEach(link => link.addEventListener("click", () => { if (service) { service.value = link.dataset.service; } }));
  if (form) {
    form.action = "https://wa.me/" + number;
    form.addEventListener("submit", event => {
      event.preventDefault();
      const nameInput = document.getElementById("client-name");
      const locationInput = document.getElementById("client-location");
      nameInput.setCustomValidity(clean(nameInput.value, 80).length >= 2 ? "" : "Informe seu nome para continuar.");
      locationInput.setCustomValidity(clean(locationInput.value, 140).length >= 3 ? "" : "Informe a cidade e o bairro do imóvel.");
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = ["Olá, " + (clean(config.whatsappContactName, 40) || "Elvis") + "! Vim pelo site da Artelva e gostaria de conversar sobre um serviço.", "", "Nome: " + clean(data.get("nome"), 80), "Cidade e bairro: " + clean(data.get("local"), 140), "Serviço: " + clean(data.get("servico"), 100), "Quando pretendo iniciar: " + clean(data.get("prazo"), 80)];
      const profile = clean(data.get("perfil"), 80); if (profile) lines.push("Solicito como: " + profile);
      const details = clean(data.get("detalhes"), 1000); if (details) lines.push("", "Detalhes: " + details);
      const status = document.getElementById("form-status"); if (status) status.textContent = "Abrindo o WhatsApp com sua mensagem. Envie por lá para continuar.";
      trackContact("quote_form", clean(data.get("servico"), 100));
      window.location.assign(whatsappUrl(lines.join("\n")));
    });
    form.querySelectorAll("input").forEach(input => input.addEventListener("input", () => input.setCustomValidity("")));
    // Without JavaScript, use the direct WhatsApp links instead of transmitting form fields in the URL.
  }

  const tracking = config.tracking || {};
  const gtmId = /^GTM-[A-Z0-9]+$/.test(tracking.googleTagManagerId || "") ? tracking.googleTagManagerId : "";
  const pixelId = /^\d{5,25}$/.test(tracking.metaPixelId || "") ? tracking.metaPixelId : "";
  const trackingConfigured = Boolean(gtmId || pixelId);
  const consentKey = "artelva_measurement_consent_v1";
  const banner = document.getElementById("consent-banner");
  let consent = null;
  let trackingStarted = false;
  try { const stored = JSON.parse(localStorage.getItem(consentKey) || "null"); if (stored && ["granted", "denied"].includes(stored.value) && Date.now() - stored.date < 180 * 86400000) consent = stored.value; } catch { /* Storage can be unavailable in private browsing. */ }

  function startTracking() {
    if (trackingStarted || consent !== "granted" || !trackingConfigured) return;
    trackingStarted = true;
    if (gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({"gtm.start": Date.now(), event: "gtm.js"});
      const script = document.createElement("script"); script.async = true; script.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(gtmId); document.head.appendChild(script);
    }
    if (pixelId) {
      if (!window.fbq) {
        const fbq = function () { fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments); };
        fbq.queue = []; fbq.loaded = true; fbq.version = "2.0"; fbq.push = fbq; window.fbq = fbq; window._fbq = fbq;
        const script = document.createElement("script"); script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js"; document.head.appendChild(script);
      }
      window.fbq("consent", "grant"); window.fbq("init", pixelId); window.fbq("track", "PageView");
    }
  }
  function trackContact(placement, selectedService = "", channel = "whatsapp") {
    if (consent !== "granted" || !trackingStarted) return;
    if (gtmId) window.dataLayer.push({event: channel + "_click", contact_channel: channel, contact_placement: placement, service: selectedService});
    if (pixelId && window.fbq) window.fbq("track", "Contact", {content_name: selectedService || (channel === "email" ? "Contato por e-mail" : "Contato pelo WhatsApp"), contact_channel: channel, contact_placement: placement});
  }
  function saveConsent(value) {
    const wasGranted = consent === "granted";
    consent = value;
    try { localStorage.setItem(consentKey, JSON.stringify({value, date: Date.now()})); } catch { /* Consent remains effective for the current page. */ }
    if (banner) banner.hidden = true;
    if (value === "denied" && wasGranted && trackingStarted) {
      if (window.fbq) window.fbq("consent", "revoke");
      window.location.reload();
      return;
    }
    startTracking();
  }
  if (trackingConfigured) {
    document.querySelectorAll("[data-consent-settings]").forEach(button => { button.hidden = false; button.addEventListener("click", () => { if (banner) { banner.hidden = false; banner.querySelector("button")?.focus(); } }); });
    document.querySelectorAll("[data-consent]").forEach(button => button.addEventListener("click", () => saveConsent(button.dataset.consent)));
    if (!consent && banner) banner.hidden = false;
    startTracking();
  }
})();

