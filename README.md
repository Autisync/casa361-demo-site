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
