"use client"
import React from "react";
import { MoveRight, Download, Sparkles, Code, Coffee } from "lucide-react";

function Header() {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-14 from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center mx-auto gap-8">
          
          {/* Profile Image with Animation */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white transform group-hover:scale-105 transition duration-500">
                <img
                  className="w-full h-full object-cover"
                  src="/api/placeholder/160/160"
                  alt="David Pal Profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Greeting Section */}
          <div className="flex justify-center items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
            <p className="text-lg md:text-xl font-medium text-gray-800">Hi! I'm David Pal</p>
            <div className="animate-bounce">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-horizontal text-gray-900 leading-tight">
              Frontend Web Developer
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl md:text-4xl font-bold">
              <span className="text-gray-500">&</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                React Developer
              </span>
              <Code className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <span className="font-bold text-blue-600">
                Frontend Developer with 1 year of experience
              </span>{" "}
              in building fast, beautiful, and responsive websites using{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                React.js | Next.js | JavaScript | Tailwind CSS
              </span>
              . I specialize in turning ideas into clean, interactive user experiences
              with modern web technologies.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            {/* Connect Button */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center gap-3">
                <span>Connect with me</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
              </div>
            </button>

            {/* Resume Button */}
            <button className="group px-8 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-300 text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl hover:border-blue-400 hover:bg-white/90 transform hover:scale-105 transition duration-300">
              <div className="flex items-center gap-3">
                <span>My Resume</span>
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </div>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center mb-5 gap-3 bg-green-50/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-green-200/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500  rounded-full animate-pulse"></div>
              <span className="text-green-800 text-sm font-medium">Available for new opportunities</span>
            </div>
            <Coffee className="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Header;