import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icon.png";

const Navbar = ({ onGetQuote = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetQuote = () => {
    if (typeof onGetQuote === "function") onGetQuote();
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) =>
    `transition-colors duration-300 ${
      isActive(path)
        ? "text-[#C6A35A] font-semibold"
        : "text-white hover:text-[#C6A35A]"
    }`;

  return (
    <nav
      className={`bg-[#0F2A44] fixed w-full top-0 z-50 rounded-b-lg transition-shadow duration-300 ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-18 md:h-20">
        
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Talon Cleaning Logo"
            className="h-[90px] sm:h-25 md:h-[100px] w-auto object-contain"
          />
          <span className="hidden lg:inline font-playfair text-lg font-bold text-white tracking-wide">
            TALON <span className="text-[#C6A35A]">CLEANING</span> SERVICES
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center text-base">
          <button onClick={() => navigate("/")} className={getLinkClasses("/")}>
            Home
          </button>
          <button onClick={() => navigate("/services")} className={getLinkClasses("/services")}>
            Services
          </button>
          <button onClick={() => navigate("/about")} className={getLinkClasses("/about")}>
            About Us
          </button>
          <button onClick={() => navigate("/contact")} className={getLinkClasses("/contact")}>
            Contact Us
          </button>
          <button onClick={() => navigate("/FAQs")} className={getLinkClasses("/FAQs")}>
            FAQs
          </button>

          {/* CTA */}
          <button
            onClick={handleGetQuote}
            className="bg-[#C6A35A] text-[#0F2A44] px-6 py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F2A44] px-6 pb-6 pt-4 space-y-4 shadow-xl">
          <button
            onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
            className="block text-white text-left w-full"
          >
            Home
          </button>

          <button
            onClick={() => { navigate("/services"); setMobileMenuOpen(false); }}
            className="block text-white text-left w-full"
          >
            Services
          </button>

          <button
            onClick={() => { navigate("/about"); setMobileMenuOpen(false); }}
            className="block text-white text-left w-full"
          >
            About Us
          </button>

          <button
            onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
            className="block text-white text-left w-full"
          >
            Contact Us
          </button>

          <button
            onClick={() => { navigate("/FAQs"); setMobileMenuOpen(false); }}
            className="block text-white text-left w-full"
          >
            FAQs
          </button>

          <button
            onClick={handleGetQuote}
            className="w-full bg-[#C6A35A] text-[#0F2A44] px-6 py-3 rounded font-semibold mt-3 hover:bg-[#B89245] transition-all duration-300"
          >
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
