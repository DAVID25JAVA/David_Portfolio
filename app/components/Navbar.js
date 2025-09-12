"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Home,
  User,
  Briefcase,
  MessageCircle,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "About", href: "#about", icon: User },
    { name: "Testimonials", href: "#testimonials", icon: MessageCircle },
  ];

  return (
    <>
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 right-0 w-full h-32 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl shadow-lg"
            : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  <h1 className="text-2xl md:text-3xl font-bold text-transparent cursor-pointer">
                    David.dev
                  </h1>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/30">
                <ul className="flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <button
                        onClick={() => handleScroll(item.href.substring(1))}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50/50"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition duration-300 rounded-full"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side Icons & Button */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative p-2 cursor-pointer rounded-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 group"
              >
                <div className="absolute  inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition duration-300"></div>
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-600 relative z-10" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 relative z-10" />
                )}
              </button>

              {/* Connect Button - Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={() => handleScroll("contact")}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative cursor-pointer flex items-center gap-2">
                    <span>Connect</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
                  </div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(true)}
                className="md:hidden p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Menu
          </h2>
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 rounded-full hover:bg-gray-100/50 transition duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition duration-300 p-3 rounded-xl hover:bg-blue-50/50 group"
                >
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Connect Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                handleScroll("contact")
                setMobileMenu(false)
              }}
              className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg">Connect with me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
