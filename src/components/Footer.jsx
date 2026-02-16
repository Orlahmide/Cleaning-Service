import React from 'react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
        const navigate = useNavigate();
    

    return (
        <footer className="bg-[#0F2A44] text-white py-4 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    {/* Company Info */}
                    <div>
                        <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">
                            Talon Cleaning Services
                        </h3>
                        <p className="text-white/80">
                            Reliable, detail-focused cleaning for commercial, accommodation, hospitality, and
                            domestic environments.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => navigate('/services/commercial')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Commercial Cleaning
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/services/accommodation')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Accommodation Cleaning
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/services/hospitality')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Hospitality Cleaning
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/services/domestic')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Domestic Cleaning
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => navigate('/about')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/services')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Our Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="text-white/80 hover:text-[#C6A35A] transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Contact Us</h3>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start gap-2">
                                <span>📞</span>
                                <span>Phone Number: 09037362051</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✉</span>
                                <span className="break-all">Email Address: TalongCleaninService@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/10 text-white/60">
                    <p>© 2026 Talon Cleaning Services — All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
