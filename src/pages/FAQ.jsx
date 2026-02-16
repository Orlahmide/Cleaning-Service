import React, { useState } from "react";
import faqHeroImage from "../assets/accommodation.jpg";

// OPTION 1: Two-Column Grid Layout
const FAQOption1 = ({ onGetQuote = () => {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We provide cleaning services across our local service areas, supporting businesses, property managers, and households. We currently cover the following locations: Wisbech, Ely, Spalding, Boston, Bourne, Peterborough, Stamford, Sleaford, and Holbeach. Please contact us to confirm availability in your location.",
    },
    {
      question: "What types of cleaning do you offer?",
      answer:
        "We offer a wide range of services including: Commercial office cleaning, Accommodation turnover cleaning, Hospitality cleaning, Domestic cleaning, Deep cleaning, and General cleaning.",
    },
    {
      question: "Do you provide regular cleaning schedules?",
      answer:
        "Yes. We offer flexible scheduling including daily, weekly, fortnightly, and custom cleaning plans tailored to your needs.",
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team arrives fully equipped with professional cleaning products and equipment. We also accommodate client preferences including offering to provide the products.",
    },
    {
      question: "How do you ensure quality and consistency?",
      answer:
        "We use structured cleaning checklists, clear standards, and quality assurance processes to ensure consistent results.",
    },
    {
      question: "Are your cleaners trustworthy?",
      answer:
        "Absolutely. Our team members are vetted, trained, and committed to professionalism, reliability, and respect.",
    },
    {
      question: "Can I book a one-off clean?",
      answer: "Yes, we provide both one-off and ongoing cleaning services.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Simply contact us with your requirements, and we will provide a tailored quote based on your needs.",
    },
    ,
    {
      question:
        "Are your cleaning products safe for humans and the environment",
      answer:
        "Yes. We use eco-friendly, non-toxic cleaning products that are safe for your staff, customers, and the environment.",
    },
    {
      question: "How do you customise your cleaning services for my business",
      answer:
        "We Assess your premises during an initial consultation and create a cleaning plan that includes specific areas of focus, frequencies, and times that work seamlessly with your schedule",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/95 via-[#0F2A44]/90 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#C6A35A]">Questions</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Everything you need to know about our cleaning services
          </p>
        </div>
      </section>

      {/* FAQ Grid - TWO COLUMNS */}
      <section className="py-16 px-6 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-semibold text-[#0F2A44] text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[#C6A35A] text-2xl font-bold transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have <span className="text-[#C6A35A]">Questions?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Get in touch with our team or request a free
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetQuote}
              className="bg-[#C6A35A] text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:09037362051"
              className="bg-white text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// OPTION 2: Compact List with Icons
const FAQOption2 = ({ onGetQuote = () => {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: "📍",
      question: "What areas do you cover?",
      answer:
        "We provide cleaning services across our local service areas, supporting businesses, property managers, and households. We currently cover the following locations: Wisbech, Ely, Spalding, Boston, Bourne, Peterborough, Stamford, Sleaford, and Holbeach. Please contact us to confirm availability in your location.",
    },
    {
      icon: "🧹",
      question: "What types of cleaning do you offer?",
      answer:
        "We offer a wide range of services including: Commercial office cleaning, Accommodation turnover cleaning, Hospitality cleaning, Domestic cleaning, Deep cleaning, and General cleaning.",
    },
    {
      icon: "📅",
      question: "Do you provide regular cleaning schedules?",
      answer:
        "Yes. We offer flexible scheduling including daily, weekly, fortnightly, and custom cleaning plans tailored to your needs.",
    },
    {
      icon: "🧴",
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team arrives fully equipped with professional cleaning products and equipment. We also accommodate client preferences including offering to provide the products.",
    },
    {
      icon: "✨",
      question: "How do you ensure quality and consistency?",
      answer:
        "We use structured cleaning checklists, clear standards, and quality assurance processes to ensure consistent results.",
    },
    {
      icon: "🤝",
      question: "Are your cleaners trustworthy?",
      answer:
        "Absolutely. Our team members are vetted, trained, and committed to professionalism, reliability, and respect.",
    },
    {
      icon: "🔄",
      question: "Can I book a one-off clean?",
      answer: "Yes, we provide both one-off and ongoing cleaning services.",
    },
    {
      icon: "💬",
      question: "How do I get a quote?",
      answer:
        "Simply contact us with your requirements, and we will provide a tailored quote based on your needs.",
    },
    {
      icon: "😷",
      question:
        "Are your cleaning products safe for humans and the environment",
      answer:
        "Yes. We use eco-friendly, non-toxic cleaning products that are safe for your staff, customers, and the environment.",
    },
    {
      icon: "🔍",
      question: "How do you customise your cleaning services for my business",
      answer:
        "We Assess your premises during an initial consultation and create a cleaning plan that includes specific areas of focus, frequencies, and times that work seamlessly with your schedule",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/95 via-[#0F2A44]/90 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#C6A35A]">Questions</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Everything you need to know about our cleaning services
          </p>
        </div>
      </section>

      {/* FAQ List with Icons */}
      <section className="py-16 px-6 bg-[#F8F6EF]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border-2 transition-all duration-300 ${
                    isOpen
                      ? "border-[#C6A35A] shadow-lg"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex items-center gap-4 focus:outline-none"
                  >
                    <span className="text-3xl flex-shrink-0">{faq.icon}</span>
                    <span className="font-semibold text-[#0F2A44] flex-1">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-[#C6A35A] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4 pl-20 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have <span className="text-[#C6A35A]">Questions?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Get in touch with our team or request a free
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetQuote}
              className="bg-[#C6A35A] text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:09037362051"
              className="bg-white text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// OPTION 3: Minimalist Clean Lines
const FAQOption3 = ({ onGetQuote = () => {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We provide cleaning services across our local service areas, supporting businesses, property managers, and households. We currently cover the following locations: Wisbech, Ely, Spalding, Boston, Bourne, Peterborough, Stamford, Sleaford, and Holbeach. Please contact us to confirm availability in your location.",
    },
    {
      question: "What types of cleaning do you offer?",
      answer:
        "We offer a wide range of services including: Commercial office cleaning, Accommodation turnover cleaning, Hospitality cleaning, Domestic cleaning, Deep cleaning, and General cleaning.",
    },
    {
      question: "Do you provide regular cleaning schedules?",
      answer:
        "Yes. We offer flexible scheduling including daily, weekly, fortnightly, and custom cleaning plans tailored to your needs.",
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team arrives fully equipped with professional cleaning products and equipment. We also accommodate client preferences including offering to provide the products.",
    },
    {
      question: "How do you ensure quality and consistency?",
      answer:
        "We use structured cleaning checklists, clear standards, and quality assurance processes to ensure consistent results.",
    },
    {
      question: "Are your cleaners trustworthy?",
      answer:
        "Absolutely. Our team members are vetted, trained, and committed to professionalism, reliability, and respect.",
    },
    {
      question: "Can I book a one-off clean?",
      answer: "Yes, we provide both one-off and ongoing cleaning services.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Simply contact us with your requirements, and we will provide a tailored quote based on your needs.",
    },
    {
      question:
        "Are your cleaning products safe for humans and the environment",
      answer:
        "Yes. We use eco-friendly, non-toxic cleaning products that are safe for your staff, customers, and the environment.",
    },
    {
      question: "How do you customise your cleaning services for my business",
      answer:
        "We Assess your premises during an initial consultation and create a cleaning plan that includes specific areas of focus, frequencies, and times that work seamlessly with your schedule",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/95 via-[#0F2A44]/90 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#C6A35A]">Questions</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Everything you need to know about our cleaning services
          </p>
        </div>
      </section>

      {/* FAQ Minimalist List */}
      <section className="py-16 px-6 bg-[#F8F6EF]">
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-start gap-6 focus:outline-none group"
                  >
                    <h3
                      className={`font-semibold text-lg transition-colors ${
                        isOpen
                          ? "text-[#C6A35A]"
                          : "text-[#0F2A44] group-hover:text-[#C6A35A]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        isOpen
                          ? "border-[#C6A35A] bg-[#C6A35A] rotate-180"
                          : "border-gray-300 group-hover:border-[#C6A35A]"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          isOpen
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#C6A35A]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have <span className="text-[#C6A35A]">Questions?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Get in touch with our team or request a free
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetQuote}
              className="bg-[#C6A35A] text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:09037362051"
              className="bg-white text-[#0F2A44] px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Export the option you want to use
export default FAQOption1; // Change this to FAQOption1, FAQOption2, or FAQOption3
