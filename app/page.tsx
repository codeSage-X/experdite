"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { TestimonialSection } from "@/components/testimonial-section"
import { ProcessSection } from "@/components/process-section"
import { DifferenceSection } from "@/components/difference-section"
import { WhyExpeditieMDSection } from "@/components/why-expeditie-md-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen sm:h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 overflow-hidden pt-24 sm:pt-0">
        <div className="absolute inset-0">
          <Image
            src="/medical-airport-background-sky.jpg"
            alt="Airport background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/30 via-transparent to-black/20"></div>

        <div className="relative z-10 min-h-screen sm:h-full flex flex-col sm:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6">
          {/* Left Content */}
          <div className="flex-1 pt-8 sm:pt-24 flex flex-col justify-center text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 sm:mb-8 leading-tight font-outfit">
              Practice medicine.
              <br />
              See the world. On your
              <br />
              terms.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto sm:mx-0 font-satoshi">
              Join a growing network of elite physicians unlocking flexible, high-paying locum opportunities — paired
              with luxury travel and full-service support.
            </p>

            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg w-fit mx-auto sm:mx-0 transition transform hover:scale-105 font-outfit">
              Start your Journey here
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative h-48 sm:h-full flex items-center justify-center sm:justify-end pt-8 sm:pt-24">
            <div className="relative w-48 sm:w-80 md:w-96 h-48 sm:h-96">
              <Image
                src="/female-doctor-medical-professional-scrubs-tablet.jpg"
                alt="Medical professional"
                width={500}
                height={600}
                className="object-contain"
              />

              <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-lg">
                T
              </div>
              <div className="absolute bottom-16 sm:bottom-32 right-4 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-lg">
                T
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <ProcessSection />

      <DifferenceSection />

      <WhyExpeditieMDSection />
    </main>
  )
}
