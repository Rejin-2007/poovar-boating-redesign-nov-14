const routeDetails = [
  "Mangrove channels",
  "Golden Sand Beach",
  "Elephant Rock",
  "Neyyar river crossings",
  "Birdwatching",
  "Sunrise and sunset departures",
  "Lunch cruise",
  "Island picnic stops",
];

export default function PlanExperienceSection() {
  return (
    <section aria-labelledby="plan-poovar-cruise" className="theme-burgundy py-16 text-[#fff0dc] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Before you book</p>
            <h2 id="plan-poovar-cruise" className="font-editorial max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Ask us what’s available on your date.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#fff0dc]/85 sm:text-lg">
              Tell us when you’re visiting and how many people are coming. We’ll confirm the available cruise, departure time, and route.
            </p>
          </div>

          <div className="border-t border-[#fff0dc]/25 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow">Call the booking team</p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a href="tel:+918139031924" className="text-2xl font-semibold text-[#fff0dc] transition hover:text-[#fff0dc] sm:text-3xl" aria-label="Call +91 81390 31924">
                +91 81390 31924
              </a>
              <a href="tel:+918075413797" className="text-2xl font-semibold text-[#fff0dc] transition hover:text-[#fff0dc] sm:text-3xl" aria-label="Call +91 80754 13797">
                +91 80754 13797
              </a>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#fff0dc]/85 sm:text-base">
              Call or message if you have a preferred route, departure time, or stop in mind.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#fff0dc]/25 pt-7 sm:mt-14">
          <h3 className="text-lg font-semibold text-[#fff0dc]">Routes and stops</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {routeDetails.map((item, index) => (
              <li key={item} className="flex items-baseline gap-3 border-b border-[#fff0dc]/20 pb-3 text-sm leading-6 text-[#fff0dc] sm:text-base">
                <span className="font-editorial text-lg text-[#fff0dc]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
