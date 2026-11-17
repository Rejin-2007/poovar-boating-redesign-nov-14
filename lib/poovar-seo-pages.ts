export type PoovarSeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
  related: { href: string; label: string }[];
};

// Page copy is based on details already listed in the site. Confirm route,
// timing, duration, fare and inclusions with the operator before publishing any values.

const serviceLinks = [
  { href: "/poovar-backwater-cruise", label: "Poovar backwater cruise" },
  { href: "/sunset-cruise", label: "Sunset cruise" },
  { href: "/poovar-island-boating", label: "Poovar island boating" },
  { href: "/mangrove-forest-boating", label: "Mangrove forest boating" },
  { href: "/pricing", label: "Cruise pricing" },
];

export const poovarSeoPages: PoovarSeoPage[] = [
  {
    slug: "how-to-reach-poovar",
    title: "How to Reach Kayaloram in Poovar",
    metaTitle: "How to Reach Poovar Boating | Kayaloram Address",
    description: "Find Kayaloram Backwater Cruise at Club Mahindra Resort Road, Viraly, Poovar. Confirm your boarding point and directions before travel.",
    intro: "The listed address for Kayaloram Backwater Cruise is Club Mahindra Resort Road, Viraly, Poovar, Kerala 695525. Contact the team before setting out to confirm directions and the exact boarding point for your cruise.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.17.jpeg",
    imageAlt: "Backwater boats in Poovar, Kerala",
    sections: [
      { heading: "Confirm the arrival point", paragraphs: ["A named road and locality may not identify the precise jetty or boarding point. Ask Kayaloram to share a current map pin, arrival instructions and the time to arrive for your booking.", "Open a map search for the listed address, then verify the final location with the operator before setting out."] },
      { heading: "Travel from Trivandrum", paragraphs: ["The operator’s address is in Poovar, in Thiruvananthapuram district. Travel time and road conditions vary, so check a current map and allow time to reach the confirmed boarding point. The business has not published fixed transfer arrangements."] },
      { heading: "Share your booking details", paragraphs: ["When you call or message, include your cruise date, group size and preferred option. Ask the team to confirm the route, duration, fare and arrival instructions in the same conversation."] },
    ],
    related: [{ href: "/contact", label: "Kayaloram phone, email and address" }, serviceLinks[0], serviceLinks[4]],
  },
  {
    slug: "poovar-backwater-cruise",
    title: "Poovar Backwater Cruise",
    metaTitle: "Poovar Backwater Cruise | Routes & Booking",
    description: "Explore Poovar’s mangrove channels, backwaters and estuary by boat. Compare cruise options and ask Kayaloram about your date.",
    intro: "A Poovar backwater cruise follows waterways that move from shaded mangrove channels toward the open estuary. Choose from the listed sunrise, lunch and sunset options, then confirm the route and timing for your date.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.17.jpeg",
    imageAlt: "Boats crossing open backwater near Poovar",
    sections: [
      { heading: "What the route can include", paragraphs: ["The wider Poovar area is known for its backwaters, mangrove-lined channels and estuary views. Golden Sand Beach and Elephant Rock are named stops on the local boating site, but the exact route can vary by trip.", "When you enquire, ask which landmarks are included, whether there is time to stop, and how long the trip will take. This keeps the plan clear before you arrive."] },
      { heading: "Choose a departure that suits your day", paragraphs: ["The listed choices include sunrise, lunch and sunset cruises, alongside Base Cruise, Standard Cruise (Recommended), Classic Cruise and a Custom Package. The site does not publish fixed departure times or durations, so confirm the current schedule directly.", "For a price, see the <a href=\"/pricing\">Poovar boating pricing guide</a>. For an evening departure, read about the <a href=\"/sunset-cruise\">Poovar sunset cruise</a>."] },
      { heading: "Plan with the local operator", paragraphs: ["Kayaloram Backwater Cruise is at Club Mahindra Resort Road, Viraly, Poovar, Kerala 695525. Share your date and group size when you contact the team; ask about availability, route, duration, price and weather arrangements together."] },
    ],
    related: [serviceLinks[1], serviceLinks[2], serviceLinks[4], { href: "/contact", label: "Contact Kayaloram in Poovar" }],
  },
  {
    slug: "sunset-cruise",
    title: "Poovar Sunset Cruise",
    metaTitle: "Poovar Sunset Cruise | Ask About Evening Rides",
    description: "See the Poovar estuary in evening light on a listed sunset cruise. Ask Kayaloram to confirm departure time, route and price.",
    intro: "A sunset cruise is one of the options listed by Kayaloram. It offers an evening departure on Poovar’s backwaters, with the route and available time confirmed for each date.",
    image: "/sunset.webp",
    imageAlt: "Evening light over the Poovar backwaters",
    sections: [
      { heading: "An evening on the backwaters", paragraphs: ["The boat route may travel through mangrove channels and toward the estuary. Light and weather change through the day, so ask the team what departure is planned and which views or stops are part of that trip.", "Sunset photos often benefit from a dry cloth for your phone or camera and keeping the lens ready before the boat leaves the shaded channels. Follow the crew’s instructions while taking pictures."] },
      { heading: "Confirm the details before booking", paragraphs: ["Departure time, trip duration, route, price and availability are not fixed on this page. Send your preferred date and group size and ask for those details in one reply.", "If you are comparing options, see the general <a href=\"/poovar-backwater-cruise\">Poovar backwater cruise guide</a> and <a href=\"/pricing\">pricing information</a>."] },
      { heading: "For couples, families and small groups", paragraphs: ["The boating experience is presented for couples, families and small groups. If you need a private boat, child seating or a specific boarding arrangement, confirm it with the operator before making plans."] },
    ],
    related: [serviceLinks[0], serviceLinks[4], { href: "/contact", label: "Ask about a sunset date" }],
  },
  {
    slug: "poovar-island-boating",
    title: "Poovar Island Boating",
    metaTitle: "Poovar Island Boating | Backwater Routes",
    description: "Plan Poovar island boating through local backwaters and mangrove channels. Ask which landmarks and departure options fit your visit.",
    intro: "Poovar island boating is a way to see the waterways around Poovar from the boat. The local route descriptions mention mangroves, the estuary and Golden Sand Beach; ask which of these are included in the cruise you choose.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.04.19.jpeg",
    imageAlt: "Golden shoreline near Poovar estuary",
    sections: [
      { heading: "Backwaters, beach and estuary", paragraphs: ["Poovar’s boat routes move between narrower waterways and more open views. The Golden Sand Beach is a named local landmark near the estuary. Whether the boat goes to a particular stop depends on the route available on your day.", "The <a href=\"/golden-sand-beach\">Golden Sand Beach guide</a> and <a href=\"/elephant-rock\">Elephant Rock guide</a> explain what to ask before you set out."] },
      { heading: "Choose a cruise by time and pace", paragraphs: ["Current options listed include sunrise, lunch and sunset departures as well as Base Cruise, Standard Cruise (Recommended), Classic Cruise and a Custom Package. Compare what each route includes rather than assuming the names describe the same duration or stops.", "Ask for the current price and trip length, and check our <a href=\"/pricing\">Poovar boating pricing page</a> for what to confirm."] },
      { heading: "Location and arrival", paragraphs: ["Kayaloram Backwater Cruise is located on Club Mahindra Resort Road, Viraly, Poovar, Kerala 695525. Call or message for directions from Trivandrum and to confirm the boarding point for your booking."] },
    ],
    related: [serviceLinks[0], serviceLinks[3], { href: "/golden-sand-beach", label: "Golden Sand Beach" }, { href: "/contact", label: "Directions and contact details" }],
  },
  {
    slug: "mangrove-forest-boating",
    title: "Poovar Mangrove Forest Boating",
    metaTitle: "Poovar Mangrove Boating | Forest Canal Rides",
    description: "Take a boat through Poovar’s mangrove-lined channels and backwaters. Ask Kayaloram which route is available on your date.",
    intro: "Mangrove channels are a defining part of Poovar boating. The waterways become narrower and shaded in places, then open toward wider backwaters and the estuary.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.22 (2).jpeg",
    imageAlt: "Boat moving through a shaded mangrove channel",
    sections: [
      { heading: "A slower view of Poovar", paragraphs: ["From a boat, the mangrove edges and their reflections become part of the route. Birdlife may be visible along the banks, though sightings depend on the day and should not be treated as guaranteed.", "For bird-watching questions, see the <a href=\"/bird-watching\">Poovar bird-watching guide</a>. Keep to the crew’s instructions and avoid leaning out of the boat for a photograph."] },
      { heading: "Ask which route is running", paragraphs: ["Not every trip necessarily follows the same channel or includes the same stops. Ask whether the cruise passes through the mangroves, how long it takes and what happens if weather conditions change.", "Compare the broader <a href=\"/poovar-backwater-cruise\">backwater cruise options</a> and check <a href=\"/pricing\">current pricing details</a> before booking."] },
      { heading: "What to bring", paragraphs: ["A phone or camera, sun protection and a light rain layer can be useful. Keep electronics secure, especially if the boat moves into open water, and follow any guidance from the boat team."] },
    ],
    related: [serviceLinks[0], { href: "/bird-watching", label: "Bird-watching in Poovar" }, serviceLinks[4], { href: "/contact", label: "Ask about the mangrove route" }],
  },
  {
    slug: "golden-sand-beach",
    title: "Golden Sand Beach by Boat in Poovar",
    metaTitle: "Golden Sand Beach Boat Trip | Poovar",
    description: "Ask about boat routes toward Poovar’s Golden Sand Beach and estuary. Confirm the included stop, trip duration and fare before booking.",
    intro: "Golden Sand Beach is a named point on Poovar’s local boating routes, near the estuary where river and sea meet. Whether a particular cruise stops there depends on the route and conditions for your date.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.04.19.jpeg",
    imageAlt: "Poovar golden shoreline and estuary viewed from the backwaters",
    sections: [
      { heading: "A shoreline stop to confirm", paragraphs: ["The beach and estuary are often part of the route descriptions for Poovar island boating. Ask the operator whether the boat will pass the shoreline, stop nearby, or follow a different circuit.", "If the beach is a priority, confirm how much time is planned there and whether any access or weather conditions affect the stop."] },
      { heading: "Pair the landmark with a cruise", paragraphs: ["Sunrise, lunch and sunset options are listed, but the exact departure time and route should be confirmed for your date. The <a href=\"/sunset-cruise\">sunset cruise page</a> covers evening trips; the <a href=\"/poovar-island-boating\">island boating page</a> gives a wider route overview."] },
      { heading: "Ask for price and practical details", paragraphs: ["Request a current quote and confirm the trip length, the planned route and any stop before paying. See the <a href=\"/pricing\">Poovar boating pricing guide</a> for the details worth checking."] },
    ],
    related: [serviceLinks[2], serviceLinks[1], { href: "/elephant-rock", label: "Elephant Rock by boat" }, serviceLinks[4]],
  },
  {
    slug: "elephant-rock",
    title: "Elephant Rock on a Poovar Boat Ride",
    metaTitle: "Elephant Rock Boat Route | Poovar Boating",
    description: "Find out how to ask about Elephant Rock on a Poovar boat route, including whether the landmark is part of your chosen cruise.",
    intro: "Elephant Rock and the nearby Mother Mary statue are named in the local Poovar route information. Confirm with the operator whether your selected boat trip passes this landmark.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.23.jpeg",
    imageAlt: "Elephant Rock rising from Poovar estuary",
    sections: [
      { heading: "Check the stop before you choose", paragraphs: ["Routes can differ by cruise, so a landmark appearing in general route information does not mean every departure includes it. Ask whether the boat passes Elephant Rock, whether it stops, and how much time the route allows.", "The <a href=\"/poovar-backwater-cruise\">backwater cruise overview</a> explains the other route details to confirm."] },
      { heading: "Plan around light and conditions", paragraphs: ["If you want photographs, ask the team which departure gives the route you want and whether conditions are suitable that day. Keep your camera secure and follow the crew’s instructions while the boat is moving."] },
      { heading: "Request the complete booking details", paragraphs: ["Confirm the fare, duration, boarding location and included stops together. The <a href=\"/pricing\">pricing guide</a> lists the questions to ask; the <a href=\"/contact\">contact page</a> has the operator’s address and phone numbers."] },
    ],
    related: [serviceLinks[0], serviceLinks[2], { href: "/golden-sand-beach", label: "Golden Sand Beach" }, serviceLinks[4]],
  },
  {
    slug: "bird-watching",
    title: "Bird-Watching by Boat in Poovar",
    metaTitle: "Poovar Bird-Watching Boat Trips | Mangroves",
    description: "Look for birdlife along Poovar’s mangrove waterways from a boat. Sightings vary; ask which route is available on your date.",
    intro: "Poovar’s mangrove edges and waterways provide places to look for birds during a boat ride. Sightings vary with the day, season and route, so treat bird-watching as part of the landscape rather than a guaranteed sighting.",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.27.jpeg",
    imageAlt: "Bird perched above a boat on a Poovar backwater",
    sections: [
      { heading: "Move quietly through the waterways", paragraphs: ["A boat can carry you along shaded channels where the banks are close. Take time to watch the mangrove edges, and ask the operator whether the trip you are considering follows a route with mangrove sections.", "The <a href=\"/mangrove-forest-boating\">mangrove boating guide</a> describes the waterways and practical planning questions."] },
      { heading: "Bring a camera, not expectations", paragraphs: ["A phone or camera with a zoom can help, but birds may be distant or absent on a particular trip. Avoid sudden movement and follow the crew’s advice, especially while the boat is underway."] },
      { heading: "Choose timing after checking availability", paragraphs: ["Sunrise, lunch and sunset cruises are listed. Ask whether a specific time is available and what route it follows; no species list or birding guarantee is published.", "For the wider route, read about the <a href=\"/poovar-backwater-cruise\">Poovar backwater cruise</a> and ask for a current <a href=\"/pricing\">price</a>."] },
    ],
    related: [serviceLinks[3], serviceLinks[0], serviceLinks[4], { href: "/contact", label: "Ask about bird-watching routes" }],
  },
  {
    slug: "pricing",
    title: "Poovar Boating Price and Cruise Costs",
    metaTitle: "Poovar Boating Price | Request a Current Quote",
    description: "Poovar boating prices are not listed online. Request a current quote and confirm the cruise, duration, route and inclusions before booking.",
    intro: "A current Poovar boating price list is not published here. Ask Kayaloram for a quote for your date and group, then confirm exactly which cruise, duration, route and inclusions the price covers.",
    image: "/Premium.webp",
    imageAlt: "Private boat on the Poovar backwaters",
    sections: [
      { heading: "What affects the quote?", paragraphs: ["The site lists sunrise, lunch and sunset departures, along with Base Cruise, Standard Cruise (Recommended), Classic Cruise and a Custom Package. It does not show current fares or package inclusions. Ask the team which option matches your group and what is included in the quoted amount.", "Do not rely on an old screenshot or a price shared without a date. Ask for the quote in writing so you can compare the same trip details."] },
      { heading: "Questions to ask before paying", paragraphs: ["Confirm the total price, trip duration, departure time, planned route, any landmark stops, food inclusions if relevant, payment method and cancellation or weather policy. Ask whether the quote covers the whole boat or is priced per person.", "These details help you compare the available cruise options without assuming the names indicate a particular duration or route."] },
      { heading: "Request a quote", paragraphs: ["Send your intended date, group size and preferred cruise to Kayaloram. The booking team can confirm current availability and pricing. Use the <a href=\"/contact\">contact page</a> or compare the <a href=\"/poovar-backwater-cruise\">backwater cruise options</a> first."] },
    ],
    related: [serviceLinks[0], serviceLinks[1], serviceLinks[2], { href: "/contact", label: "Ask Kayaloram for a quote" }],
  },
];

export function getPoovarSeoPage(slug: string) {
  return poovarSeoPages.find((page) => page.slug === slug);
}
