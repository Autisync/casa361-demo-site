/*
 * Casa 361 — o que todas as páginas partilham: a faixa da maquete, o
 * cabeçalho, o rodapé, os formulários, os guardados e o movimento.
 *
 * Formulários: com a API ligada (config.js), cada pedido (contacto, visita,
 * avaliação, alerta) segue pela casa361-api para geral@casa361.com, com nome,
 * email, telefone, mensagem e a referência do imóvel, e quem o enviou recebe
 * logo uma resposta automática. Não entra em nenhum CRM.
 */
(function () {
  // O logótipo, guardado na biblioteca da Autisync (já não no Casafari).
  var LOGO = 'https://api.autisync.com/uploads/media/571e72b2-fb2e-4af5-9a75-cac27ef70d6d/4bfe729e-92ec-4733-9d8a-cb8552e5f4d1.png';
  var PHONE = '913 613 005', TEL = '+351913613005', MAIL = 'geral@casa361.com';
  var page = document.body.getAttribute('data-page') || '';
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var links = [['imoveis.html', 'Imóveis', 'imoveis'], ['vender.html', 'Vender', 'vender'], ['credito.html', 'Crédito', 'credito'], ['servicos.html', 'Serviços', 'servicos'], ['empresa.html', 'Empresa', 'empresa'], ['contactos.html', 'Contactos', 'contactos']];
  var IG = 'https://www.instagram.com/casa.361com/', FB = 'https://www.facebook.com/Casa.361com';
  var igIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>';
  var fbIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9z" fill="currentColor"/></svg>';

  // O logótipo da Casa 361 redesenhado em vetor: a casa a ouro, "CASA" claro e "361" a ouro,
  // sem a caixa preta do PNG e na horizontal, para ficar mais baixo no cabeçalho.
  var MARK = '<svg class="logo-mark" viewBox="0 0 52 39" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 22.5 25.6 1.5 50 22.5"/><path d="M35 2.6V37"/><path d="M8.4 21.5V31"/><path d="M16 22.5v14"/><path d="M21.8 36.5v-11h7.8v11"/><path d="M42.8 21.5V31"/></g></svg>';
  var LOCKUP = MARK + '<span class="logo-word"><span class="lw1">CASA <b>361</b></span><span class="lw2">Mais do que imóveis, soluções.</span></span>';
  // O ícone no separador do browser: a mesma casa, a ouro sobre preto.
  if (!document.querySelector('link[rel="icon"]')) {
    var ico = document.createElement('link'); ico.rel = 'icon'; ico.type = 'image/svg+xml';
    ico.href = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#181818"/><g transform="translate(6 12)" fill="none" stroke="#c9a15f" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 22.5 25.6 1.5 50 22.5"/><path d="M35 2.6V37"/><path d="M8.4 21.5V31"/><path d="M16 22.5v14"/><path d="M21.8 36.5v-11h7.8v11"/><path d="M42.8 21.5V31"/></g></svg>');
    document.head.appendChild(ico);
  }

  var bar = document.createElement('div');
  bar.className = 'mq-bar';
  bar.innerHTML = '<div class="wrap"><span>Maquete para apreciação · proposta Autisync para a Casa 361. Imóveis da conta UrbanFocus no CRM Autisync · pedidos para geral@casa361.com.</span><button type="button" id="mq-toggle">Esconder notas</button></div>';
  document.body.insertBefore(bar, document.body.firstChild);

  var top = document.getElementById('top');
  if (top) {
    top.className = 'top' + (document.body.hasAttribute('data-hero') ? ' over' : '');
    top.innerHTML = '<div class="wrap"><a class="logo" href="index.html" aria-label="Casa 361, página inicial">' + LOCKUP + '</a>' +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Principal">' + links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
      }).join('') + '<span class="nav-soc"><a href="' + IG + '" target="_blank" rel="noopener" aria-label="Casa 361 no Instagram">' + igIcon + '</a><a href="' + FB + '" target="_blank" rel="noopener" aria-label="Casa 361 no Facebook">' + fbIcon + '</a></span><a href="imoveis.html?guardados=1" class="saved" aria-label="Imóveis guardados"><span class="ico">' + C361.heart + '</span><span class="n" id="fav-n"></span></a><a class="nav-call" href="tel:' + TEL + '">☏ Ligar ' + PHONE + '</a></nav>' +
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
      '<div><a class="logo foot-logo" href="index.html" aria-label="Casa 361">' + LOCKUP + '</a><p>Imobiliária na zona norte de Lisboa. Compra, venda e arrendamento em Vila Franca de Xira, Alverca, Póvoa de Santa Iria e Alhandra.</p></div>' +
      '<div><h4>Imóveis</h4><ul><li><a href="imoveis.html">Comprar</a></li><li><a href="imoveis.html?deal=arrendamento">Arrendar</a></li><li><a href="imoveis.html?guardados=1">Guardados</a></li><li><a href="vender.html">Vender o seu imóvel</a></li><li><a href="vender.html#rapida">Compramos o seu imóvel</a></li></ul></div>' +
      '<div><h4>Casa 361</h4><ul><li><a href="empresa.html">Sobre nós</a></li><li><a href="servicos.html">Serviços</a></li><li><a href="credito.html">Crédito habitação</a></li><li><a href="empresa.html#recrutamento">Recrutamento</a></li></ul></div>' +
      '<div><h4>Contactos</h4><ul><li><a href="tel:' + TEL + '" class="num">' + PHONE + '</a><br><small>Chamada para rede móvel nacional</small></li><li><a href="mailto:' + MAIL + '">' + MAIL + '</a></li><li><a href="https://wa.me/351913613005" target="_blank" rel="noopener">WhatsApp</a></li></ul></div>' +
      '</div>' +
      // O que o rodapé do site atual tem e tem de continuar a ter: as ligações legais, o Livro de
      // Reclamações e o IMPIC (obrigatórios para uma imobiliária), a licença AMI e as redes sociais.
      // As páginas legais apontam, na maquete, para as do site atual; no site final passam para cá.
      '<div class="legal-links"><ul>' + [
        ['empresa.html#recrutamento', 'Recrutamento'], ['mapa-do-site.html', 'Mapa do site'], ['https://www.livroreclamacoes.pt/inicio', 'Livro de reclamações'],
        ['litigios.html', 'Resolução alternativa de litígios'], ['privacidade.html', 'Política de privacidade'], ['cookies.html', 'Política de cookies'],
        ['termos.html', 'Termos de uso'], ['#cookies', 'Preferências de cookies'],
      ].map(function (l) { var ext = /^https?:/.test(l[0]); return '<li><a href="' + l[0] + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + l[1] + '</a></li>'; }).join('') +
      '<li class="ami">Licença AMI 24691</li></ul></div>' +
      '<div class="badges">' +
      '<a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener" aria-label="Livro de Reclamações Eletrónico"><span class="badge-lr"><img src="img/livro-reclamacoes-ouro.png" alt="Livro de Reclamações" width="143" height="26"></span></a>' +
      '<a href="https://www.impic.pt/" target="_blank" rel="noopener" aria-label="IMPIC, Instituto dos Mercados Públicos, do Imobiliário e da Construção"><span class="badge-text"><b>IMPIC</b><small>Mediação imobiliária · AMI 24691</small></span></a>' +
      '</div>' +
      '<div class="legal"><span>® Casa 361, Unipessoal Lda. Todos os direitos reservados.</span>' +
      '<span class="social"><a href="https://www.facebook.com/Casa.361com" target="_blank" rel="noopener" aria-label="Casa 361 no Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9z" fill="currentColor"/></svg></a>' +
      '<a href="https://www.instagram.com/casa.361com/" target="_blank" rel="noopener" aria-label="Casa 361 no Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg></a></span>' +
      '</div></div>';
  }

  // WhatsApp: um assistente guiado. A pessoa escolhe o assunto, diz o nome e a zona, e o WhatsApp
  // abre com a mensagem já escrita para a Casa 361. Sem CRM nada fica guardado: a conversa
  // continua no WhatsApp da Casa 361, com uma pessoa.
  var WA = '351913613005';
  var waIcon = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5A12.4 12.4 0 0 0 5.3 22.2L3.6 28.4l6.4-1.7A12.4 12.4 0 1 0 16 3.5zm0 22.6c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.4 8.4 0 0 1-4.2-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" fill="currentColor"/></svg>';
  var TOPICS = ['Quero comprar casa', 'Quero vender o meu imóvel', 'Quero arrendar casa', 'Tenho um imóvel para arrendar', 'Quero saber quanto vale a minha casa', 'Preciso de ajuda com crédito habitação', 'Outro assunto'];
  var wa = document.createElement('button');
  wa.type = 'button'; wa.className = 'wa-float'; wa.setAttribute('aria-label', 'Falar connosco no WhatsApp'); wa.setAttribute('aria-expanded', 'false');
  wa.innerHTML = waIcon;
  var panel = document.createElement('div');
  panel.className = 'wa-panel'; panel.hidden = true; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Falar com a Casa 361 no WhatsApp');
  panel.innerHTML = '<div class="wa-head"><span class="wa-ico">' + waIcon + '</span><div><b>Casa 361</b><small>Respondemos no WhatsApp</small></div><button type="button" class="wa-x" aria-label="Fechar">×</button></div>' +
    '<form class="wa-body"><p class="wa-hi">Olá! Como podemos ajudar?</p><fieldset><legend class="sr">Assunto</legend>' +
    TOPICS.map(function (t, i) { return '<label><input type="radio" name="wa-topic" value="' + t + '"' + (i ? '' : ' checked') + '><span>' + t + '</span></label>'; }).join('') +
    '</fieldset><label class="wa-f">Nome<input name="wa-name" required autocomplete="name" placeholder="O seu nome"></label>' +
    '<label class="wa-f">Localidade de interesse<input name="wa-zone" placeholder="Ex.: Alverca, Vila Franca de Xira"></label>' +
    '<label class="wa-f">Mais algum detalhe? (opcional)<textarea name="wa-msg" rows="2" placeholder="Ex.: T2 até 250 000 €"></textarea></label>' +
    '<button type="submit" class="btn btn-wa wa-go">' + waIcon + ' Continuar no WhatsApp</button>' +
    '<p class="wa-note">Abre o WhatsApp com a mensagem pronta. Só é enviada quando carregar em enviar.</p></form>';
  function waOpen(o) {
    panel.hidden = !o; wa.setAttribute('aria-expanded', String(o));
    if (o) { var f = panel.querySelector('input[name="wa-name"]'); setTimeout(function () { f.focus(); }, 30); } else wa.focus();
  }
  wa.addEventListener('click', function () { waOpen(panel.hidden); });
  panel.querySelector('.wa-x').addEventListener('click', function () { waOpen(false); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !panel.hidden) waOpen(false); });
  panel.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var f = ev.target; if (!f.reportValidity()) return;
    var topic = (f.querySelector('input[name="wa-topic"]:checked') || {}).value || '';
    var lines = ['Olá! Sou ' + f['wa-name'].value.trim() + '.', topic + '.'];
    if (f['wa-zone'].value.trim()) lines.push('Localidade: ' + f['wa-zone'].value.trim() + '.');
    if (f['wa-msg'].value.trim()) lines.push(f['wa-msg'].value.trim());
    lines.push('(Mensagem enviada a partir do website)');
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    waOpen(false);
  });
  document.body.appendChild(wa);
  document.body.appendChild(panel);

  // Notas da maquete: mostrar / esconder (lembra-se neste browser).
  var t = document.getElementById('mq-toggle');
  function setNotes(off) { document.body.classList.toggle('mq-off', off); t.textContent = off ? 'Mostrar notas' : 'Esconder notas'; }
  try { setNotes(localStorage.getItem('c361-mq') === 'off'); } catch (e) { /* sem memória, notas visíveis */ }
  t.addEventListener('click', function () {
    var off = !document.body.classList.contains('mq-off');
    setNotes(off);
    try { localStorage.setItem('c361-mq', off ? 'off' : 'on'); } catch (e) { /* ignore */ }
  });

  // Formulários. Com a API ligada (config.js), o pedido vai para a casa361-api, que envia
  // um email para geral@casa361.com e a resposta automática à pessoa. Sem API, só confirma.
  // Formulários mais claros: um ícone em cada campo, o botão de envio com ícone e,
  // por baixo, os atalhos para quem prefere falar já (WhatsApp, telefone, email).
  var IC = function (k) { return window.C361 && C361.icon ? C361.icon(k) : ''; };
  // Qualquer elemento com data-ico="nome" recebe o ícone à frente.
  Array.prototype.forEach.call(document.querySelectorAll('[data-ico]'), function (el) { el.insertAdjacentHTML('afterbegin', '<span class="li-ico">' + IC(el.getAttribute('data-ico')) + '</span>'); });
  var WA_TXT = { contacto: 'Olá! Gostava de falar com a Casa 361.', credito: 'Olá! Gostava de ajuda com o crédito habitação.', avaliacao: 'Olá! Gostava de saber quanto vale a minha casa.',
    visita: 'Olá! Gostava de marcar uma visita' + (document.body.getAttribute('data-ref') ? ' ao imóvel ref. ' + document.body.getAttribute('data-ref') : '') + '.', alerta: 'Olá! Procuro casa e gostava de receber sugestões.', recrutamento: 'Olá! Tenho interesse em trabalhar na Casa 361.' };
  Array.prototype.forEach.call(document.querySelectorAll('form.form'), function (f) {
    Array.prototype.forEach.call(f.querySelectorAll('input[name], textarea, select[name]'), function (el) {
      if (el.type === 'radio' || el.type === 'checkbox' || el.type === 'hidden' || el.type === 'range' || el.closest('.fi')) return;
      var n = (el.name || '').toLowerCase(), k = el.tagName === 'TEXTAREA' ? 'chat' : n === 'name' ? 'user' : n === 'phone' || el.type === 'tel' ? 'phone' : n === 'email' || el.type === 'email' ? 'mail' :
        /when|hora|dia|day|time/.test(n) ? 'clock' : /via/.test(n) ? 'chat' : /zona|local|morada|address|area/.test(n) ? 'pin' : /pre[cç]o|price|valor|budget|renda/.test(n) ? 'euro' : el.tagName === 'SELECT' ? '' : 'spark';
      if (!k) return;
      var w = document.createElement('span'); w.className = 'fi' + (el.tagName === 'TEXTAREA' ? ' fi-ta' : '');
      el.parentNode.insertBefore(w, el); w.innerHTML = IC(k); w.appendChild(el);
    });
    var sb = f.querySelector('button[type="submit"]');
    if (sb && !sb.querySelector('.ico')) { var arr = sb.querySelector('.arr'); if (arr) arr.remove(); sb.insertAdjacentHTML('afterbegin', IC('send')); sb.classList.add('btn-send'); }
    var kind = f.getAttribute('data-lead') || 'contacto';
    if (sb && !f.hasAttribute('data-no-quick')) {
      var q = document.createElement('div'); q.className = 'quick';
      q.innerHTML = '<span class="quick-t">Prefere falar já?</span>' +
        '<a class="qk qk-wa" href="https://wa.me/351913613005?text=' + encodeURIComponent(WA_TXT[kind] || WA_TXT.contacto) + '" target="_blank" rel="noopener">' + waIcon + 'WhatsApp</a>' +
        '<a class="qk" href="tel:' + TEL + '">' + IC('phone') + 'Ligar</a>' +
        '<a class="qk" href="mailto:' + MAIL + '">' + IC('mail') + 'Email</a>';
      sb.insertAdjacentElement('afterend', q);
    }
    var okm = f.querySelector('.ok'); if (okm && !okm.querySelector('.ok-ico')) okm.insertAdjacentHTML('afterbegin', '<span class="ok-ico" aria-hidden="true"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/><path d="m15 27 7.5 7.5L38 19"/></svg></span>');
  });

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
        // Caixas com nome (ex.: "A casa tem"): os valores marcados, juntos. As de consentimento não têm nome.
        if (el.type === 'checkbox') { if (el.name && el.checked) data.details[el.name] = data.details[el.name] ? data.details[el.name] + ', ' + el.value : el.value; return; }
        if (!el.name || el.type === 'submit' || (el.type === 'radio' && !el.checked)) return;
        var v = String(el.value || '').trim(); if (!v) return;
        if (['name', 'email', 'phone', 'message', 'website'].indexOf(el.name) >= 0) { data[el.name] = v; return; }
        var lab = el.closest('label'), legend = el.closest('fieldset') && el.closest('fieldset').querySelector('legend');
        var key = el.type === 'radio' && legend ? legend.textContent.trim() : lab ? (lab.firstChild && lab.firstChild.nodeType === 3 ? lab.firstChild.textContent.trim() : el.name) : el.name;
        data.details[key || el.name] = v;
      });
      if (btn) { btn.disabled = true; btn._h = btn.innerHTML; btn.classList.add('is-busy'); btn.innerHTML = '<span class="spin" aria-hidden="true"></span>A enviar…'; }
      if (err) err.remove();
      fetch(C361.api + '/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw r.status; done(); })
        .catch(function () {
          var m = document.createElement('p'); m.className = 'form-err'; m.setAttribute('role', 'alert');
          m.innerHTML = 'Não conseguimos enviar agora. Ligue-nos para o <a href="tel:' + TEL + '">' + PHONE + '</a> ou escreva para <a href="mailto:' + MAIL + '">' + MAIL + '</a>.';
          (btn ? btn.parentNode : f).appendChild(m);
        })
        .then(function () { if (btn) { btn.disabled = false; btn.classList.remove('is-busy'); btn.innerHTML = btn._h; } });
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
