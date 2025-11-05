"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import coop from '../public/coop.png'

export function DifferenceSection() {
  return (
    <section className="w-full bg-[#0C0C0C] h-[100vh] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-outfit text-[#F9EEB6]">
          The ExpediteMD Difference
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start lg:items-center">
          {/* Left Text Card */}
          <div className="border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 md:p-10 bg-black/40 shadow-lg">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-satoshi">
              Driven by the realities of modern healthcare, we cut the noise between talent and teams. Vetted matches,
              clean onboarding, clear pay, real support.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#007BFF] flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#F9EEB6] text-base sm:text-lg md:text-xl font-semibold font-satoshi">
                  Faster, safer placements
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#007BFF] flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#F9EEB6] text-base sm:text-lg md:text-xl font-semibold font-satoshi">
                  Curated matches that last
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#007BFF] flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#F9EEB6] text-base sm:text-lg md:text-xl font-semibold font-satoshi">
                  Full support, always
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6 sm:space-y-8">
            {/* Placeholder image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={coop} // 🟦 Replace this with your actual image later
                alt="Healthcare professionals collaborating"
                fill
                className="object-cover"
              />
            </div>

            {/* Description text */}
            <p className="text-[#E5E5E5] text-base sm:text-lg md:text-xl leading-relaxed font-satoshi">
              Start faster with verified credentials, clear contracts, and proactive scheduling. We align licensure,
              onboarding, and travel in parallel so you arrive ready to treat patients, not chase paperwork or logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
