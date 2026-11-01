/*
 * Casa 361 — o que todas as páginas partilham: a faixa da maquete, o
 * cabeçalho, o rodapé e os formulários.
 *
 * Formulários: na maquete, nada é enviado. No site final, cada pedido
 * (contacto, visita, avaliação) segue pelo servidor da Autisync para o
 * Casafari CRM (API do Casafari, operação Leads_Insert), com nome, email,
 * telefone, mensagem, origem "Website" e a referência do imóvel, e aparece
 * no Casafari como um contacto novo, como hoje.
 */
(function () {
  var LOGO = 'https://admin.casafaricrm.com/UserFiles/2739/Images/13af704e-4424-4d3e-884a-40ab1a831be7.png';
  var PHONE = '913 613 005', TEL = '+351913613005', MAIL = 'geral@casa361.com';
  var page = document.body.getAttribute('data-page') || '';
  var links = [['imoveis.html', 'Imóveis', 'imoveis'], ['vender.html', 'Vender', 'vender'], ['servicos.html', 'Serviços', 'servicos'], ['empresa.html', 'Empresa', 'empresa'], ['index.html#contactos', 'Contactos', 'contactos']];

  var bar = document.createElement('div');
  bar.className = 'mq-bar';
  bar.innerHTML = '<div class="wrap"><span>Maquete para apreciação · proposta Autisync para a Casa 361. Imóveis e contactos ligados ao Casafari CRM.</span><button type="button" id="mq-toggle">Esconder notas</button></div>';
  document.body.insertBefore(bar, document.body.firstChild);

  var top = document.getElementById('top');
  if (top) {
    top.className = 'top';
    top.innerHTML = '<div class="wrap"><a class="logo" href="index.html" aria-label="Casa 361, página inicial"><img src="' + LOGO + '" alt="Casa 361 · Mais do que imóveis, soluções." width="108" height="75"></a>' +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Principal">' + links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
      }).join('') + '</nav>' +
      '<a class="call" href="tel:' + TEL + '"><span aria-hidden="true">☏</span> ' + PHONE + '</a></div>';
    var btn = top.querySelector('.menu-btn'), nav = top.querySelector('.nav');
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(o)); });
  }

  var foot = document.getElementById('foot');
  if (foot) {
    foot.className = 'foot';
    foot.innerHTML = '<div class="wrap"><div class="cols">' +
      '<div><img src="' + LOGO + '" alt="Casa 361" width="120" height="84" style="width:120px;margin-bottom:14px"><p>Imobiliária na zona norte de Lisboa. Compra, venda e arrendamento em Vila Franca de Xira, Alverca, Póvoa de Santa Iria e Alhandra.</p></div>' +
      '<div><h4>Imóveis</h4><ul><li><a href="imoveis.html">Comprar</a></li><li><a href="imoveis.html?deal=arrendamento">Arrendar</a></li><li><a href="vender.html">Vender o seu imóvel</a></li><li><a href="vender.html#rapida">Compramos o seu imóvel</a></li></ul></div>' +
      '<div><h4>Casa 361</h4><ul><li><a href="empresa.html">Sobre nós</a></li><li><a href="servicos.html">Serviços</a></li><li><a href="servicos.html#credito">Crédito habitação</a></li><li><a href="empresa.html#recrutamento">Recrutamento</a></li></ul></div>' +
      '<div><h4>Contactos</h4><ul><li><a href="tel:' + TEL + '" class="num">' + PHONE + '</a><br><small>Chamada para rede móvel nacional</small></li><li><a href="mailto:' + MAIL + '">' + MAIL + '</a></li></ul></div>' +
      '</div><div class="legal"><span>© Casa 361, Unipessoal Lda · AMI 24691</span>' +
      '<span><a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">Livro de Reclamações</a> · <a href="#">Resolução alternativa de litígios</a> · <a href="#">Privacidade</a> · <a href="#">Cookies</a></span></div></div>';
  }

  // Notas da maquete: mostrar / esconder (lembra-se neste browser).
  var t = document.getElementById('mq-toggle');
  function setNotes(off) { document.body.classList.toggle('mq-off', off); t.textContent = off ? 'Mostrar notas' : 'Esconder notas'; }
  try { setNotes(localStorage.getItem('c361-mq') === 'off'); } catch (e) { /* sem memória, notas visíveis */ }
  t.addEventListener('click', function () {
    var off = !document.body.classList.contains('mq-off');
    setNotes(off);
    try { localStorage.setItem('c361-mq', off ? 'off' : 'on'); } catch (e) { /* ignore */ }
  });

  // Formulários: validação e a confirmação, sem enviar nada na maquete.
  Array.prototype.forEach.call(document.querySelectorAll('form.form'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!f.reportValidity()) return;
      f.classList.add('sent');
      var ok = f.querySelector('.ok');
      if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); }
    });
  });
})();
