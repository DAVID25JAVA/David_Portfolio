"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Database,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Monitor,
  Layers,
    Rocket,
  CreditCard,
  Globe as GlobeIcon,
} from "lucide-react";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and interactive user interfaces with React.js and Next.js",
      icon: Code,
      color: "from-blue-600 via-purple-600 to-indigo-600",
      features: [
        "React.js & Next.js Development",
        "Responsive Web Design",
        "Component Architecture",
        "State Management",
      ],
      technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "MUI"],
    //   price: "Starting at $999",
    },
    {
      id: 2,
      title: "Mobile-First Design",
      description:
        "Creating pixel-perfect designs that work seamlessly across all devices and screen sizes",
      icon: Smartphone,
      color: "from-blue-600 via-purple-600 to-indigo-600",
      features: [
        "Mobile-First Approach",
        "Cross-Device Compatibility",
        "Touch-Friendly Interfaces",
        "Performance Optimization",
      ],
      technologies: ["CSS3", "Flexbox", "Grid", "Media Queries"],
    //   price: "Starting at $599",
    },
    {
      id: 5,
      title: "Web Applications",
      description:
        "Building full-featured web applications with modern frameworks and best practices",
      icon: Globe,
      color: "from-blue-600 via-purple-600 to-indigo-600",
      features: [
        "Single Page Applications",
        "Progressive Web Apps",
        "Real-time Features",
        "API Integration",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    //   price: "Starting at $1499",
    },
    {
      id: 7,
      title: "Payment Gateway Integration",
      description:
        "Integrating secure and reliable payment systems to ensure seamless transactions and user trust",
      icon: CreditCard, // Assuming you have an appropriate icon
      color: "from-blue-600 via-purple-600 to-indigo-600",
      features: [
        "Multiple Payment Options",
        "Secure Transaction Processing",
        "Subscription Billing",
        "Fraud Detection",
      ],
      technologies: ["Stripe", "PayPal", "Razorpay"],
    //   price: "Starting at $699",
    },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 font-semibold text-lg">
              My Services
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
            What I Can Do For{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              You
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development services to bring your
            digital vision to life with cutting-edge technology and modern
            design principles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeService === index ? "ring-2 ring-blue-600" : ""
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onClick={() => setActiveService(index)}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
                ></div>
                <div
                  className={`relative p-4 bg-gradient-to-r ${service.color} rounded-xl shadow-lg transform group-hover:scale-110 transition duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt- border-t border-gray-200"></div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Price */}
                {/* <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition duration-300" />
                  </div>
                </div> */}
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Featured Service Detail */}
        {activeService !== null && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${services[activeService].color} rounded-xl`}
                  >
                    {/* <services[activeService].icon className="w-8 h-8 text-white" /> */}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleScroll("contact")}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                  </div>
                </button>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Monitor className="w-6 h-6 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-800">
                      Why Choose This Service?
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-indigo-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Modern Technology Stack
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Using the latest tools and frameworks for optimal
                          performance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Rocket className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Fast Delivery
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Quick turnaround time without compromising on quality
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Premium Quality
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Attention to detail and pixel-perfect implementations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {services[activeService].price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how I can help bring your vision to life with modern
              web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleScroll("contact")}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </div>
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="group px-8 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-300 text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl hover:border-blue-400 hover:bg-white/90 transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <span>View My Work</span>
                  <GlobeIcon className="w-5 h-5 group-hover:rotate-12 transition duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Services;
