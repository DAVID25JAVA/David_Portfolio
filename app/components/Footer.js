import React from "react";
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ExternalLink,
  MapPin,
  Code,
} from "lucide-react";

function Footer() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 639327099",
      href: "tel:+91639327099",
      color: "green",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Dp2072000@gmail.com",
      href: "mailto:Dp2072000@gmail.com",
      color: "blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "purple",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/david-pal-ba6a72246",
      color: "blue",
      description: "Professional network",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/DAVID25JAVA",
      color: "gray",
      description: "Code repositories",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "sky",
      description: "Latest updates",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "React.js Applications",
    "Next.js Solutions",
    "UI/UX Design",
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      gray: "text-gray-600 bg-gray-100",
      sky: "text-sky-600 bg-sky-100",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-16">
      <div className="max-w-6xl mx-auto md:px-4 px-6">
        <footer className="w-full">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    David.dev
                  </h1>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Crafted with{" "}
                <Heart
                  className="w-4 h-4 text-red-500 inline mx-1"
                  fill="currentColor"
                />{" "}
                by{" "}
                <span className="font-bold text-gray-900">
                  David Pal — Frontend Developer
                </span>{" "}
                passionate about building modern, responsive web applications
                with React.js & Next.js.
              </p>

              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 w-fit">
                <Code className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Available for projects
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`p-2 rounded-lg ${getColorClasses(
                        contact.color
                      )} group-hover:shadow-md transition-all duration-300`}
                    >
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {contact.label}
                      </p>
                      <p className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Quick Links
              </h3>

              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Follow Me
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`p-2 rounded-lg ${getColorClasses(
                        social.color
                      )} group-hover:shadow-md transition-all duration-300`}
                    >
                      <social.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {social.description}
                      </p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200/50"></div>

          {/* Bottom Footer */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600 text-sm">
                  Copyright {new Date().getFullYear()} © David Pal. All Rights
                  Reserved.
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                  <span>in India</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
