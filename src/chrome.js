/*
 * Casa 361 — o que todas as páginas partilham: a faixa da maquete, o
 * cabeçalho, o rodapé, os formulários, os guardados e o movimento.
 *
 * Formulários: na maquete, nada é enviado. No site final, cada pedido
 * (contacto, visita, avaliação, alerta) segue pelo servidor da Autisync para
 * o Casafari CRM (API do Casafari, operação Leads_Insert), com nome, email,
 * telefone, mensagem, origem "Website" e a referência do imóvel, e aparece
 * no Casafari como um contacto novo, como hoje.
 */
(function () {
  var LOGO = 'https://admin.casafaricrm.com/UserFiles/2739/Images/13af704e-4424-4d3e-884a-40ab1a831be7.png';
  var OLD = 'https://www.casa361.com/';
  var PHONE = '913 613 005', TEL = '+351913613005', MAIL = 'geral@casa361.com';
  var page = document.body.getAttribute('data-page') || '';
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var links = [['imoveis.html', 'Imóveis', 'imoveis'], ['vender.html', 'Vender', 'vender'], ['servicos.html', 'Serviços', 'servicos'], ['empresa.html', 'Empresa', 'empresa'], ['contactos.html', 'Contactos', 'contactos']];

  var bar = document.createElement('div');
  bar.className = 'mq-bar';
  bar.innerHTML = '<div class="wrap"><span>Maquete para apreciação · proposta Autisync para a Casa 361. Imóveis e contactos ligados ao Casafari CRM.</span><button type="button" id="mq-toggle">Esconder notas</button></div>';
  document.body.insertBefore(bar, document.body.firstChild);

  var top = document.getElementById('top');
  if (top) {
    top.className = 'top' + (document.body.hasAttribute('data-hero') ? ' over' : '');
    top.innerHTML = '<div class="wrap"><a class="logo" href="index.html" aria-label="Casa 361, página inicial"><img src="' + LOGO + '" alt="Casa 361 · Mais do que imóveis, soluções." width="128" height="89"></a>' +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Principal">' + links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
      }).join('') + '<a href="imoveis.html?guardados=1" class="saved" aria-label="Imóveis guardados"><span class="ico">' + C361.heart + '</span><span class="n" id="fav-n"></span></a><a class="nav-call" href="tel:' + TEL + '">☏ Ligar ' + PHONE + '</a></nav>' +
      '<a class="call" href="tel:' + TEL + '"><span aria-hidden="true">☏</span> ' + PHONE + '</a></div>';
    var btn = top.querySelector('.menu-btn'), nav = top.querySelector('.nav');
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(o)); top.classList.toggle('menu-open', o); });
    var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
  function favCount() { var n = C361.favs().length, el = document.getElementById('fav-n'); if (el) el.textContent = n ? String(n) : ''; }
  favCount(); document.addEventListener('c361:favs', favCount);

  var foot = document.getElementById('foot');
  if (foot) {
    foot.className = 'foot';
    foot.innerHTML = '<div class="wrap">' +
      '<p class="foot-line">Mais do que imóveis, <em>soluções.</em></p>' +
      '<div class="cols">' +
      '<div><img src="' + LOGO + '" alt="Casa 361" width="132" height="92" class="foot-logo"><p>Imobiliária na zona norte de Lisboa. Compra, venda e arrendamento em Vila Franca de Xira, Alverca, Póvoa de Santa Iria e Alhandra.</p></div>' +
      '<div><h4>Imóveis</h4><ul><li><a href="imoveis.html">Comprar</a></li><li><a href="imoveis.html?deal=arrendamento">Arrendar</a></li><li><a href="imoveis.html?guardados=1">Guardados</a></li><li><a href="vender.html">Vender o seu imóvel</a></li><li><a href="vender.html#rapida">Compramos o seu imóvel</a></li></ul></div>' +
      '<div><h4>Casa 361</h4><ul><li><a href="empresa.html">Sobre nós</a></li><li><a href="servicos.html">Serviços</a></li><li><a href="servicos.html#credito">Crédito habitação</a></li><li><a href="empresa.html#recrutamento">Recrutamento</a></li></ul></div>' +
      '<div><h4>Contactos</h4><ul><li><a href="tel:' + TEL + '" class="num">' + PHONE + '</a><br><small>Chamada para rede móvel nacional</small></li><li><a href="mailto:' + MAIL + '">' + MAIL + '</a></li><li><a href="https://wa.me/351913613005" target="_blank" rel="noopener">WhatsApp</a></li></ul></div>' +
      '</div>' +
      // O que o rodapé do site atual tem e tem de continuar a ter: as ligações legais, o Livro de
      // Reclamações e o IMPIC (obrigatórios para uma imobiliária), a licença AMI e as redes sociais.
      // As páginas legais apontam, na maquete, para as do site atual; no site final passam para cá.
      '<div class="legal-links"><ul>' + [
        ['empresa.html#recrutamento', 'Recrutamento'], [OLD + 'mapa-do-site', 'Mapa do site'], ['https://www.livroreclamacoes.pt/inicio', 'Livro de reclamações'],
        [OLD + 'resolucao-de-litigios', 'Resolução alternativa de litígios'], [OLD + 'politica-de-privacidade', 'Política de privacidade'], [OLD + 'politica-de-cookies', 'Política de cookies'],
        [OLD + 'termos-e-condicoes', 'Termos de uso'], ['#cookies', 'Preferências de cookies'],
      ].map(function (l) { var ext = /^https?:/.test(l[0]); return '<li><a href="' + l[0] + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + l[1] + '</a></li>'; }).join('') +
      '<li class="ami">Licença AMI 24691</li></ul></div>' +
      '<div class="badges">' +
      '<a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener" aria-label="Livro de Reclamações Eletrónico"><img src="' + OLD + 'Assets/Images/livro-reclamacoes_sm.png" alt="Livro de Reclamações" height="64"></a>' +
      '<a href="https://www.impic.pt/" target="_blank" rel="noopener" aria-label="IMPIC, Instituto dos Mercados Públicos, do Imobiliário e da Construção"><img src="' + OLD + 'Assets/Images/impic-logo_sm.png" alt="IMPIC" height="64"></a>' +
      '</div>' +
      '<div class="legal"><span>® Casa 361, Unipessoal Lda. Todos os direitos reservados.</span>' +
      '<span class="social"><a href="https://www.facebook.com/Casa.361com" target="_blank" rel="noopener" aria-label="Casa 361 no Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9z" fill="currentColor"/></svg></a>' +
      '<a href="https://www.instagram.com/casa.361com/" target="_blank" rel="noopener" aria-label="Casa 361 no Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg></a></span>' +
      '<span>Imóveis geridos com Casafari CRM</span></div></div>';
  }

  // WhatsApp sempre à mão.
  var wa = document.createElement('a');
  wa.className = 'wa-float'; wa.href = 'https://wa.me/351913613005'; wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Falar connosco no WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5A12.4 12.4 0 0 0 5.3 22.2L3.6 28.4l6.4-1.7A12.4 12.4 0 1 0 16 3.5zm0 22.6c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.4 8.4 0 0 1-4.2-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" fill="currentColor"/></svg>';
  document.body.appendChild(wa);

  // Notas da maquete: mostrar / esconder (lembra-se neste browser).
  var t = document.getElementById('mq-toggle');
  function setNotes(off) { document.body.classList.toggle('mq-off', off); t.textContent = off ? 'Mostrar notas' : 'Esconder notas'; }
  try { setNotes(localStorage.getItem('c361-mq') === 'off'); } catch (e) { /* sem memória, notas visíveis */ }
  t.addEventListener('click', function () {
    var off = !document.body.classList.contains('mq-off');
    setNotes(off);
    try { localStorage.setItem('c361-mq', off ? 'off' : 'on'); } catch (e) { /* ignore */ }
  });

  // Formulários. Com a API ligada (config.js), o pedido vai para a casa361-api, que o põe
  // no Casafari CRM e envia um email para geral@casa361.com. Sem API (maquete), só confirma.
  Array.prototype.forEach.call(document.querySelectorAll('form.form'), function (f) {
    var hp = document.createElement('input'); // armadilha para robôs: invisível para pessoas
    hp.type = 'text'; hp.name = 'website'; hp.tabIndex = -1; hp.autocomplete = 'off'; hp.setAttribute('aria-hidden', 'true');
    hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0';
    f.appendChild(hp);
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!f.reportValidity()) return;
      var btn = f.querySelector('button[type="submit"]'), err = f.querySelector('.form-err');
      function done() { f.classList.add('sent'); var ok = f.querySelector('.ok'); if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); } }
      if (!C361.api) { done(); return; }
      var data = { kind: f.getAttribute('data-lead') || 'contacto', consent: true, page: location.pathname, ref: document.body.getAttribute('data-ref') || '', details: {} };
      Array.prototype.forEach.call(f.elements, function (el) {
        if (!el.name || el.type === 'submit' || el.type === 'checkbox' || (el.type === 'radio' && !el.checked)) return;
        var v = String(el.value || '').trim(); if (!v) return;
        if (['name', 'email', 'phone', 'message', 'website'].indexOf(el.name) >= 0) { data[el.name] = v; return; }
        var lab = el.closest('label'), legend = el.closest('fieldset') && el.closest('fieldset').querySelector('legend');
        var key = el.type === 'radio' && legend ? legend.textContent.trim() : lab ? (lab.firstChild && lab.firstChild.nodeType === 3 ? lab.firstChild.textContent.trim() : el.name) : el.name;
        data.details[key || el.name] = v;
      });
      if (btn) { btn.disabled = true; btn.dataset.t = btn.textContent; btn.textContent = 'A enviar…'; }
      if (err) err.remove();
      fetch(C361.api + '/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw r.status; done(); })
        .catch(function () {
          var m = document.createElement('p'); m.className = 'form-err'; m.setAttribute('role', 'alert');
          m.innerHTML = 'Não conseguimos enviar agora. Ligue-nos para o <a href="tel:' + TEL + '">' + PHONE + '</a> ou escreva para <a href="mailto:' + MAIL + '">' + MAIL + '</a>.';
          (btn ? btn.parentNode : f).appendChild(m);
        })
        .then(function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.t; } });
    });
  });

  // Movimento: cada bloco entra uma vez, quando chega ao ecrã. Os cartões
  // de uma grelha entram em cascata. Sem movimento para quem o desligou.
  window.C361Reveal = function (root) {
    var items = (root || document).querySelectorAll('.reveal:not(.in)');
    if (still || !('IntersectionObserver' in window)) { Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); }) : [el];
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 90 + 'ms';
        el.classList.add('in'); io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  };
  document.documentElement.classList.add('js');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { window.C361Reveal(); }); else window.C361Reveal();

  // Parallax suave nas imagens marcadas (só em ecrãs grandes).
  var par = document.querySelectorAll('[data-parallax]');
  if (par.length && !still && window.matchMedia('(min-width: 900px)').matches) {
    var tick = false;
    var move = function () {
      tick = false;
      Array.prototype.forEach.call(par, function (el) {
        var r = el.parentElement.getBoundingClientRect(), k = parseFloat(el.getAttribute('data-parallax')) || 0.12;
        if (r.bottom < 0 || r.top > innerHeight) return;
        el.style.transform = 'translate3d(0,' + ((r.top + r.height / 2 - innerHeight / 2) * -k).toFixed(1) + 'px,0) scale(1.12)';
      });
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }
})();
