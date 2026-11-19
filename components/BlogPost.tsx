import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="bg-[#F3EEE8] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <article className="blog-article mx-auto max-w-4xl rounded-[2rem] border border-[#17645F]/10 bg-[#F3EEE8] px-6 py-8 shadow-[0_18px_50px_rgba(23,100,95,0.06)] sm:px-10 sm:py-12 lg:px-14">
        <header>
          <p className="eyebrow mb-4">A local guide</p>
          <h1>A day on the water in Poovar</h1>
          <p className="mt-4 text-sm text-[#17645F]">Poovar, Kerala · By Kayaloram</p>
        </header>

        <section>
          <p>
            Poovar sits where the river meets the sea. A boat trip takes you through backwater channels, past mangroves, and toward the estuary and Golden Sand Beach. The route and timing depend on the cruise you choose.
          </p>
        </section>

        <section>
          <h2>Choose a time to go</h2>
          <p>
            The listed options include sunrise and sunset rides, a lunch cruise, and private cruises. Tell us your preferred date and group size; ask which route and departure time are available.
          </p>
        </section>

        <section>
          <h2>Ask about the boat and route</h2>
          <p>
            The available boats and stops can vary. Before you book, ask what kind of boat you’ll be on, how long the ride takes, and whether your route includes Golden Sand Beach or Elephant Rock.
          </p>
        </section>

        <section>
          <h2>Check the day’s conditions</h2>
          <p>
            Weather and tides can affect departure times. Confirm the schedule with the team on the day, and check that life jackets are provided before boarding.
          </p>
        </section>

        <section>
          <h2>Leave the mangroves as you found them</h2>
          <p>
            Keep rubbish on the boat and follow the crew’s instructions at each stop. If you’re hoping to spot birds, keep a little distance from the banks and bring binoculars if you have them.
          </p>
        </section>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#17645F]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base leading-7 text-[#17645F]">Have a date in mind? Ask us about the available cruises.</p>
          <Link href="/booking" className="button-coral px-7 py-3.5">Ask about a boat ride</Link>
        </div>
      </article>
    </main>
  );
}
