"use client";
import React from "react";
import { MoveRight, Download, Sparkles, Code, Coffee } from "lucide-react";
import { assets } from "@/assets/assets";
import LazyLoad from "react-lazyload";
import { useTheme } from "../ThemeContext/theme";

function Header() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className={`min-h-screen pt-14 flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute sm:pt-0 bottom-20 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute sm:pt-0 bottom-20 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center mx-auto gap-8">
          {/* Profile Image with Animation */}
          <div className="relative group">
            <div className={`absolute -inset-4 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse ${
              isDark
                ? "bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-violet-500/40"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
            }`}></div>
            <div className="relative">
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500 ${
                isDark ? "ring-4 ring-slate-700/50" : "ring-4 ring-white"
              }`}>
                <LazyLoad>
                  <img
                    className="w-full h-full object-cover"
                    src={assets?.myImg?.src}
                    alt="David Pal Profile"
                  />
                </LazyLoad>
              </div>
              <div className={`absolute -bottom-2 -right-2 rounded-full p-2 shadow-lg ${
                isDark ? "bg-slate-800 border border-slate-700" : "bg-white"
              }`}>
                <Sparkles className={`w-5 h-5 animate-pulse ${
                  isDark ? "text-blue-400" : "text-yellow-500"
                }`} />
              </div>
            </div>
          </div>

          {/* Greeting Section */}
          <div className={`flex justify-center items-center gap-3 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg transition-colors duration-500 ${
            isDark
              ? "bg-slate-800/60 border border-slate-700/50"
              : "bg-white/70 border border-white/20"
          }`}>
            <p className={`text-lg md:text-xl font-medium ${
              isDark ? "text-slate-100" : "text-gray-800"
            }`}>
              Hi! I'm David Pal
            </p>
            <div className="animate-bounce">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-2">
            <h1 className={`text-4xl md:text-6xl font-bold animate-slide-horizontal leading-tight transition-colors duration-500 ${
              isDark ? "text-slate-50" : "text-gray-900"
            }`}>
              Frontend Web Developer
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl md:text-4xl font-bold">
              <span className={isDark ? "text-slate-500" : "text-gray-500"}>&</span>
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-blue-400 to-indigo-400"
                  : "from-blue-600 to-indigo-600"
              }`}>
                React Developer
              </span>
              <Code className={`w-8 h-8 animate-pulse ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`} />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl text-center">
            <p className={`text-lg md:text-xl leading-relaxed backdrop-blur-md rounded-2xl p-6 shadow-lg transition-colors duration-500 ${
              isDark
                ? "text-slate-300 bg-slate-800/40 border border-slate-700/50"
                : "text-gray-700 bg-white/50 border border-white/20"
            }`}>
              <span className={`font-bold ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}>
                Frontend Developer with 1 year of experience
              </span>{" "}
              in building fast, beautiful, and responsive websites using{" "}
              <span className={`font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-blue-400 to-indigo-400"
                  : "from-blue-600 to-indigo-600"
              }`}>
                React.js | Next.js | JavaScript | Tailwind CSS
              </span>
              . I specialize in turning ideas into clean, interactive user
              experiences with modern web technologies.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/david-pal-ba6a72246/",
                bgFrom: "from-blue-700",
                bgTo: "to-blue-500",
                darkBgFrom: "from-blue-600",
                darkBgTo: "to-blue-500",
              },
              {
                name: "GitHub",
                url: "https://github.com/DAVID25JAVA",
                bgFrom: "from-gray-800",
                bgTo: "to-gray-600",
                darkBgFrom: "from-slate-700",
                darkBgTo: "to-slate-600",
              },
              {
                name: "Twitter",
                url: "https://x.com/home",
                bgFrom: "from-blue-400",
                bgTo: "to-blue-300",
                darkBgFrom: "from-sky-600",
                darkBgTo: "to-blue-600",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 bg-gradient-to-r text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 animate-fade-in inline-block ${
                  isDark
                    ? `${social.darkBgFrom} ${social.darkBgTo}`
                    : `${social.bgFrom} ${social.bgTo}`
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            {/* Connect Button */}
            <button
              onClick={() => handleScroll("contact")}
              className={`group relative px-8 py-4 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600"
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-blue-700 to-indigo-700"
                  : "bg-gradient-to-r from-blue-700 to-indigo-700"
              }`}></div>
              <div className="relative flex items-center gap-3">
                <span>Connect with me</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
              </div>
            </button>

            {/* Resume Button */}
            <button className={`group px-8 py-4 backdrop-blur-md border-2 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ${
              isDark
                ? "bg-slate-800/40 border-slate-600 text-slate-100 hover:border-blue-500 hover:bg-slate-800/60"
                : "bg-white/70 border-gray-300 text-gray-800 hover:border-blue-400 hover:bg-white/90"
            }`}>
              <div className="flex items-center gap-3">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1YKYE_sKr2RiyMv-Nz0iU7Fqsdw8rbJlo/view?usp=sharing"
                >
                  <span>My Resume</span>
                </a>
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </div>
            </button>
          </div>

          {/* Status Indicator */}
          <div className={`flex items-center mb-5 gap-3 backdrop-blur-md rounded-full px-4 py-2 shadow-lg transition-colors duration-500 ${
            isDark
              ? "bg-green-500/10 border border-green-500/20"
              : "bg-green-50/80 border border-green-200/50"
          }`}>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                isDark ? "bg-green-400" : "bg-green-500"
              }`}></div>
              <span className={`text-sm font-medium ${
                isDark ? "text-green-400" : "text-green-800"
              }`}>
                Available for new opportunities
              </span>
            </div>
            <Coffee className={`w-4 h-4 ${
              isDark ? "text-green-400" : "text-green-600"
            }`} />
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