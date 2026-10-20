/*
 * support.js — Instituto Carla Gonçalves
 * Melhorias progressivas do site estático:
 *  - animações de revelação ao rolar (os elementos já aparecem sem JS;
 *    aqui apenas adicionamos a transição suave quando entram na tela)
 * O site é totalmente funcional e legível mesmo sem este arquivo.
 *
 * IMPORTANTE: --vh / --vw NÃO são definidos por este script.
 * Eles já são controlados pelo próprio CSS original:
 *   @media (min-width:1024px){ html{ zoom:.8; --vh:1.25vh; --vw:1.25vw } }
 * Em telas menores, var(--vh,1vh)/var(--vw,1vw) caem no fallback nativo
 * 1vh/1vw. Uma versão anterior deste arquivo sobrescrevia --vh/--vw com
 * valores em pixels via JavaScript, o que quebrava o compensador de zoom
 * do desktop (a foto do hero "estourava" para cima da tela e o logo
 * ficava com o tamanho errado). Por isso essa parte foi removida.
 */
(function () {
  "use strict";

  // Revelação progressiva ao rolar
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
