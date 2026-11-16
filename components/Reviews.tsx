import Link from "next/link"

type Review = {
  stars: number
  content: string
  user: {
    name: string
  }
  date?: string
  service?: string
}

const reviews: Review[] = [
  {
    stars: 5,
    content: "Excellent Poovar backwater cruise experience! Rajesh’s guidance and calm storytelling made the ride feel thoughtful and memorable from start to finish.",
    user: {
      name: "DARKVILLER GAMING",
    },
    date: "March 2024",
    service: "Deluxe Backwater Cruise",
  },
  {
    stars: 5,
    content: "An amazing experience with warm hospitality and beautiful views of Poovar’s golden shoreline meeting the river. It felt private, peaceful, and beautifully paced.",
    user: {
      name: "GAYATRI VAGAL",
    },
    date: "February 2024",
    service: "Sunset Cruise Package",
  },
  {
    stars: 4.5,
    content: "Clean, calm, and less crowded than expected. The route through the mangroves was especially beautiful and made for a great photography outing.",
    user: {
      name: "NEETING BABY",
    },
    date: "January 2024",
    service: "Standard Backwater Tour",
  },
  {
    stars: 4.5,
    content: "A genuinely special Poovar boating experience for a couples trip. The setting felt luxurious without losing the natural charm of the location.",
    user: {
      name: "JEYBN 4",
    },
    date: "December 2023",
    service: "Premium Luxury Cruise",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex items-center gap-1" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const full = rating >= index + 1
        const half = rating >= index + 0.5 && rating < index + 1

        return (
          <span key={index} className={`text-base sm:text-lg ${full || half ? "text-[#FF6845]" : "text-[#F3EEE8]/25"}`} aria-hidden="true">
            {full ? "★" : half ? "⯪" : "★"}
          </span>
        )
      })}
      <span className="ml-2 text-sm text-[#F3EEE8]/80">({rating}/5)</span>
    </div>
  )
}

export default function Reviews() {
  const [featuredReview, ...otherReviews] = reviews;

  return (
    <section className="theme-teal py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-9 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-3">Guest comments</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#F3EEE8] sm:text-4xl">
            Notes from Poovar boat rides.
          </h2>
        </header>

        <div className="review-layout">
          <article data-reveal-item className="review-feature">
            <Stars rating={featuredReview.stars} />
            <blockquote className="review-quote mt-6 text-[#F3EEE8]">
              “{featuredReview.content}”
            </blockquote>
            <ReviewAuthor review={featuredReview} />
          </article>

          <div>
            {otherReviews.map((review) => (
              <article data-reveal-item key={review.user.name} className="review-list-item">
                <Stars rating={review.stars} />
                <blockquote className="font-editorial text-xl leading-relaxed text-[#F3EEE8]">
                  “{review.content}”
                </blockquote>
                <ReviewAuthor review={review} />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#F3EEE8]/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base leading-7 text-[#F3EEE8]/85">
            Have a date in mind? Send it to us and we’ll check availability.
          </p>
          <Link href="/booking" className="button-coral px-7 py-3.5" aria-label="Ask about a Poovar boat ride">
            Check dates
          </Link>
        </div>
      </div>
    </section>
  )
}

function ReviewAuthor({ review }: { review: Review }) {
  return (
    <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
      <span className="font-semibold text-[#F3EEE8]">{review.user.name}</span>
      {review.date && <span className="text-[#F3EEE8]/75">{review.date}</span>}
      {review.service && <span className="text-[#F3EEE8]/85">{review.service}</span>}
    </div>
  );
}
