"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export function DifferenceSection() {
  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-16 font-outfit">
          <span className="text-yellow-500">The ExpeditieMD</span>
          <span className="text-white"> Difference</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Card */}
          <div className="border border-yellow-600 rounded-2xl p-8 bg-black/40">
            <p className="text-white text-lg leading-relaxed mb-12 font-satoshi">
              Driven by the realities of modern healthcare, we cut the noise between talent and teams. Vetted matches,
              clean onboarding, clear pay, real support.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" strokeWidth={3} />
                </div>
                <span className="text-yellow-500 text-lg font-semibold font-satoshi">Faster, safer placements</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" strokeWidth={3} />
                </div>
                <span className="text-yellow-500 text-lg font-semibold font-satoshi">Curated matches that last</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" strokeWidth={3} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 text-lg font-semibold font-satoshi">Full support, always</span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-sm font-bold text-white">
                    👤
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src="/medical-professionals-handshake.jpg"
                alt="Medical professionals collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Description Text */}
            <p className="text-white text-lg leading-relaxed font-satoshi">
              Start faster with verified credentials, clear contracts, and proactive scheduling. We align licensure,
              onboarding, and travel in parallel so you arrive ready to treat patients, not chase paperwork or
              logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
