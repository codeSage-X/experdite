"use client"

export function TestimonialSection() {
  return (
    <section className="w-full bg-black py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-1 h-12 sm:h-24 bg-yellow-600 mb-8 sm:mb-12"></div>

        <div className="text-center max-w-3xl mb-8 sm:mb-12 px-4">
          <p className="text-lg sm:text-2xl leading-relaxed font-light">
            <span className="text-yellow-600">Most physicians would love to take locum assignments.</span>{" "}
            <span className="text-white">Travel. Flexibility. Better pay. A break from burnout.</span>
          </p>
        </div>

        <div className="w-1 h-12 sm:h-24 bg-yellow-600"></div>
      </div>
    </section>
  )
}
