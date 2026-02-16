import React, { useState } from "react";
import faqHeroImage from "../assets/contact.jpg";


const Contact = ({ onGetQuote = () => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Service locations
  const serviceLocations = [
    "Wisbech",
    "Ely",
    "Spalding",
    "Boston",
    "Bourne",
    "Peterborough",
    "Stamford",
    "Sleaford",
    "Holbeach",
  ];

  // PASTE YOUR GOOGLE MY MAPS EMBED URL HERE
  const embedMapUrl =
    "https://www.google.com/maps/d/embed?mid=1cU0OpWhTTJh8gkxcZMWzRx-aXo9pm6E&ehbc=2E312F&noprof=1";

  return (
    <div className="min-h-screen bg-white">
        
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/85 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for a Cleaner,{" "}
            <span className="text-[#C6A35A]">Stress-Free Space?</span>
          </h1>

          <p className="text-xl text-white/90 leading-relaxed mb-4">
            Let us take care of the cleaning so you can focus on what matters
            most.
          </p>

          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Whether you need regular cleaning, a deep clean, or professional
            support for your business or property, we're here to help.
          </p>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="py-12 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={onGetQuote}
              className="bg-[#0F2A44] text-white px-8 py-6 rounded-xl font-semibold hover:bg-[#1a3a5c] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg flex items-center justify-center gap-3"
            >
              <span>🧹</span>
              Book Your Cleaning Service
            </button>
            <a
              href="tel:09037362051"
              className="bg-white border-2 border-[#0F2A44] text-[#0F2A44] px-8 py-6 rounded-xl font-semibold hover:bg-[#0F2A44] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg flex items-center justify-center gap-3"
            >
              <span>📞</span>
              Speak With Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-[#0F2A44] mb-8">
                Get in Touch
              </h2>

              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] mb-1">Phone</h3>
                    <a
                      href="tel:09037362051"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors text-lg"
                    >
                      09037362051
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] mb-1">Email</h3>
                    <a
                      href="mailto:TalongCleaninService@gmail.com"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors break-all"
                    >
                      TalongCleaninService@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="font-playfair text-3xl font-bold text-[#0F2A44] mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A35A] focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A35A] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A35A] focus:border-transparent transition-all"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A35A] focus:border-transparent transition-all resize-y"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C6A35A] text-[#0F2A44] px-8 py-4 rounded-lg font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-lg"
                  >
                    Send Message
                  </button>

                  {formSuccess && (
                    <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-lg">
                      <strong>Thank you!</strong> We've received your message
                      and will get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-4">
              Our Service <span className="text-[#C6A35A]">Area</span>
            </h2>
            <p className="text-lg text-gray-700">
              We serve 9 communities across Cambridgeshire, Lincolnshire, and
              surrounding areas
            </p>
          </div>

          {/* Embedded Google My Maps */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Talon Cleaning Services Coverage Area"
            />
          </div>

          {/* Location List Below Map */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-[#0F2A44] mb-4 text-center">
              Service Locations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">📍</span>
                  <span className="font-medium text-gray-700">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
