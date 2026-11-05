/*
 * Casa 361 — os imóveis.
 *
 * Com a API ligada (config.js), os imóveis vêm da conta UrbanFocus no CRM
 * Autisync, pela casa361-api: os que estiverem publicados no site, com as
 * fotografias guardadas no CRM. Inserir, alterar, reservar ou vender um imóvel
 * faz-se no CRM; o site muda sozinho. Sem API, ficam os imóveis escritos aqui
 * (os da maquete, copiados de casa361.com).
 */
(function () {
  var CDN = 'https://cdn.proppy.app/propertyfiles/5369/';
  function p(id, files) { return files.map(function (f) { return CDN + id + '/' + f; }); }

  window.CASA361_LISTINGS = [
    {
      ref: '0076', tags: ['terraco','garagem','novo','comboio'], id: 909371, deal: 'venda', type: 'Apartamento', typology: 'T3', price: 370000,
      parish: 'Castanheira do Ribatejo e Cachoeiras', area_name: 'Castanheira do Ribatejo', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Apartamento T3 com 2 lugares de garagem e terraço de 49 m²',
      beds: 3, baths: 2, area: 173, energy: 'A', year: 2026, garage: 2, isNew: true,
      photos: p(909371, ['7578637a-9a0d-4126-964e-7bd0532119af.jpg', 'fd5d339a-fef8-4fad-b573-4781180c31d4.jpg', '1af5d3ea-d5f0-4987-a788-2644283d9d32.jpg', 'fbe7c9aa-9b36-4b0f-ae35-30c56a7f4197.jpg', 'dc7e0c13-7eee-4d66-a889-59f7bab5b03b.jpg', '62926b56-16c9-46df-9306-7d47301c0b2c.jpg', 'eaeb6f7a-7b1f-4dad-842f-10a70759f266.jpg', 'e7231582-256a-4366-aa9c-4a3f965679b7.jpg', 'b18a95d3-7b5f-4b74-a3fa-a17bb80ffbf6.jpg']),
      plans: p(909371, ['48075512-8693-4c20-920c-6f0e80d135ac.png', '015aebdc-a5d7-4708-886b-a979c13f6be4.png']),
      summary: 'No centro da Castanheira do Ribatejo, a 1 km da estação de comboios e a 26 minutos de Lisboa.',
      description: [
        'Vende-se fantástico apartamento T3 no centro da Castanheira do Ribatejo, com 2 lugares de garagem, varanda e terraço de 49 m², a 1 km da estação de comboios e a 26 minutos de Lisboa.',
        'Somos recebidos por um hall com 9 m². A cozinha, totalmente equipada, tem 18 m² e uma varanda de 12 m² com churrasqueira e lava-loiça. A sala, com 19 m², dá para o terraço de 49 m². Há um quarto com 15,45 m² e roupeiro, outro com 11 m² e roupeiro, e uma suite com 17 m², com roupeiro e WC privativo de 4,50 m². O WC comum tem poliban.',
        'No piso -1 ficam os 2 lugares de garagem. O prédio tem painéis solares e fotovoltaicos.',
      ],
      rooms: [['Hall', '9 m²'], ['Cozinha equipada', '18 m²'], ['Varanda da cozinha', '12 m²'], ['Sala', '19 m²'], ['Terraço', '49 m²'], ['Quarto', '15,45 m²'], ['Quarto', '11 m²'], ['Suite', '17 m²'], ['WC da suite', '4,50 m²']],
      features: ['Cozinha equipada', 'Máquina de lavar roupa', 'Máquina de lavar loiça', 'Chão flutuante', 'Pré-instalação de ar condicionado', 'Painéis solares', 'Garagem (2 lugares)', 'Elevador', 'Videoporteiro', 'Alarme', 'Vidros duplos', 'Estores elétricos', 'Portão de garagem elétrico', 'Porta de segurança', 'Varanda', 'Livre'],
      lat: 38.998, lng: -8.977,
    },
    {
      ref: '0047', tags: ['moradia'], id: 808953, deal: 'venda', type: 'Moradia', typology: 'V4', price: 475000,
      parish: 'Charneca de Caparica e Sobreda', area_name: 'Sobreda', county: 'Almada', district: 'Setúbal',
      title: 'Moradia V4 na Sobreda, entre Lisboa e as praias', beds: 4, baths: 3, area: 135,
      photos: p(808953, ['e491fd36-4cb6-4e00-8f00-19d4cff60d3e.jpg', '99b4b797-7839-4c76-8195-f354f0aeeb27.jpg']),
    },
    {
      ref: '0053', tags: ['varanda'], id: 830737, deal: 'venda', type: 'Apartamento', typology: 'T2+1', price: 335000,
      parish: 'Póvoa de Santa Iria e Forte da Casa', area_name: 'Forte da Casa', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Apartamento T2+1 no centro do Forte da Casa, com varanda', beds: 3, baths: 2, area: 89.1,
      photos: p(830737, ['c7be5ec8-7929-49fe-929f-3e46c1d0c377.jpg', 'db5256e1-1ab3-462c-94a8-c7258709b4fa.jpg']),
    },
    {
      ref: '0066', tags: ['remodelado','varanda','garagem'], id: 897497, deal: 'venda', type: 'Apartamento', typology: 'T3', price: 325000,
      parish: 'Vila Franca de Xira', area_name: 'Vila Franca de Xira', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Apartamento T3 remodelado, com varanda e parqueamento', beds: 3, baths: 2, area: 105,
      photos: p(897497, ['0ad40a6d-7c08-4c71-84cc-31441ce7a9ec.jpg', 'f7d82acb-19b2-45e1-9596-835b2b577eb2.jpg']),
    },
    {
      ref: '0071', tags: ['remodelado'], id: 908216, deal: 'venda', type: 'Apartamento', typology: 'T2', price: 298500,
      parish: 'Castanheira do Ribatejo e Cachoeiras', area_name: 'Castanheira do Ribatejo', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Apartamento T2 totalmente remodelado', beds: 2, baths: 1, area: 71,
      photos: p(908216, ['887ec33d-9d3c-4ac7-b57a-0be7b1bb1c21.jpg', 'e16bb19d-f764-456f-879e-8b34fd5f27ad.jpg']),
    },
    {
      ref: '0068', tags: ['remodelado'], id: 897813, deal: 'venda', type: 'Apartamento', typology: 'T2', price: 284700,
      parish: 'Encosta do Sol', area_name: 'Amadora', county: 'Amadora', district: 'Lisboa',
      title: 'Apartamento T2 totalmente remodelado na Amadora', beds: 2, baths: 1, area: 66,
      photos: p(897813, ['f4633ca4-fc1f-4ea6-baf4-5448d8a23976.jpg', '639fa0da-7dab-45b7-8ec6-ab4834ced130.jpg']),
    },
    {
      ref: '0075', tags: ['remodelado','varanda'], id: 909238, deal: 'venda', type: 'Apartamento', typology: 'T2', price: 219000,
      parish: 'Castanheira do Ribatejo e Cachoeiras', area_name: 'Castanheira do Ribatejo', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Apartamento T2 remodelado com varanda de 19,80 m²', beds: 2, baths: 1, area: 81,
      photos: p(909238, ['1bdd0ebc-eb12-4baa-a31c-3a21b5af2077.jpg', 'd5718c9e-af33-4ae1-9bfb-82a627ee1f9c.jpg']),
    },
    {
      ref: '0072', tags: ['terreno'], id: 908217, deal: 'venda', type: 'Terreno', typology: 'Rústico', price: 150000,
      parish: 'Castanheira do Ribatejo e Cachoeiras', area_name: 'Castanheira do Ribatejo', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Terreno rústico de 640 m² junto à EN1', area: 640,
      photos: p(908217, ['cfc5a394-4bc5-4b0b-bcfd-861a63adde48.jpg', '5a2eed25-38cb-4f7d-b437-c032af0b83fc.jpg']),
    },
    {
      ref: '0018', tags: ['terreno'], id: 718311, deal: 'venda', type: 'Terreno', typology: 'Urbano', price: 130000,
      parish: 'Alhandra, São João dos Montes e Calhandriz', area_name: 'São João dos Montes', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Terreno urbano com projeto aprovado', area: 458,
      photos: p(718311, ['7137cc4d-8c97-4833-808e-0ec3aae3042a.jpg', 'f875851c-c956-425d-8622-536791318dc8.jpg']),
    },
    {
      ref: '0065', tags: ['terreno','vista'], id: 896724, deal: 'venda', type: 'Terreno', typology: 'Urbano', price: 86500,
      parish: 'Alhandra, São João dos Montes e Calhandriz', area_name: 'São João dos Montes', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Terreno urbano com vista para o Tejo, 2 frentes', area: 329.5,
      photos: p(896724, ['b602f393-59a8-4782-a657-56f05e15ad83.jpg', '90e7cef6-ba16-4c5e-bca5-d395035256e8.jpg']),
    },
    {
      ref: '0077', tags: [], id: 909762, deal: 'arrendamento', type: 'Apartamento', typology: 'T0+1', price: 0,
      parish: 'Vila Franca de Xira', area_name: 'Povos', county: 'Vila Franca de Xira', district: 'Lisboa',
      title: 'Arrendamento T0+1 em Povos, Vila Franca de Xira',
      photos: p(909762, ['59ff7d17-a810-41a7-9c5a-fdd0e9b92d23.jpeg']),
    },
  ];

  // Onde fica cada zona (aproximado: o centro da freguesia), para um imóvel
  // que ainda não tenha coordenadas na ficha do CRM.
  var ZONES = {
    'Castanheira do Ribatejo': [38.9935, -8.9725], 'Vila Franca de Xira': [38.9553, -8.9897], 'Povos': [38.9655, -8.9930],
    'Forte da Casa': [38.8735, -9.0585], 'São João dos Montes': [38.9300, -9.0330], 'Amadora': [38.7620, -9.2310], 'Sobreda': [38.6480, -9.1920],
  };
  function placeAll(rows) { rows.forEach(function (l) { l.tags = l.tags || []; if (!l.lat && ZONES[l.area_name]) { l.lat = ZONES[l.area_name][0]; l.lng = ZONES[l.area_name][1]; } }); }
  placeAll(window.CASA361_LISTINGS);
  // Com a API ligada, os imóveis vêm do CRM (pela casa361-api) e só esses: nunca os da
  // maquete, que podem já estar vendidos. Se a API não responder, a lista fica vazia e as
  // páginas convidam a contactar.
  var API = String(window.C361_API || '').replace(/\/+$/, '');
  var ready = !API ? Promise.resolve() : fetch(API + '/listings').then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (j) { var rows = (j && j.listings) || []; placeAll(rows); window.CASA361_LISTINGS = rows; })
    .catch(function () { window.CASA361_LISTINGS = []; window.C361_OFFLINE = true; });

  // Coleções: formas de explorar para além da zona e do preço.
  window.CASA361_COLLECTIONS = [
    { id: 'remodelados', title: 'Remodelados, prontos a habitar', line: 'É só mudar-se.', tags: ['remodelado'], photo: '909238' },
    { id: 'exterior', title: 'Com terraço ou varanda', line: 'Para o sol da tarde.', tags: ['terraco', 'varanda'], photo: '909371' },
    { id: 'terrenos', title: 'Terrenos para construir', line: 'A casa que imaginou, de raiz.', tags: ['terreno'], photo: '896724' },
  ];

  var eur = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  var num = new Intl.NumberFormat('pt-PT', { maximumFractionDigits: 2 });

  // Guardados: os imóveis que o visitante marcou, neste browser.
  var FAV_KEY = 'c361-fav';
  function favs() { try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch (e) { return []; } }
  function setFavs(a) { try { localStorage.setItem(FAV_KEY, JSON.stringify(a)); } catch (e) { /* sem memória: fica só nesta visita */ } }
  var heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.4 4.5 6.9 4.5c2 0 3.4 1.1 4.1 2.3.7-1.2 2.1-2.3 4.1-2.3 3.5 0 5.5 3.5 4.2 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/></svg>';

  window.C361 = {
    api: API,
    ready: ready,
    price: function (l) { return l.price ? eur.format(l.price) : 'Sob consulta'; },
    eur: function (n) { return eur.format(n); },
    area: function (n) { return num.format(n) + ' m²'; },
    find: function (ref) { return window.CASA361_LISTINGS.filter(function (l) { return l.ref === ref; })[0]; },
    esc: function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); },
    favs: favs,
    isFav: function (ref) { return favs().indexOf(ref) >= 0; },
    toggleFav: function (ref) { var a = favs(), i = a.indexOf(ref); if (i >= 0) a.splice(i, 1); else a.push(ref); setFavs(a); document.dispatchEvent(new CustomEvent('c361:favs')); return i < 0; },
    heart: heart,
    // O mapa: OpenStreetMap (ruas, nomes, escolas, comboio, parques; os mosaicos da CARTO
    // passaram a pedir chave) e, à escolha, a vista de satélite da Esri com os nomes por
    // cima. Usado na lista de imóveis, na página de cada imóvel e nos contactos.
    mapLayers: function (map) {
      var ruas = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>' });
      var sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Imagens © Esri, Maxar, Earthstar Geographics' });
      var nomes = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, pane: 'shadowPane' });
      ruas.addTo(map);
      L.control.layers({ 'Mapa': ruas, 'Satélite': L.layerGroup([sat, nomes]) }, null, { position: 'topright' }).addTo(map);
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);
      return map;
    },
    favButton: function (ref, extra) {
      var on = window.C361.isFav(ref);
      return '<button type="button" class="fav' + (extra ? ' ' + extra : '') + '" data-fav="' + ref + '" aria-pressed="' + on + '" aria-label="' + (on ? 'Retirar dos guardados' : 'Guardar este imóvel') + '">' + heart + '</button>';
    },
    card: function (l) {
      var e = window.C361.esc, facts = [];
      if (l.beds) facts.push('<span>' + l.beds + ' quartos</span>');
      if (l.baths) facts.push('<span>' + l.baths + ' WC</span>');
      if (l.area) facts.push('<span>' + window.C361.area(l.area) + '</span>');
      var tag = l.typology === 'Rústico' || l.typology === 'Urbano' ? l.type + ' ' + l.typology.toLowerCase() : (l.typology || l.type || '');
      return '<article class="card reveal">' +
        '<a class="card-link" href="imovel.html?ref=' + e(l.ref) + '">' +
        '<div class="card-img"><img loading="lazy" src="' + e(l.photos[0]) + '" alt="' + e(l.type + ' ' + l.typology + ' em ' + l.area_name) + '">' +
        (tag ? '<span class="card-tag">' + e(tag) + '</span>' : '') + (l.status ? '<span class="card-tag new">' + e(l.status.replace(/^\w/, function (c) { return c.toUpperCase(); })) + '</span>' : l.isNew ? '<span class="card-tag new">Construção nova</span>' : '') + '</div>' +
        '<div class="card-body"><p class="card-place">' + e(l.area_name) + ' · ' + e(l.county) + '</p>' +
        '<h3>' + e(l.title) + '</h3>' +
        '<p class="card-facts">' + facts.join('') + '</p>' +
        '<p class="card-price">' + window.C361.price(l) + '<span>Ref. ' + e(l.ref) + '</span></p></div></a>' +
        window.C361.favButton(l.ref) + '</article>';
    },
  };

  // Um clique num coração, em qualquer página.
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-fav]');
    if (!b) return;
    ev.preventDefault();
    var on = window.C361.toggleFav(b.getAttribute('data-fav'));
    document.querySelectorAll('[data-fav="' + b.getAttribute('data-fav') + '"]').forEach(function (x) {
      x.setAttribute('aria-pressed', String(on)); x.setAttribute('aria-label', on ? 'Retirar dos guardados' : 'Guardar este imóvel');
      x.classList.remove('pop'); void x.offsetWidth; x.classList.add('pop');
    });
  });
})();
