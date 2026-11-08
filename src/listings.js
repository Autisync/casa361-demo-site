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
    // O mapa: OpenFreeMap (estilo "Liberty"), um mapa vetorial nítido a cores, com ruas,
    // nomes, edifícios, escolas, comboio e parques, feito a partir do OpenStreetMap e
    // atualizado todas as semanas. Gratuito, sem chave e permitido em sites comerciais.
    // Se não carregar, usa os mosaicos normais do OpenStreetMap. À escolha, a vista de
    // satélite da Esri com os nomes por cima. Usado na lista de imóveis, na página de cada
    // imóvel e nos contactos.
    mapLayers: function (map) {
      var osm = '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';
      var ruas = (window.maplibregl && L.maplibreGL && (function () { try { var c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (x) { return false; } })())
        ? L.maplibreGL({ style: 'https://tiles.openfreemap.org/styles/liberty' }) // os créditos (OpenFreeMap, OpenMapTiles, OpenStreetMap) vêm do próprio estilo
        : L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: osm });
      var sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Imagens © Esri, Maxar, Earthstar Geographics' });
      var nomes = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, pane: 'shadowPane' });
      ruas.addTo(map);
      L.control.layers({ 'Mapa': ruas, 'Satélite': L.layerGroup([sat, nomes]) }, null, { position: 'topright' }).addTo(map);
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);
      return map;
    },
    // Botão de ecrã inteiro no mapa (funciona também no iPhone: o mapa ocupa a janela).
    mapFull: function (map) {
      var C = L.Control.extend({ options: { position: 'topleft' }, onAdd: function () {
        var b = L.DomUtil.create('button', 'map-full-btn'); b.type = 'button'; b.title = 'Ecrã inteiro'; b.setAttribute('aria-label', 'Ver o mapa em ecrã inteiro');
        b.innerHTML = window.C361.icon('expand');
        L.DomEvent.disableClickPropagation(b);
        b.addEventListener('click', function () {
          var el = map.getContainer(), on = !el.classList.contains('map-full');
          el.classList.toggle('map-full', on); document.documentElement.classList.toggle('map-lock', on);
          b.setAttribute('aria-label', on ? 'Sair do ecrã inteiro' : 'Ver o mapa em ecrã inteiro'); b.classList.toggle('on', on);
          if (on) map.scrollWheelZoom.enable();
          setTimeout(function () { map.invalidateSize(); }, 60);
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && map.getContainer().classList.contains('map-full')) b.click(); });
        return b;
      } });
      map.addControl(new C());
    },
    // "Perto daqui": escolas, transportes, supermercados, farmácias, saúde e parques
    // perto da zona do imóvel, a partir do OpenStreetMap (serviço Overpass, sem chave).
    nearby: function (map, lat, lng, box, grid) {
      var R = 1500, q = '[out:json][timeout:20];(' +
        'nwr(around:' + R + ',' + lat + ',' + lng + ')[amenity~"^(school|kindergarten|college|university)$"];' +
        'nwr(around:' + R + ',' + lat + ',' + lng + ')[railway~"^(station|halt)$"];' +
        'node(around:' + R + ',' + lat + ',' + lng + ')[highway=bus_stop];' +
        'nwr(around:' + R + ',' + lat + ',' + lng + ')[shop~"^(supermarket|convenience)$"];' +
        'nwr(around:' + R + ',' + lat + ',' + lng + ')[amenity~"^(pharmacy|hospital|clinic|doctors)$"];' +
        'nwr(around:' + R + ',' + lat + ',' + lng + ')[leisure~"^(park|playground|sports_centre)$"];' +
        ');out center 200;';
      var CAT = [
        ['escolas', 'Escolas', '<path d="M3 9.5 12 5l9 4.5-9 4.5z"/><path d="M7 11.5V16c1.5 1.3 3.2 2 5 2s3.5-.7 5-2v-4.5M21 9.5V15"/>', function (t) { return /school|kindergarten|college|university/.test(t.amenity || ''); }],
        ['comboio', 'Comboio', '<rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 11h12M9 20l-2 1.5M15 20l2 1.5M9 16.5 7.5 20M15 16.5l1.5 3.5"/><circle cx="9.5" cy="13.8" r=".8"/><circle cx="14.5" cy="13.8" r=".8"/>', function (t) { return /station|halt/.test(t.railway || ''); }],
        ['autocarro', 'Autocarro', '<rect x="5" y="3.5" width="14" height="14" rx="2.5"/><path d="M5 11h14M8 17.5V20M16 17.5V20"/><circle cx="8.5" cy="14.3" r=".8"/><circle cx="15.5" cy="14.3" r=".8"/>', function (t) { return t.highway === 'bus_stop'; }],
        ['compras', 'Supermercados', '<path d="M3.5 4.5h2l2 10.5h10l2-7.5H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="16.5" cy="19" r="1.4"/>', function (t) { return /supermarket|convenience/.test(t.shop || ''); }],
        ['saude', 'Farmácias e saúde', '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>', function (t) { return /pharmacy|hospital|clinic|doctors/.test(t.amenity || ''); }],
        ['lazer', 'Parques e desporto', '<path d="M12 21v-6M12 15c-3.5 0-6-2.3-6-5.5S8.5 3 12 3s6 3.3 6 6.5S15.5 15 12 15z"/><path d="M8 21h8"/>', function (t) { return /park|playground|sports_centre/.test(t.leisure || ''); }]
      ];
      function dist(a, b) { var r = Math.PI / 180, x = (b[1] - a[1]) * r * Math.cos((a[0] + b[0]) * r / 2), y = (b[0] - a[0]) * r; return Math.round(Math.sqrt(x * x + y * y) * 6371000); }
      function fmt(m) { return m < 1000 ? (Math.round(m / 10) * 10) + ' m' : (m / 1000).toFixed(1).replace('.', ',') + ' km'; }
      var esc = window.C361.esc, layer = L.layerGroup();
      fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then(function (r) { if (!r.ok) throw r.status; return r.json(); })
        .then(function (d) {
          var groups = CAT.map(function (c) { return { c: c, items: [] }; });
          (d.elements || []).forEach(function (el) {
            var t = el.tags || {}, p = el.center ? [el.center.lat, el.center.lon] : [el.lat, el.lon];
            if (!p[0]) return;
            for (var i = 0; i < CAT.length; i++) if (CAT[i][3](t)) { groups[i].items.push({ n: t.name || '', p: p, d: dist([lat, lng], p) }); break; }
          });
          groups.forEach(function (g) { g.items.sort(function (a, b) { return a.d - b.d; }); });
          var any = groups.some(function (g) { return g.items.length; });
          if (!any) return;
          grid.innerHTML = groups.filter(function (g) { return g.items.length; }).map(function (g) {
            var near = g.items[0], named = g.items.filter(function (x) { return x.n; })[0];
            return '<button type="button" class="near-c" data-k="' + g.c[0] + '"><span class="near-i"><svg viewBox="0 0 24 24" aria-hidden="true">' + g.c[2] + '</svg></span>' +
              '<span class="near-t"><b>' + g.c[1] + '</b><small>' + g.items.length + (g.items.length === 1 ? ' perto' : ' perto') + ' · a mais próxima a ' + fmt(near.d) + '</small>' +
              (named ? '<em>' + esc(named.n) + ' (' + fmt(named.d) + ')</em>' : '') + '</span></button>';
          }).join('');
          box.hidden = false;
          // Tocar numa categoria mostra esses locais no mapa.
          grid.addEventListener('click', function (e) {
            var b = e.target.closest('.near-c'); if (!b) return;
            var on = !b.classList.contains('on');
            grid.querySelectorAll('.near-c').forEach(function (x) { x.classList.remove('on'); });
            layer.clearLayers();
            if (!on) { map.removeLayer(layer); map.setView([lat, lng], 15); return; }
            b.classList.add('on');
            var g = groups.filter(function (x) { return x.c[0] === b.getAttribute('data-k'); })[0], pts = [[lat, lng]];
            g.items.slice(0, 25).forEach(function (it) {
              pts.push(it.p);
              L.marker(it.p, { icon: L.divIcon({ className: '', html: '<span class="poi"><svg viewBox="0 0 24 24">' + g.c[2] + '</svg></span>', iconSize: [0, 0] }) })
                .bindTooltip((it.n ? esc(it.n) + ' · ' : '') + fmt(it.d), { direction: 'top', offset: [0, -16] }).addTo(layer);
            });
            layer.addTo(map); map.fitBounds(pts, { padding: [40, 40], maxZoom: 16 });
            map.getContainer().scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        })
        .catch(function () { /* sem dados: a secção fica escondida */ });
    },
    // Certificado energético (o campo "energia" da ficha no CRM): A+, A, B, B-, C, D, E, F ou Isento,
    // com as cores da escala oficial, para se ver logo no cartão e na página do imóvel.
    energyClass: function (v) {
      var t = String(v || '').trim().toUpperCase().replace(/\s+/g, '');
      if (!t) return '';
      if (/ISENT/.test(t)) return 'Isento';
      var m = t.match(/^(A\+|A|B-|B|C|D|E|F)/);
      return m ? m[1] : '';
    },
    energySlug: function (k) { return { 'A+': 'ap', 'B-': 'bm', 'Isento': 'isento' }[k] || k.toLowerCase(); },
    energyBadge: function (v, extra) {
      var C = window.C361, k = C.energyClass(v);
      if (!k) return '';
      return '<span class="nrg nrg-' + C.energySlug(k) + (extra ? ' ' + extra : '') + '" title="Certificado energético ' + k + '"><small aria-hidden="true">Energia</small><b>' + (k === 'Isento' ? 'Isento' : k) + '</b><span class="sr">Certificado energético ' + k + '</span></span>';
    },
    energyScale: function (v) {
      var C = window.C361, k = C.energyClass(v);
      if (!k) return '';
      if (k === 'Isento') return '<p class="nrg-free">' + C.energyBadge(k) + ' Este imóvel está isento de certificado energético.</p>';
      var all = ['A+', 'A', 'B', 'B-', 'C', 'D', 'E', 'F'];
      return '<ol class="nrg-scale" aria-label="Escala do certificado energético">' + all.map(function (c, i) {
        var on = c === k;
        return '<li class="nrg-' + C.energySlug(c) + (on ? ' on' : '') + '" style="--w:' + (34 + i * 8.5) + '%"' + (on ? ' aria-current="true"' : '') + '><b>' + c + '</b>' + (on ? '<em>Este imóvel</em>' : '') + '</li>';
      }).join('') + '</ol><p class="nrg-note">A+ é o mais eficiente: menos energia gasta, contas mais baixas e mais conforto. F é o menos eficiente.</p>';
    },
    favButton: function (ref, extra) {
      var on = window.C361.isFav(ref);
      return '<button type="button" class="fav' + (extra ? ' ' + extra : '') + '" data-fav="' + ref + '" aria-pressed="' + on + '" aria-label="' + (on ? 'Retirar dos guardados' : 'Guardar este imóvel') + '">' + heart + '</button>';
    },
    // Ícones de linha (os mesmos em todo o site).
    icon: function (k, cls) {
      var P = {
        bed: '<path d="M3 18v-6.5A1.5 1.5 0 0 1 4.5 10h15a1.5 1.5 0 0 1 1.5 1.5V18M3 15h18M3 18v2M21 18v2"/><path d="M5.5 10V7.5A1.5 1.5 0 0 1 7 6h3.5A1.5 1.5 0 0 1 12 7.5V10M12 10V7.5A1.5 1.5 0 0 1 13.5 6H17a1.5 1.5 0 0 1 1.5 1.5V10"/>',
        bath: '<path d="M4 12h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5zM6.5 19l-1 2M17.5 19l1 2M6 12V6a2 2 0 0 1 3.6-1.2"/><path d="M8.4 5.6 10.6 7.8"/>',
        area: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/><path d="M8 8h8v8H8z" opacity=".5"/>',
        plot: '<path d="M3 20h18M5 20V10l4-3 4 3v10M13 14h6v6"/><path d="M17 10a2.5 2.5 0 1 0-5 0" opacity=".5"/>',
        energy: '<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/>',
        car: '<path d="M5 16V11.5L7 7h10l2 4.5V16M3.5 16h17v2.5H3.5zM6.5 18.5V20M17.5 18.5V20"/><circle cx="7.5" cy="13.5" r=".8"/><circle cx="16.5" cy="13.5" r=".8"/>',
        floor: '<path d="M4 20h4v-4h4v-4h4V8h4"/><path d="M4 20V4" opacity=".4"/>',
        year: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
        balcony: '<path d="M4 12h16M5 12v8M9 12v8M15 12v8M19 12v8M4 20h16"/><path d="M7 12V5h10v7" opacity=".5"/>',
        pool: '<path d="M3 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M3 20.5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"/><path d="M8 14V5.5a2 2 0 0 1 4 0M16 14V5.5a2 2 0 0 0-4 0M8 9h8" opacity=".6"/>',
        lift: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="m9.5 9 2.5-3 2.5 3M9.5 15l2.5 3 2.5-3"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
        check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
        pin: '<path d="M12 21s7-6.3 7-11.5a7 7 0 0 0-14 0C5 14.7 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
        phone: '<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 0 1 5 4z"/>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
        wa: '<path d="M4 20.5 5.3 16A8.5 8.5 0 1 1 8.4 19z"/><path d="M9 8.5c0 3.5 2.6 6.4 6 6.6l1.3-1.5-2-1-1 .9c-1-.4-2-1.5-2.4-2.4l.9-1-1-2z"/>',
        user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5c1.2-4 4.3-5.8 7.5-5.8s6.3 1.8 7.5 5.8"/>',
        chat: '<path d="M4 5.5h16v10H9.5L5 19.5v-4H4z"/><path d="M8 10h8M8 12.8h5" opacity=".6"/>',
        send: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
        clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
        route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
        key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8.5-8.5M16 7l2.5 2.5M13.5 9.5l2 2"/>',
        tag: '<path d="M3.5 12.5 11 5h7.5v7.5L11 20z"/><circle cx="15" cy="9" r="1.4"/>',
        home: '<path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z"/>',
        euro: '<path d="M17.5 6.5A7 7 0 1 0 17.5 17.5M4 10.5h9M4 13.5h9"/>',
        doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15.5h6"/>',
        handshake: '<path d="m3 11 4-4 3 1 2-1.5L15 8l2-1 4 4-6.5 6.5a2 2 0 0 1-2.8 0L3 11z"/><path d="m9.5 14 1.5 1.5M12 11.5l2 2" opacity=".6"/>',
        search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/>',
        expand: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',
        spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'
      };
      return '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[k] || P.check) + '</svg>';
    },
    card: function (l) {
      var e = window.C361.esc, facts = [];
      var I = window.C361.icon;
      if (l.beds) facts.push('<span>' + I('bed') + l.beds + (l.beds == 1 ? ' quarto' : ' quartos') + '</span>');
      if (l.baths) facts.push('<span>' + I('bath') + l.baths + ' WC</span>');
      if (l.area) facts.push('<span>' + I('area') + window.C361.area(l.area) + '</span>');
      var tag = l.typology === 'Rústico' || l.typology === 'Urbano' ? l.type + ' ' + l.typology.toLowerCase() : (l.typology || l.type || '');
      var href = 'imovel.html?ref=' + e(l.ref), alt = e(l.type + ' ' + (l.typology || '') + ' em ' + l.area_name);
      // Fotografias no cartão: deslizar (ou setas) para ver a casa sem abrir a página.
      var ph = (l.photos || []).filter(Boolean), shown = ph.slice(0, 6), more = ph.length - shown.length;
      var slides = shown.map(function (src, i) {
        var last = i === shown.length - 1 && more > 0;
        return '<a class="cg-s" href="' + href + '" tabindex="-1" aria-hidden="' + (i ? 'true' : 'false') + '"><img ' + (i ? 'loading="lazy" ' : 'loading="lazy" ') + 'src="' + e(src) + '" alt="' + (i ? '' : alt) + '" draggable="false">' +
          (last ? '<span class="cg-more"><b>+' + more + '</b> fotografias<em>Ver o imóvel</em></span>' : '') + '</a>';
      }).join('');
      var nav = shown.length > 1 ? '<button class="cg-btn cg-prev" type="button" aria-label="Fotografia anterior" tabindex="-1"><svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg></button>' +
        '<button class="cg-btn cg-next" type="button" aria-label="Fotografia seguinte"><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></button>' +
        '<span class="cg-dots" aria-hidden="true">' + shown.map(function (x, i) { return '<i' + (i ? '' : ' class="on"') + '></i>'; }).join('') + '</span>' +
        '<span class="cg-count"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5-5-8 8"/></svg>' + ph.length + '</span>' : '';
      return '<article class="card reveal">' +
        '<div class="card-img cg">' + '<div class="cg-strip">' + slides + '</div>' + nav +
        (l.featured ? '<span class="card-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>Destaque</span>' : '') + (tag ? '<span class="card-tag' + (l.featured ? ' shift' : '') + '">' + e(tag) + '</span>' : '') + window.C361.energyBadge(l.energy, 'on-card') + (l.status ? '<span class="card-tag new">' + e(l.status.replace(/^\w/, function (c) { return c.toUpperCase(); })) + '</span>' : l.isNew ? '<span class="card-tag new">Construção nova</span>' : '') + '</div>' +
        '<a class="card-link" href="' + href + '"><div class="card-body"><p class="card-place">' + e(l.area_name) + ' · ' + e(l.county) + '</p>' +
        '<h3>' + e(l.title) + '</h3>' +
        '<p class="card-facts">' + facts.join('') + '</p>' +
        '<p class="card-price">' + window.C361.price(l) + '<span>Ref. ' + e(l.ref) + '</span></p></div></a>' +
        window.C361.favButton(l.ref) + '</article>';
    },
  };


  // Galeria nos cartões: setas e pontos.
  function cgUpdate(strip) {
    var g = strip.parentNode, i = Math.round(strip.scrollLeft / Math.max(1, strip.clientWidth));
    var dots = g.querySelectorAll('.cg-dots i'); for (var k = 0; k < dots.length; k++) dots[k].classList.toggle('on', k === i);
    g.classList.toggle('at-start', i === 0); g.classList.toggle('at-end', i >= strip.children.length - 1);
    var s = strip.children; for (var j = 0; j < s.length; j++) s[j].setAttribute('aria-hidden', String(j !== i));
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.cg-btn'); if (!b) return;
    ev.preventDefault(); ev.stopPropagation();
    var strip = b.parentNode.querySelector('.cg-strip'), dir = b.classList.contains('cg-next') ? 1 : -1;
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    strip.scrollBy({ left: dir * strip.clientWidth, behavior: still ? 'auto' : 'smooth' });
  });
  document.addEventListener('scroll', function (ev) {
    var t = ev.target; if (!t.classList || !t.classList.contains('cg-strip')) return;
    clearTimeout(t._cg); t._cg = setTimeout(function () { cgUpdate(t); }, 40);
  }, true);

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
