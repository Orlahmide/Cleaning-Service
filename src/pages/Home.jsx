import React, { useState, useEffect } from "react";
import commercialImg from "../assets/commercial.jpg";
import accommodationImg from "../assets/accommodation.jpg";
import hospitalityImg from "../assets/hospitality.jpg";
import domesticImg from "../assets/domestic.jpg";
import heroImage from "../assets/domestic.jpg";
import aboutImage from "../assets/aboutPicture.png";
import QuoteModal from "../components/QuoteModal";
import ConsultationModal from "../components/ConsultationModal";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-[#2E2E2E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease;
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-48 pb-32 px-6 text-center mt-20 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Dark Gradient Overlay (keeps text readable) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/80 via-[#0F2A44]/80 to-[#5A728A]/60" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto animate-fadeInUp text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            Cleaning That Supports Better Living and Working
          </h1>

          <p className="text-2xl text-[#C6A35A] mb-4 font-semibold">
            Clean Spaces. Clear Standards. Total Peace of Mind.
          </p>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            At Talon Cleaning Services, we provide reliable, detail-focused
            cleaning for homes, businesses, and accommodation spaces — creating
            clean, calm environments that support better living and working
            every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get a Free Quote
            </button>

            <button
              onClick={() => navigate("/services")}
              className="bg-transparent text-white px-10 py-4 rounded font-semibold border-2 border-white hover:bg-white hover:text-[#0F2A44] transition-all duration-300"
            >
              Explore Our Services
            </button>
          </div>

          <div className="flex flex-wrap gap-10 justify-center text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#C6A35A] font-bold">✓</span> Reliable
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#C6A35A] font-bold">✓</span> Professionally
              Managed
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#C6A35A] font-bold">✓</span> Detail-Focused
            </span>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="bg-[#e6e1d5] py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Elegant Heading */}
          <h3 className="font-playfair text-3xl md:text-4xl text-[#0F2A44] mb-4">
            Areas We Proudly Currently Serve
          </h3>

          <div className="w-24 h-[2px] bg-[#C6A35A] mx-auto mb-6"></div>

          <p className="text-[#555] mb-14 max-w-2xl mx-auto">
            Delivering professional cleaning services across Cambridgeshire and
            Lincolnshire.
          </p>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              "Wisbech",
              "Ely",
              "Spalding",
              "Boston",
              "Bourne",
              "Peterborough",
              "Stamford",
              "Sleaford",
              "Holbeach",
            ].map((location, index) => (
              <div
                key={index}
                className="group bg-white border border-[#e5e5e5] rounded-lg py-8 px-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn opacity-0"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <span className="text-[#C6A35A] text-2xl block mb-3">✦</span>
                <p className="text-[#0F2A44] font-medium text-lg tracking-wide group-hover:text-[#C6A35A] transition-colors duration-300">
                  {location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="bg-[#F7F6F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-5">
            Cleaning Services Designed Around Your Needs
          </h2>
          <p className="text-center text-[#5A728A] max-w-3xl mx-auto mb-16 text-lg">
            Every space is different. That's why we provide tailored cleaning
            services designed to meet the specific needs of businesses, property
            operators, and households.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                id: "commercial",
                title: "Commercial Cleaning",
                description:
                  "Maintain a clean, professional environment for your team and visitors with reliable office and workspace cleaning delivered to consistent standards.",
                image: commercialImg,
              },
              {
                id: "accommodation",
                title: "Accommodation Cleaning",
                description:
                  "Efficient and thorough cleaning for serviced accommodation, Airbnb properties, and student turnovers — ensuring every guest arrives to a spotless space.",
                image: accommodationImg,
              },
              {
                id: "hospitality",
                title: "Hospitality Cleaning",
                description:
                  "High-standard cleaning solutions supporting hotels and hospitality environments where presentation and consistency matter most.",
                image: hospitalityImg,
              },
              {
                id: "domestic",
                title: "Domestic Cleaning",
                description:
                  "Dependable home cleaning services that help you enjoy a cleaner, calmer living space without the stress.",
                image: domesticImg,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-lg transition-all duration-300 border border-[#0F2A44]/10 hover:-translate-y-2 hover:shadow-xl hover:border-[#C6A35A]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="font-playfair text-2xl text-[#0F2A44] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#2E2E2E] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Updated Learn More Button */}
                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="text-[#C6A35A] font-semibold hover:text-[#B89245] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/services")}
              className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0F2A44] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-center text-4xl md:text-5xl mb-5">
            Why Clients Trust Talon Cleaning Services
          </h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto mb-16 text-lg">
            We believe cleaning should bring confidence and peace of mind — not
            uncertainty. Our approach focuses on reliability, professionalism,
            and attention to detail in every service we deliver.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "✓",
                title: "Reliability You Can Count On",
                description:
                  "We show up on time and deliver consistent results you can depend on.",
              },
              {
                icon: "◈",
                title: "Attention to Detail",
                description:
                  "We focus on the small details that transform how a space looks and feels.",
              },
              {
                icon: "⚙",
                title: "Professionally Managed Service",
                description:
                  "Clear systems and structured processes ensure quality every time.",
              },
              {
                icon: "◆",
                title: "Peace of Mind",
                description:
                  "We handle the cleaning so you can focus on what matters most.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#C6A35A]/15 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-[#C6A35A] transition-all duration-300 hover:bg-[#C6A35A] hover:text-[#0F2A44] hover:scale-110 cursor-pointer">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl mb-4">{item.title}</h3>
                <p className="text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={aboutImage}
                alt="Talon Cleaning team at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Brand Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/20 via-transparent to-[#C6A35A]/10"></div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#0F2A44] mb-6">
                Cleaning with Purpose
              </h2>

              <p className="text-[#2E2E2E] leading-relaxed mb-5 text-lg">
                Talon Cleaning Services was founded on a simple belief — clean
                spaces support better wellbeing, productivity, and everyday
                living.
              </p>

              <p className="text-[#2E2E2E] leading-relaxed mb-8 text-lg">
                We understand that whether at home, at work, or welcoming
                guests, the condition of a space affects how people feel. That’s
                why we go beyond basic cleaning to deliver dependable,
                professionally managed services that create environments people
                feel comfortable and confident in.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More About Us
              </button>
            </div>
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

      {/* Testimonials */}
            <Testimonials  />

      {/* CTA Section */}
      <section
        id="contact"
        className="bg-gradient-to-br from-[#0F2A44] to-[#5A728A] py-24 px-6 text-center text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl mb-5">
            Ready for a Cleaner, Stress-Free Space?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let Talon Cleaning Services take care of the cleaning while you
            focus on running your business, hosting your guests, or enjoying
            your home.
          </p>
          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Request Your Free Quote Today
          </button>
        </div>
      </section>

      {/* Modals */}
      <QuoteModal
        showQuoteModal={showQuoteModal}
        setShowQuoteModal={setShowQuoteModal}
        quoteSuccess={quoteSuccess}
        setQuoteSuccess={setQuoteSuccess}
      />

      <ConsultationModal
        showConsultationModal={showConsultationModal}
        setShowConsultationModal={setShowConsultationModal}
        consultSuccess={consultSuccess}
        setConsultSuccess={setConsultSuccess}
      />
    </div>
  );
}
