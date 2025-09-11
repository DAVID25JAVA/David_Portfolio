"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Mock toast function for demo - replace with your actual toast import
  // const toast = {
  //   success: (message) => console.log(`Success: ${message}`),
  //   error: (message) => console.log(`Error: ${message}`),
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData?.name || !formData?.email || !formData?.message) {
      toast.error("Please fill your query !");
      return;
    }
    setLoading(true);

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("access_key", "5eba1dee-0424-4db6-b1e6-5bf04480a53e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Your message has been submitted.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      toast.error("Submission failed. Please check your connection.");
      console.error("Fetch Error:", error);
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "Dp2072000@gmail.com",
      description: "Send me an email anytime!",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6393274099",
      description: "Let's have a conversation",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "H Block 144, Alpha 2, Greater Noida 201310  ",
      description: "Available for remote work",
      color: "purple",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Free Consultation", color: "blue" },
    { icon: Clock, text: "Quick Response", color: "green" },
    { icon: Star, text: "Professional Service", color: "purple" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 group-hover:bg-blue-200",
      green: "bg-green-100 text-green-700 group-hover:bg-green-200",
      purple: "bg-purple-100 text-purple-700 group-hover:bg-purple-200",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-6xl md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-blue-600 font-semibold mb-2">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="md:max-w-2xl w-full mx-auto text-center text-lg text-gray-700 leading-relaxed">
            I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below or reach out through any of the
            contact methods.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ready to start your next project or just want to chat? I'm
                always excited to connect with fellow developers and potential
                collaborators.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-xl transition-colors duration-300 ${getColorClasses(
                        info.color
                      )}`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-gray-700 font-semibold"
                    >
                      <User className="w-4 h-4 text-blue-600" />
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full h-12 text-black px-4 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-gray-700 font-semibold"
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full text-black h-12 px-4 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-gray-700 font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-3 text-black bg-white/50 border border-gray-200 rounded-xl resize-none outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 ${
                      loading
                        ? "cursor-not-allowed opacity-80"
                        : "cursor-pointer"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">
                  Usually responds within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm here to
              help bring your vision to life with modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    getColorClasses(benefit.color).split("  ")[0]
                  } transition-transform hover:scale-105 duration-200`}
                >
                  <benefit.icon className="w-4 h-4" />
                  <span className="font-medium">✓ {benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
