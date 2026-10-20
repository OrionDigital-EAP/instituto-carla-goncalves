/*
 * support.js — Instituto Carla Gonçalves
 * Melhorias progressivas do site estático:
 *  - variáveis --vh / --vw reais (evita "pulo" da viewport no celular)
 *  - animações de revelação ao rolar (os elementos já aparecem sem JS;
 *    aqui apenas adicionamos a transição suave quando entram na tela)
 * O site é totalmente funcional e legível mesmo sem este arquivo.
 */
(function () {
  "use strict";

  // 1) --vh / --vw reais (as páginas usam var(--vh,1vh) / var(--vw,1vw) com fallback)
  function setUnits() {
    var vh = window.innerHeight * 0.01;
    var vw = window.innerWidth * 0.01;
    var r = document.documentElement;
    r.style.setProperty("--vh", vh + "px");
    r.style.setProperty("--vw", vw + "px");
  }
  setUnits();
  window.addEventListener("resize", setUnits, { passive: true });
  window.addEventListener("orientationchange", setUnits, { passive: true });

  // 2) Revelação progressiva ao rolar
  function initReveal() {
    var html = document.documentElement;
    // respeita quem prefere menos movimento
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      // sem animação: tudo permanece visível (estado padrão do CSS)
      return;
    }
    html.classList.add("rv-on");
    var targets = document.querySelectorAll(".rvx, .eline, .arc");
    if (!targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    targets.forEach(function (t) { io.observe(t); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();
