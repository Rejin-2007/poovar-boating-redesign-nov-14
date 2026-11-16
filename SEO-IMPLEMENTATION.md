# Poovar Boating SEO implementation

## Audit summary

- The project is a Next.js App Router site in TypeScript with React, Tailwind CSS, `next/image`, Framer Motion and EmailJS. The rebuild keeps that stack and the existing contact/enquiry flow.
- The homepage already contains real route photography, named cruise options, guest comments, the local address and two phone contacts. Those are retained as the source for public claims.
- Current fares, trip durations, fixed departure times, boat capacities, safety equipment details, opening hours, a verified boarding pin and public social profiles are not present in the project content. The new copy asks customers to confirm them instead of guessing.
- Several earlier schema values were not supported by page content: hard-coded coordinates, operating hours, houseboat offers and an empty item list. They have been removed. Reviews remain visible but are not emitted as business aggregate ratings.

## Search intent map

| Route | Main intent | Primary focus |
| --- | --- | --- |
| `/` | Compare and enquire | Poovar Boating |
| `/poovar-backwater-cruise` | Understand the route | Poovar backwater cruise |
| `/sunset-cruise` | Choose an evening departure | Poovar sunset cruise |
| `/poovar-island-boating` | Explore island waterways | Poovar island boating |
| `/mangrove-forest-boating` | Learn about the mangrove section | Poovar mangrove boating |
| `/pricing` | Get a current quote | Poovar boating price |
| `/golden-sand-beach` | Check a landmark stop | Golden Sand Beach by boat |
| `/elephant-rock` | Check a landmark stop | Elephant Rock boat route |
| `/bird-watching` | Understand wildlife viewing | Bird-watching by boat in Poovar |
| `/how-to-reach-poovar` | Find the arrival point | How to reach Poovar boating |
| `/services` | Compare listed cruise options | Poovar boating packages |
| `/contact` | Call, message, or locate the operator | Kayaloram contact details |

Pages about landmarks and boating types have different traveler questions. The price page is a quote guide because the business has not supplied fares. Do not publish more location pages that repeat the same route copy.

## Homepage content outline (1,500 words)

Use this as a writing brief if the homepage is expanded. Keep the current design pacing and only publish factual package details once the operator confirms them.

| Section | Suggested content | Search intent | Words |
| --- | --- | --- | ---: |
| H1 and opening | **Poovar Boating in Kerala**; explain the waterways and invite visitors to compare options | Find a Poovar boat ride and decide whether it fits the visit | 110 |
| H2: Introduction to Poovar boating | Describe mangrove channels, backwaters and estuary; define a backwater cruise and island boating. H3: What is Poovar boating? | Understand the local experience | 130 |
| H2: Cruise options | List sunrise, lunch and sunset plus Silver, Golden and Platinum. H3: Sunrise and daytime rides; H3: Sunset trips; H3: Named cruise options. Mark unknown price/duration and link to details. | Compare available packages | 210 |
| H2: A Poovar backwater cruise | Explain the shift from shaded channels toward open water. H3: Mangrove canals; H3: Wider backwaters and estuary. State that route varies and must be confirmed. | Learn what happens during the ride | 180 |
| H2: Landmarks along the water | Cover named route sights without guaranteeing a stop. H3: Golden Sand Beach; H3: Elephant Rock; H3: Birdlife along the mangroves. | Check sights and possible stops | 200 |
| H2: Choose a departure | Compare sunrise, daytime/lunch, sunset and twilight. H3: Match the light and schedule to your plans; confirm actual departures. | Choose a time of day | 120 |
| H2: Price and what to confirm | Explain quote-based pricing. H3: What the quote includes; H3: Questions about duration, route, boat/private status and inclusions. | Get price and compare value | 140 |
| H2: Couples, families and small groups | Explain suitability without promising facilities. H3: Confirm child age guidance, boarding arrangements and life-jacket availability. | Check who can join | 100 |
| H2: Before boarding | Practical advice. H3: Weather and cancellation; H3: Arrival time and route; H3: Ask about safety equipment and payment terms. | Prepare and assess practical details | 160 |
| H2: Location and arrival | Publish the supplied Kayaloram address. H3: Confirm the boarding pin; H3: Check current directions from Trivandrum. | Find the operator | 100 |
| H2: Ask about your date | Provide WhatsApp, phone and enquiry form links. H3: Send date, group size and cruise preference. | Convert planning into an enquiry | 80 |
| H2: Frequently asked questions | Use visible H3 questions on meaning, duration, best time, cost, safety, couples, families, sights and travel from Trivandrum. | Resolve last booking questions | 100 |
| **Total** |  |  | **1,500** |

## Internal-link plan

| Link from | Link to | Anchor / purpose |
| --- | --- | --- |
| Homepage route stories | `/golden-sand-beach`, `/elephant-rock`, `/bird-watching` | Landmark names and wildlife route detail |
| Homepage FAQ | `/pricing`, `/contact` | Current quote and direct operator answers |
| Services | `/poovar-backwater-cruise`, `/sunset-cruise`, `/poovar-island-boating`, `/mangrove-forest-boating`, `/pricing` | Compare by trip intent |
| Backwater cruise | `/sunset-cruise`, `/poovar-island-boating`, `/pricing`, `/contact` | Time, area, and quote follow-up |
| Island boating | `/golden-sand-beach`, `/elephant-rock`, `/how-to-reach-poovar` | Landmarks and arrival planning |
| Mangrove boating | `/bird-watching`, `/poovar-backwater-cruise`, `/pricing` | Wildlife and wider route |
| Sunset cruise | `/poovar-backwater-cruise`, `/pricing`, `/contact` | Compare route and request date quote |
| Landmark pages | `/poovar-island-boating`, `/poovar-backwater-cruise`, `/pricing` | Add cruise context and booking questions |
| Footer | Core experience pages and `/contact` | Persistent access to routes and contact |

## Metadata and crawl setup

- `lib/site-metadata.ts` centralizes absolute canonical URLs, unique titles/descriptions, Open Graph and Twitter metadata.
- The homepage targets **Poovar Boating**. Each informational route has a distinct title, description, canonical and content.
- `/booking`, `/enquiry`, `/success` and policy pages are noindex; they remain directly usable. The sitemap lists indexable information pages only.
- `app/sitemap.ts` includes the homepage, cruise/landmark pages, location and core service pages. `app/robots.ts` allows public crawling, disallows `/api/` and `/admin/`, and points to the sitemap.
- The route pages are statically generated. Essential text and links are rendered in server components, not hidden behind client-side interaction.
- A social preview image is generated from the site’s existing Poovar boat photograph at `public/og/poovar-boating.jpg`.
- Existing Google Tag Manager receives `whatsapp_click`, `phone_click`, `booking_click` and successful `enquiry_form_success` events. The code adds no new analytics ID or PII. Configure GTM custom-event triggers/tags if those events should be forwarded into a GA4 property.

## Structured data

- The root layout emits one `LocalBusiness` entity with the verified business address, website, email and primary telephone. The secondary number is visible on the contact page.
- No coordinates, opening hours, prices, rating aggregate or unsupported service offers are included.
- The homepage FAQ JSON-LD mirrors visible FAQ text. Google currently limits FAQ rich-result display to well-known authoritative government and health sites, so this markup is not a rich-result promise.
- Individual experience pages identify themselves as `WebPage`. Add extra properties only after the same details are visible and confirmed on-page.

## E-E-A-T and trust signals

- Keep the local operator/business name and address consistent: Kayaloram Backwater Cruise, Club Mahindra Resort Road, Viraly, Poovar, Kerala 695525.
- Use the existing guest comments as displayed testimonials only. Do not add reviewer schema or a business aggregate rating without checking the original public source and ensuring the same reviews stay visible.
- Route pages explain which details can vary and direct readers to confirm them with the operator.
- Publish verified safety practices, operator experience and map pin once supplied; do not infer these from generic boating norms.
- Keep the two supplied telephone numbers and email address in the contact/footer areas.

## Missing details to collect before publishing stronger claims

1. Current fares and package inclusions, including whether a quote is per boat or per person.
2. Typical duration, boat type, passenger capacity and exact stops for each named cruise.
3. Departure schedule, seasonal changes, weather cancellation policy and booking/payment terms.
4. Boarding jetty/map pin and verified directions from Trivandrum.
5. Safety equipment and operating procedures that can be publicly stated.
6. Verified operating hours, exact business name as used in the real world, official social profile URLs and permission/source for each displayed review/photo.

## References

- [Next.js metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js sitemap convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Google Search Central SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google FAQ rich result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
