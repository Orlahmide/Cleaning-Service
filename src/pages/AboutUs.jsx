import React from "react";
import faqHeroImage from "../assets/aboutPicture.png";

const AboutUs = ({ onGetQuote = () => {} }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add keyframes for animations */}
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  /* Existing animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* New animations */
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(1.1); }
    to { opacity: 1; transform: scale(1); }
  }

  /* Animation classes */
  .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
  .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
  .animate-slideUp { animation: slideUp 0.3s ease forwards; }
  .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
  .animate-scaleIn { animation: scaleIn 1.2s ease forwards; }

  /* Delay utilities */
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-400 { animation-delay: 0.4s; }
  .animate-delay-600 { animation-delay: 0.6s; }
    `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
  {/* Background Image with Scale Animation */}
  <div
    className="absolute inset-0 bg-cover bg-center animate-scaleIn"
    style={{ backgroundImage: `url(${faqHeroImage})` }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/80 via-[#0F2A44]/80 to-[#5A728A]/60" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInDown">
      About <span className="text-[#C6A35A]">Talon Cleaning Services</span>
    </h1>

    <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp animate-delay-400">
      Born from a simple belief: people thrive in clean spaces.
    </p>
  </div>
</section>


      {/* Main Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether at home, at work, or in places that welcome guests, a
              clean environment does more than look good; it supports focus,
              reduces stress, and contributes to stronger, healthier everyday
              living.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that modern life is busy and demanding. That's why
              we exist — to make daily living easier by creating spaces that
              feel calm, organised, and ready for whatever the day brings.
            </p>
          </div>
        </div>
      </section>

      {/* Built on Trust Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-8 text-center">
            Built on{" "}
            <span className="text-[#C6A35A]">Trust, Reliability, and Care</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            At the heart of our business is a commitment to doing things
            properly:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-[#C6A35A] text-2xl font-bold">✓</span>
                <p className="text-gray-700">Showing up when we say we will</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-[#C6A35A] text-2xl font-bold">✓</span>
                <p className="text-gray-700">
                  Delivering consistent high quality standards every time
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-[#C6A35A] text-2xl font-bold">✓</span>
                <p className="text-gray-700">
                  Communicating clearly and professionally
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-[#C6A35A] text-2xl font-bold">✓</span>
                <p className="text-gray-700">
                  Treating every space with respect
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center italic">
            We believe cleaning is a service built on trust — because our
            clients invite us into their workplaces, their properties, and
            sometimes their homes. That trust is something we never take
            lightly.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-8 text-center">
            Who We <span className="text-[#C6A35A]">Serve</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            We proudly support a wide range of clients, including:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold mb-2 text-[#C6A35A]">
                Offices
              </h3>
              <p className="text-white/90">Corporate workspaces</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold mb-2 text-[#C6A35A]">
                Accommodation
              </h3>
              <p className="text-white/90">Serviced and short-let properties</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold mb-2 text-[#C6A35A]">
                Hospitality
              </h3>
              <p className="text-white/90">
                Hotels and hospitality environments
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold mb-2 text-[#C6A35A]">
                Property Managers
              </h3>
              <p className="text-white/90">Landlords and property operators</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold mb-2 text-[#C6A35A]">
                Households
              </h3>
              <p className="text-white/90">Busy homeowners</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white rounded-lg p-6 shadow-lg flex items-center justify-center">
              <p className="text-white/90 text-center font-semibold">
                And More...
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Each space has different needs, and we tailor our approach to ensure
            cleaning is efficient, reliable, and suited to how the space is
            used.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Mission, Vision & <span className="text-[#C6A35A]">Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#C6A35A] mb-4">
                Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our vision is to redefine cleaning as an essential service that
                enhances everyday living by creating spaces where people feel
                confident, focused, and at their best.
              </p>
            </div>

            {/* Value Statement */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#C6A35A] mb-4">
                Value Statement
              </h3>
              <p className="text-white/90 leading-relaxed">
                We provide reliable, detail-focused cleaning services for
                offices, accommodation, and hospitality spaces, helping
                businesses, property operators and domestic owners maintain high
                standards with consistent, professionally managed cleaning.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#C6A35A] mb-4">
                Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our mission is to make everyday living and working easier by
                delivering reliable, high-quality cleaning services that create
                clean, healthy, and welcoming environments for businesses,
                property operators, and households.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12">
            <h3 className="font-playfair text-2xl font-bold text-center mb-8 text-[#C6A35A]">
              Our Core Values
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-playfair text-xl font-bold text-[#C6A35A] mb-3">
                  Reliability
                </h4>
                <p className="text-white/90 text-sm">
                  We do what we promise — showing up on time and delivering
                  consistent results.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-playfair text-xl font-bold text-[#C6A35A] mb-3">
                  Attention to Detail
                </h4>
                <p className="text-white/90 text-sm">
                  We believe quality lives in the details, and we never overlook
                  the small things.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-playfair text-xl font-bold text-[#C6A35A] mb-3">
                  Integrity
                </h4>
                <p className="text-white/90 text-sm">
                  We act with honesty, professionalism, and respect in
                  everything we do.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-playfair text-xl font-bold text-[#C6A35A] mb-3">
                  Care
                </h4>
                <p className="text-white/90 text-sm">
                  We understand that cleaning is about people, not just spaces.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="font-playfair text-xl font-bold text-[#C6A35A] mb-3">
                  Consistency
                </h4>
                <p className="text-white/90 text-sm">
                  We maintain clear standards to ensure dependable service every
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="mt-12 text-center">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-[#C6A35A]">
              Our Purpose
            </h3>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-4">
              Our purpose is simple: To make everyday living and working easier
              by creating clean, healthy environments where people can feel
              their best.
            </p>
            <p className="text-lg text-white/80 italic">
              Because when a space is clean, organised, and well maintained —
              everything else becomes easier.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-4 text-center">
            Our <span className="text-[#C6A35A]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Simple, Clear, and Reliable
          </p>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C6A35A]/30" />

            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <h3 className="font-playfair text-2xl font-bold text-[#0F2A44] mb-3">
                      Step 1 — Consultation
                    </h3>
                    <p className="text-gray-700">
                      We learn about your needs, space, and cleaning
                      requirements to create a tailored solution.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-[#C6A35A] rounded-full items-center justify-center text-white font-bold text-xl z-10 shrink-0">
                  1
                </div>
                <div className="md:w-1/2" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2" />
                <div className="hidden md:flex w-12 h-12 bg-[#C6A35A] rounded-full items-center justify-center text-white font-bold text-xl z-10 shrink-0">
                  2
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <h3 className="font-playfair text-2xl font-bold text-[#0F2A44] mb-3">
                      Step 2 — Custom Plan
                    </h3>
                    <p className="text-gray-700">
                      We design a cleaning schedule and checklist suited to your
                      environment and priorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <h3 className="font-playfair text-2xl font-bold text-[#0F2A44] mb-3">
                      Step 3 — Professional Cleaning
                    </h3>
                    <p className="text-gray-700">
                      Our trained team delivers thorough, detail-focused
                      cleaning using clear standards.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-[#C6A35A] rounded-full items-center justify-center text-white font-bold text-xl z-10 shrink-0">
                  3
                </div>
                <div className="md:w-1/2" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2" />
                <div className="hidden md:flex w-12 h-12 bg-[#C6A35A] rounded-full items-center justify-center text-white font-bold text-xl z-10 shrink-0">
                  4
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <h3 className="font-playfair text-2xl font-bold text-[#0F2A44] mb-3">
                      Step 4 — Quality Assurance
                    </h3>
                    <p className="text-gray-700">
                      We ensure consistency through inspections, communication,
                      and ongoing support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <h3 className="font-playfair text-2xl font-bold text-[#0F2A44] mb-3">
                      Step 5 — Ongoing Support
                    </h3>
                    <p className="text-gray-700">
                      We remain flexible and responsive as your needs evolve.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-[#C6A35A] rounded-full items-center justify-center text-white font-bold text-xl z-10 shrink-0">
                  5
                </div>
                <div className="md:w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
