/* Testemunhos: avaliações reais do Google (perfil "Casa 361 - Imobiliária Vila Franca de Xira"),
   com o texto sem alterações e só o nome próprio e a inicial. Quem tem fotografia no perfil Google
   aparece com ela; os outros com as iniciais (é o que o próprio Google mostra).
   Uso: <div class="rv" data-reviews [data-first="Venda"] [data-chips]></div> */
(function () {
  var G = 'https://lh3.googleusercontent.com/a-/';
  var R = [
    { n: 'Daniel F.', t: 'Compra', p: G + 'ALV-UjW4fsMLKdvFKcarv8XuvySvZ_dgLAUZv_oegyocbscJ8fLziLpm', q: 'Fomos muito bem acompanhados ao longo de todo o processo de compra da nossa primeira casa, com esclarecimentos para todas as nossas dúvidas durante estes longos meses. Um muito obrigado ao Luís!' },
    { n: 'Andreia F.', t: 'Arrendamento', p: G + 'ALV-UjX44GG5yV3ESy3MI4awNmQWKIsrBDd39M-K2advh3WiLAvA_afo', q: 'Um agradecimento especial ao Sr. Luís, que foi sempre muito prestável, disponível e simpático ao longo de todo o processo de arrendamento. Sempre que precisei de alguma coisa, esteve pronto para ajudar e fez tudo o que podia para facilitar as coisas, tornando todo o processo muito mais simples e tranquilo.' },
    { n: 'Carlos D.', t: 'Venda', q: 'Obrigado por tudo: pela simpatia, transparência, profissionalismo e competência. A venda do nosso apartamento foi uma experiência perfeita graças ao acompanhamento do Luís Poças que dominava todos os detalhes do processo transmitindo-nos deste sempre confiança e tranquilidade. Recomendo vivamente a Casa 361.' },
    { n: 'Carolina C.', t: 'Compra', p: G + 'ALV-UjVg5eMpE-8QMAArkYMYh1fi2bG-fDrQcrdzCuxZZHukYK3IpaYzZQ', q: 'O Luís foi sempre super prestável e pronto a ajudar! Ajudou-nos imenso nesta procura de casa e apresentou-nos imensos imóveis com potencial até encontrar a nossa atual casa! Recomendamos bastante os seus serviços e agradecemos bastante pelo acompanhamento prestado ☺️' },
    { n: 'Diogo A.', t: 'Venda', q: 'Quero deixar um agradecimento especial à Casa 361 pelo excelente trabalho na venda da minha casa. Desde o primeiro momento mostraram profissionalismo, dedicação e um acompanhamento constante em todas as etapas do processo. Sentimo-nos sempre apoiados e acompanhados. Recomendo a 100% a quem procura um serviço de confiança e com resultados.' },
    { n: 'Jorge S.', t: 'Várias compras', p: G + 'ALV-UjV3LPwFoOQgjSFVmLNGhcj1GHMcFI93_1t750jA9GBaXJ9aaM8W', q: 'Trabalhar com esta agência imobiliária tem sido uma experiência verdadeiramente excepcional ao longo dos últimos anos e em várias compras realizadas. É raro encontrar um nível de profissionalismo, dedicação e confiança tão consistentes. (…) Recomendo esta agência de coração e, em particular, o trabalho do Luís Poças.' },
    { n: 'Joana S.', t: 'Compra', q: 'Comprámos um imóvel em Vialonga com o apoio do incansável Sr. Luís que muito nos apoiou para que o negócio de concretizasse da melhor forma possível. Sempre com uma postura muito profissional, transparente e com enorme sentido de prontidão para qualquer dúvida ou apoio necessário. Recomendo a 100%' },
    { n: 'Madalena R.', t: 'Cliente', p: G + 'ALV-UjXNT0vng-tsgpN5-mleI_M4FoV8uXP9h6mHmxEkFwh7IdZ2jPU8', q: 'O profissionalismo, a simpatia e o acompanhamento, não têm preço! Não se podia pedir mais a esta empresa e ao sr. Luís Poças ☺️ desde o primeiro minuto sempre presente, atento e disponível. Recomendo a 100% para quem queira um negócio sério e sem problemas.' },
    { n: 'Tomás G.', t: 'Compra', q: 'Recomendo! O Sr. Luís Poças fez tudo aquilo que podia para que a compra da nossa casa corresse da melhor forma. Se alguma vez precisar de comprar ou de vender algum imóvel, sei com quem tratar! Muito obrigado.' },
    { n: 'Ermelinda P.', t: 'Cliente', q: 'Demonstra um real conhecimento do mercado imobiliário, quer na comercialização, quer nas questões técnicas inerentes ao imóvel. Linguagem simples e assertiva, transmitindo confiança em todo o processo. Apresenta soluções, elevada literacia financeira. Faz acontecer💪 Recomendo.' }
  ];
  window.C361_REVIEWS = R;
  var GURL = 'https://www.google.com/maps?cid=11429435623754313206';
  var ICON = {
    Compra: '<path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z"/>',
    'Várias compras': '<path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z"/>',
    Venda: '<path d="M3.5 12.5 11 5h7.5v7.5L11 20z"/><circle cx="15" cy="9" r="1.4"/>',
    Arrendamento: '<circle cx="8" cy="15" r="3.5"/><path d="m10.5 12.5 8-8M16 7l2.5 2.5M14 9l1.8 1.8"/>',
    Cliente: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.8 4-5.5 7-5.5s5.8 1.7 7 5.5"/>'
  };
  var GLOGO = '<svg class="rv-g" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.2a11 11 0 0 0 0 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 0 0 2.2 7.1l3.6 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>';
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function initials(n) { return n.replace(/\./g, '').split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase(); }
  function avatar(r, cls) {
    var ini = '<span class="rv-ini">' + initials(r.n) + '</span>';
    return '<span class="rv-av ' + (cls || '') + ' t-' + (ICON[r.t] ? r.t.split(' ')[0].toLowerCase().normalize('NFD').replace(/[^a-z]/g, '') : 'cliente') + '">' + ini +
      (r.p ? '<img src="' + r.p + '=w96-h96-p-rp-mo-br100" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">' : '') + '</span>';
  }
  function card(r, i) {
    return '<figure class="rv-card" data-t="' + esc(r.t) + '" style="--i:' + i + '">' +
      '<svg class="rv-q" viewBox="0 0 40 32" aria-hidden="true"><path d="M0 32V19.6C0 8.4 6.2 1.8 16.6 0l1.6 4.4C12.6 6 9.6 9.6 9.2 15H17v17zm22.4 0V19.6C22.4 8.4 28.6 1.8 39 0l1 4.4c-5.6 1.6-8.6 5.2-9 10.6H39.4v17z"/></svg>' +
      '<div class="rv-top"><span class="rv-stars" aria-label="5 estrelas em 5">' + '<i></i><i></i><i></i><i></i><i></i></span>' +
      '<span class="rv-tag"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICON[r.t] || ICON.Cliente) + '</svg>' + esc(r.t) + '</span></div>' +
      '<blockquote><p>' + esc(r.q) + '</p></blockquote><button class="rv-more" type="button" hidden>Ler tudo</button>' +
      '<figcaption>' + avatar(r) + '<span class="rv-who"><b>' + esc(r.n) + '</b><small>' + GLOGO + 'Avaliação no Google</small></span></figcaption></figure>';
  }
  function chipCount(t) { return R.filter(function (r) { return t === 'Todas' || r.t.indexOf(t) === 0 || (t === 'Compra' && r.t === 'Várias compras'); }).length; }

  function mount(el) {
    var first = el.getAttribute('data-first'), chips = el.hasAttribute('data-chips');
    var list = R.slice();
    if (first) list.sort(function (a, b) { return (b.t === first) - (a.t === first); });
    var faces = R.filter(function (r) { return r.p; }).concat(R.filter(function (r) { return !r.p; })).slice(0, 6);
    el.innerHTML =
      '<div class="rv-bar">' +
        '<a class="rv-score" href="' + GURL + '" target="_blank" rel="noopener"><span class="rv-faces" aria-hidden="true">' + faces.map(function (r) { return avatar(r, 'sm'); }).join('') + '</span>' +
          '<span><b>5,0</b> <span class="rv-stars sm" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><small>36 avaliações no Google, todas de 5 estrelas</small></span></a>' +
        (chips ? '<div class="rv-chips" role="group" aria-label="Filtrar testemunhos">' + ['Todas', 'Compra', 'Venda', 'Arrendamento'].map(function (t, i) {
          return '<button type="button" aria-pressed="' + (i ? 'false' : 'true') + '" data-f="' + t + '">' + t + ' <span>' + chipCount(t) + '</span></button>'; }).join('') + '</div>' : '') +
        '<div class="rv-nav"><button type="button" class="rv-prev" aria-label="Testemunho anterior"><svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg></button><button type="button" class="rv-next" aria-label="Testemunho seguinte"><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></button></div>' +
      '</div>' +
      '<div class="rv-track" tabindex="0" role="region" aria-label="Testemunhos de clientes" aria-roledescription="carrossel">' + list.map(card).join('') + '</div>' +
      '<div class="rv-foot"><div class="rv-prog" aria-hidden="true"><span></span></div><a href="' + GURL + '" target="_blank" rel="noopener">Ler as 36 avaliações no Google <span aria-hidden="true">↗</span></a></div>';

    var track = el.querySelector('.rv-track'), prog = el.querySelector('.rv-prog span');
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches, paused = false, timer = null, DUR = 5500;
    function cards() { return Array.prototype.filter.call(track.children, function (c) { return !c.hidden; }); }
    function step() { var c = cards()[0]; return c ? c.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 18) : 300; }
    function current() { var cs = cards(), x = track.scrollLeft, best = 0; cs.forEach(function (c, i) { if (Math.abs(c.offsetLeft - track.offsetLeft - x) < Math.abs(cs[best].offsetLeft - track.offsetLeft - x)) best = i; }); return best; }
    function go(dir) {
      var max = track.scrollWidth - track.clientWidth - 4;
      if (dir > 0 && track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: still ? 'auto' : 'smooth' });
      else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: still ? 'auto' : 'smooth' });
      else track.scrollBy({ left: dir * step(), behavior: still ? 'auto' : 'smooth' });
    }
    function mark() { var i = current(); cards().forEach(function (c, k) { c.classList.toggle('on', k === i); }); }
    function restart() {
      clearTimeout(timer); if (prog) { prog.style.transition = 'none'; prog.style.width = '0'; }
      if (still || paused) return;
      requestAnimationFrame(function () { requestAnimationFrame(function () { if (prog) { prog.style.transition = 'width ' + DUR + 'ms linear'; prog.style.width = '100%'; } }); });
      timer = setTimeout(function () { go(1); restart(); }, DUR);
    }
    el.querySelector('.rv-next').onclick = function () { go(1); restart(); };
    el.querySelector('.rv-prev').onclick = function () { go(-1); restart(); };
    ['mouseenter', 'focusin', 'touchstart'].forEach(function (ev) { el.addEventListener(ev, function () { paused = true; restart(); }, { passive: true }); });
    ['mouseleave', 'focusout'].forEach(function (ev) { el.addEventListener(ev, function () { paused = false; restart(); }); });
    var st; track.addEventListener('scroll', function () { clearTimeout(st); st = setTimeout(mark, 60); }, { passive: true });
    track.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { go(1); e.preventDefault(); } if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); } });
    // "Ler tudo" só onde o texto foi cortado.
    function clamp() { Array.prototype.forEach.call(track.querySelectorAll('.rv-card'), function (c) { var p = c.querySelector('blockquote'), b = c.querySelector('.rv-more'); if (!c.classList.contains('open')) b.hidden = p.scrollHeight <= p.clientHeight + 2; }); }
    track.addEventListener('click', function (e) { var b = e.target.closest('.rv-more'); if (!b) return; var c = b.closest('.rv-card'); var o = c.classList.toggle('open'); b.textContent = o ? 'Mostrar menos' : 'Ler tudo'; });
    if (chips) el.querySelector('.rv-chips').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; var f = b.getAttribute('data-f');
      el.querySelectorAll('.rv-chips button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      Array.prototype.forEach.call(track.children, function (c, i) { var t = c.getAttribute('data-t'); c.hidden = !(f === 'Todas' || t.indexOf(f) === 0 || (f === 'Compra' && t === 'Várias compras')); });
      track.classList.remove('swap'); void track.offsetWidth; track.classList.add('swap');
      track.scrollTo({ left: 0 }); mark(); clamp(); restart();
    });
    // Só anda sozinho quando está à vista.
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { el.classList.add('live'); if (!paused) restart(); } else { clearTimeout(timer); } }); }, { threshold: .25 }).observe(el);
    else restart();
    mark(); setTimeout(clamp, 50); window.addEventListener('resize', function () { clamp(); mark(); });
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('[data-reviews]'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
