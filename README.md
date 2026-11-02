# Casa 361 — maquete do novo site

A mock-up for Casa 361 (imobiliária, Vila Franca de Xira, AMI 24691), made
for Luís Poças, who asked to see the new home page, a property page, and the
Empresa, Serviços and Vender pages before deciding. Their listings, photos
(served by Casafari's own CDN), texts, logo, phone and AMI are real, from
casa361.com. The forms send nothing: each says, in a dashed blue "maquete"
note, where the request goes in the finished site. The button in the blue
bar at the top hides the notes.

Plain HTML, CSS and JavaScript in `src/`. No framework, no install, no build.

| Page | File |
|---|---|
| Página inicial | `src/index.html` |
| Imóvel (ref. 0076 by default; `imovel.html?ref=0066` for others) | `src/imovel.html` |
| Imóveis, with filters | `src/imoveis.html` |
| Vender o seu imóvel | `src/vender.html` |
| Serviços | `src/servicos.html` |
| Empresa | `src/empresa.html` |

## What the mock-up does that competitors' sites do (and the current site doesn't)

Checked against RE/MAX, ERA and Century 21 in Nov 2026:

- **Map search** (ERA): `imoveis.html` shows the list beside a map (Leaflet + OpenStreetMap/CARTO tiles); hovering a card lights its pin.
- **Saved homes** (ERA, RE/MAX accounts): a heart on every home, kept in the visitor's browser, with a count in the menu and "Só guardados".
- **Credit simulator** (Century 21): on each property page; price, deposit, term and rate.
- **Alerts**: "Ainda não encontrou a casa certa?" sends the search into Casafari as a buyer lead.
- **WhatsApp** always one tap away.

Motion: the home page opens with the photo easing in, the headline rising line by line and the gold 361° ring drawing a full turn and one degree more; sections come in once as they reach the screen; the zones run as a slow band. All of it is off for visitors who ask their device for less motion.

The footer keeps everything the current site has: Recrutamento, Mapa do site, Livro de Reclamações (link and logo), Resolução alternativa de litígios, privacy, cookies, terms, cookie preferences, the IMPIC logo, AMI 24691, the company name and Facebook and Instagram. In the mock-up the legal pages and the two logos come from casa361.com; at launch they are copied into this site.

## Exploring, as on the sites Luís sent (Zome, Engel & Völkers, The Agency)

The home page opens on a full-width slideshow of the agency's own photos with the search inside it (Comprar / Arrendar / Vender), then three image "doors" (comprar, vender, arrendar), a carousel of tall zone tiles ("Onde quer viver?"), the property of the month, featured homes, and collections (remodelados, com terraço ou varanda, terrenos), each opening a filtered list.

## Phones and tablets

Checked at 360, 390, 768, 1024 and 1440 px: no sideways scrolling, touch targets of 44 px, 16 px form fields (no iPhone zoom), a full-size menu with a call button, list first and map one tap away on phones, a price/WhatsApp/visit bar fixed at the bottom of property pages, and swipe between photos.

## Casafari stays where listings and leads live

- **Listings** come from Casafari CRM: its property feed (refreshed every 20
  minutes) or its API (crmapi.proppydev.com), read by the Autisync server and
  cached. In the mock-up they are written into `src/listings.js`.
- **Leads** (contact, visit request with the property reference, valuation,
  recruitment) go into Casafari CRM through the API's `Leads_Insert` (origin
  "Website"), or as a fallback by email to the agency's feedcruncher address.
- Casafari only lets production API calls in from whitelisted static IPs (up
  to two). Casa 361 asks for access at help@casafaricrm.com.

Source: https://helpcenter.casafari.com/en/crm/integracao-website-e-plataformas-externas

## Put it online (Vercel)

1. Create the GitHub repository `Autisync/casa361-demo-site` and push this folder.
2. Vercel: **Add New › Project**, import it, framework preset **Other**. The
   settings come from `vercel.json` (no build, `src/` is served).
3. Name the project `casa361-demo`, so the address is `casa361-demo.vercel.app`.

Search engines are told not to list it (`noindex`).

## Look at it on this computer

Open `src/index.html` in a browser, or run `npx serve src`.
