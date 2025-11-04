'use client';

import { FaShieldAlt, FaHandshake, FaLightbulb, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Business Consulting",
      description: "Strategic planning and growth solutions for businesses of all sizes",
      icon: "💼"
    },
    {
      title: "Legal Services",
      description: "Professional legal consultation and documentation support",
      icon: "⚖️"
    },
    {
      title: "Financial Advisory",
      description: "Expert financial planning and investment guidance",
      icon: "💰"
    },
    {
      title: "Property Solutions",
      description: "Real estate consultation and property management services",
      icon: "🏢"
    },
    {
      title: "Digital Services",
      description: "Modern digital solutions for business transformation",
      icon: "💻"
    },
    {
      title: "Home Services",
      description: "Comprehensive home maintenance and improvement solutions",
      icon: "🏠"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Services Offered" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <main className="min-h-screen bg-royal-black text-royal-lightsilver">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-royal-black/95 backdrop-blur-md shadow-lg silver-glow' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-lg flex items-center justify-center silver-glow">
                <span className="text-2xl font-bold text-royal-black">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient font-montserrat">SAHUKAR GROUP</h1>
                <p className="text-xs text-royal-darksilver">Premium Solutions</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-royal-silver transition-colors">Home</a>
              <a href="#about" className="hover:text-royal-silver transition-colors">About</a>
              <a href="#services" className="hover:text-royal-silver transition-colors">Services</a>
              <a href="#contact" className="hover:text-royal-silver transition-colors">Contact</a>
              <a href="#contact" className="bg-gradient-to-r from-royal-silver to-royal-darksilver text-royal-black px-6 py-2 rounded-lg font-semibold hover:silver-glow transition-all">
                Connect Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-royal-silver text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-royal-black/98 backdrop-blur-lg border-t border-royal-darksilver">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-royal-silver transition-colors">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-royal-silver transition-colors">About</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="block hover:text-royal-silver transition-colors">Services</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-royal-silver transition-colors">Contact</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block bg-gradient-to-r from-royal-silver to-royal-darksilver text-royal-black px-6 py-2 rounded-lg font-semibold text-center">
                Connect Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-royal-darksilver/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-royal-silver/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-silver/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Shield Logo */}
          <div className="mb-8 flex justify-center animate-float">
            <div className="relative">
              <FaShieldAlt className="text-8xl text-royal-silver silver-glow-strong" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-royal-black">S</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-montserrat animate-fadeInUp">
            All Problem, One Solution
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-royal-silver font-semibold animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            SAHUKAR GROUP
          </p>
          <p className="text-lg md:text-xl mb-8 text-royal-darksilver max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            From home to business, we solve everything under one trusted name. Your partner in local-to-corporate excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <a href="#contact" className="bg-gradient-to-r from-royal-silver to-royal-lightsilver text-royal-black px-8 py-4 rounded-lg font-bold text-lg hover:silver-glow-strong transition-all transform hover:scale-105">
              Connect With Us
            </a>
            <a href="#services" className="border-2 border-royal-silver text-royal-silver px-8 py-4 rounded-lg font-bold text-lg hover:bg-royal-silver hover:text-royal-black transition-all transform hover:scale-105">
              Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-royal-darksilver">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-montserrat">About Sahukar Group</h2>
            <p className="text-royal-darksilver text-lg max-w-2xl mx-auto">Building trust through excellence and commitment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl silver-glow hover:silver-glow-strong transition-all">
                <FaLightbulb className="text-5xl text-royal-silver mb-4" />
                <h3 className="text-2xl font-bold text-royal-silver mb-3">Our Vision</h3>
                <p className="text-royal-lightsilver">To be the most trusted name in comprehensive business and lifestyle solutions, connecting local expertise with corporate excellence.</p>
              </div>

              <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl silver-glow hover:silver-glow-strong transition-all">
                <FaHandshake className="text-5xl text-royal-silver mb-4" />
                <h3 className="text-2xl font-bold text-royal-silver mb-3">Our Mission</h3>
                <p className="text-royal-lightsilver">To provide integrated solutions that empower businesses and individuals to achieve their goals with confidence and reliability.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gradient mb-4">Meet Our Founder</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center silver-glow flex-shrink-0">
                    <span className="text-3xl font-bold text-royal-black">KS</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-royal-silver mb-2">Krishna Sahukar</h4>
                    <p className="text-royal-lightsilver mb-3">Founder & CEO</p>
                    <p className="text-royal-darksilver">Leading Sahukar Group with a vision to create a comprehensive ecosystem of trusted services, Krishna brings years of expertise in building client-centric solutions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl">
                <FaMapMarkerAlt className="text-3xl text-royal-silver mb-3" />
                <h4 className="text-xl font-bold text-royal-silver mb-2">Based in Indore</h4>
                <p className="text-royal-lightsilver">Madhya Pradesh, India</p>
                <p className="text-royal-darksilver mt-3">Serving local communities with global standards of excellence.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Excellence", desc: "Uncompromising quality in every solution" },
              { icon: "🤝", title: "Trust", desc: "Building lasting relationships" },
              { icon: "⚡", title: "Innovation", desc: "Modern solutions for modern needs" },
              { icon: "🛡️", title: "Reliability", desc: "Always there when you need us" }
            ].map((value, index) => (
              <div key={index} className="bg-silver-gradient border border-royal-darksilver/30 p-6 rounded-xl text-center hover:silver-glow transition-all">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-lg font-bold text-royal-silver mb-2">{value.title}</h4>
                <p className="text-sm text-royal-darksilver">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-transparent via-royal-silver/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-montserrat">Our Services</h2>
            <p className="text-royal-darksilver text-lg max-w-2xl mx-auto">Comprehensive solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl hover:silver-glow-strong transition-all transform hover:scale-105 cursor-pointer">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-royal-silver mb-3">{service.title}</h3>
                <p className="text-royal-lightsilver">{service.description}</p>
                <div className="mt-4 text-royal-darksilver hover:text-royal-silver transition-colors">
                  Learn more →
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-royal-silver mb-6">Need something specific? We've got you covered.</p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-royal-silver to-royal-lightsilver text-royal-black px-8 py-4 rounded-lg font-bold text-lg hover:silver-glow-strong transition-all transform hover:scale-105">
              Request Custom Solution
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-montserrat">Why Choose Sahukar Group?</h2>
            <p className="text-royal-darksilver text-lg">Your trusted partner for complete peace of mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center silver-glow">
                <FaUsers className="text-4xl text-royal-black" />
              </div>
              <h3 className="text-2xl font-bold text-royal-silver mb-3">Client-Centric</h3>
              <p className="text-royal-lightsilver">Your success is our priority. We tailor solutions to your unique needs.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center silver-glow">
                <FaShieldAlt className="text-4xl text-royal-black" />
              </div>
              <h3 className="text-2xl font-bold text-royal-silver mb-3">Trusted & Reliable</h3>
              <p className="text-royal-lightsilver">Years of proven track record in delivering excellence consistently.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center silver-glow">
                <FaHandshake className="text-4xl text-royal-black" />
              </div>
              <h3 className="text-2xl font-bold text-royal-silver mb-3">End-to-End Support</h3>
              <p className="text-royal-lightsilver">From consultation to execution, we're with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-transparent via-royal-silver/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-montserrat">Connect With Us</h2>
            <p className="text-royal-darksilver text-lg">Let's discuss how we can help you succeed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-royal-silver mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-2xl text-royal-silver mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-silver mb-1">Phone</h4>
                      <p className="text-royal-lightsilver">+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaWhatsapp className="text-2xl text-royal-silver mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-silver mb-1">WhatsApp</h4>
                      <p className="text-royal-lightsilver">+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-2xl text-royal-silver mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-silver mb-1">Email</h4>
                      <p className="text-royal-lightsilver">contact@sahukargroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-2xl text-royal-silver mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-silver mb-1">Location</h4>
                      <p className="text-royal-lightsilver">Indore, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-royal-darksilver/30">
                  <h4 className="font-semibold text-royal-silver mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center hover:silver-glow transition-all">
                      <FaLinkedin className="text-xl text-royal-black" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center hover:silver-glow transition-all">
                      <FaTwitter className="text-xl text-royal-black" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-full flex items-center justify-center hover:silver-glow transition-all">
                      <FaInstagram className="text-xl text-royal-black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-silver-gradient border border-royal-darksilver/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-royal-silver mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-royal-silver mb-2">Your Name</label>
                  <input type="text" className="w-full bg-royal-black border border-royal-darksilver rounded-lg px-4 py-3 text-royal-lightsilver focus:outline-none focus:border-royal-silver transition-colors" placeholder="Enter your name" />
                </div>

                <div>
                  <label className="block text-royal-silver mb-2">Email Address</label>
                  <input type="email" className="w-full bg-royal-black border border-royal-darksilver rounded-lg px-4 py-3 text-royal-lightsilver focus:outline-none focus:border-royal-silver transition-colors" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-royal-silver mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-royal-black border border-royal-darksilver rounded-lg px-4 py-3 text-royal-lightsilver focus:outline-none focus:border-royal-silver transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label className="block text-royal-silver mb-2">Service Interested In</label>
                  <select className="w-full bg-royal-black border border-royal-darksilver rounded-lg px-4 py-3 text-royal-lightsilver focus:outline-none focus:border-royal-silver transition-colors">
                    <option>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index}>{service.title}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-royal-silver mb-2">Your Message</label>
                  <textarea rows={4} className="w-full bg-royal-black border border-royal-darksilver rounded-lg px-4 py-3 text-royal-lightsilver focus:outline-none focus:border-royal-silver transition-colors" placeholder="Tell us about your needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-royal-silver to-royal-lightsilver text-royal-black px-8 py-4 rounded-lg font-bold text-lg hover:silver-glow-strong transition-all transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-royal-black border-t border-royal-darksilver/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-silver to-royal-darksilver rounded-lg flex items-center justify-center silver-glow">
                  <span className="text-2xl font-bold text-royal-black">S</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient font-montserrat">SAHUKAR GROUP</h1>
                  <p className="text-xs text-royal-darksilver">Premium Solutions</p>
                </div>
              </div>
              <p className="text-royal-darksilver mb-4">All Problem, One Solution. Your trusted partner from local to corporate excellence.</p>
              <p className="text-royal-darksilver text-sm">Founded by Krishna Sahukar | Based in Indore, MP</p>
            </div>

            <div>
              <h4 className="font-bold text-royal-silver mb-4">Quick Links</h4>
              <ul className="space-y-2 text-royal-darksilver">
                <li><a href="#home" className="hover:text-royal-silver transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-royal-silver transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-royal-silver transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-royal-silver transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-royal-silver mb-4">Services</h4>
              <ul className="space-y-2 text-royal-darksilver text-sm">
                <li>Business Consulting</li>
                <li>Legal Services</li>
                <li>Financial Advisory</li>
                <li>Property Solutions</li>
                <li>Digital Services</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-royal-darksilver/30 pt-8 text-center">
            <p className="text-royal-darksilver">© 2024 Sahukar Group. All rights reserved. | Crafted with excellence in Indore, India</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
