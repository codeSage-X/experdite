// import Header from "@/components/header"

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <div style={{ backgroundColor: "#121212" }} className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
      className="  relative h-[25vh] md:h-[40vh] lg:h-[40vh] xl:h-[60vh] bg-[#121212]  bg-contain  bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: 'url("/about.png")',
      }}
    >
        {/* <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#2F2F2F", color: "#F6E58B" }}
          >
            About us
          </span>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            ExpedMD is the backbone of cultural and sociocultural{" "}
            <span style={{ color: "#F6E58B" }}>medical excellence</span>
          </h1>
        </div> */}
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              Work in new cities or return to families. Build your schedule around your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="p-8 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#F6E58B" }}>
                Our Vision
              </h3>
              <p className="text-gray-300">To be the undisputed leading and dominant eye care provider in Africa.</p>
            </div>
            <div className="p-8 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#F6E58B" }}>
                Our Mission
              </h3>
              <p className="text-gray-300">To liberate people by preserving their sight to see the beauty of life.</p>
            </div>
          </div>

          {/* Brand Values */}
          <div className="p-12 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#F6E58B" }}>
              Brand Values
            </h3>
            <p className="text-gray-300 mb-6">
              Our brand values define our culture and guide our behavior. They are lived by our people, captured in our
              relationships and reflected in how we work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Competence
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Innovation
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Insight
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Integrity
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Respect
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Resilience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
