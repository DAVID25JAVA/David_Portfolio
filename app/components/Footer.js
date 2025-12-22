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
import { useTheme } from "../ThemeContext/theme";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getColorClasses = (color) => {
    if (isDark) {
      return {
        blue: "bg-blue-500/20 text-blue-400",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
        gray: "bg-slate-600/30 text-slate-300",
        sky: "bg-sky-500/20 text-sky-400",
      }[color];
    }

    return {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      gray: "bg-gray-100 text-gray-600",
      sky: "bg-sky-100 text-sky-600",
    }[color];
  };

  return (
    <footer
      className={`pt-16 transition-colors duration-500 ${
        isDark
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300"
          : "bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Brand */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              David.dev
            </h1>

            <p className={isDark ? "text-slate-300" : "text-gray-700"}>
              Crafted with <Heart className="inline w-4 h-4 text-red-500" /> by
              <span className="font-semibold"> David Pal</span>
            </p>

            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full w-fit ${
                isDark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border"
              }`}
            >
              <Code className="w-4 h-4 text-blue-500" />
              <span>Available for projects</span>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? "text-slate-100" : "text-gray-900"
            }`}>
              Get In Touch
            </h3>

            {[
              { icon: Phone, label: "Phone", value: "+91 639327099", color: "green" },
              { icon: Mail, label: "Email", value: "Dp2072000@gmail.com", color: "blue" },
              { icon: MapPin, label: "Location", value: "India", color: "purple" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClasses(item.color)}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm opacity-70">{item.label}</p>
                  <p className={`font-medium ${
                    isDark ? "text-slate-200" : "text-gray-900"
                  }`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? "text-slate-100" : "text-gray-900"
            }`}>
              Quick Links
            </h3>

            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`block mb-3 font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Follow Me */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? "text-slate-100" : "text-gray-900"
            }`}>
              Follow Me
            </h3>

            {[
              { icon: Linkedin, name: "LinkedIn", color: "blue" },
              { icon: Github, name: "GitHub", color: "gray" },
              { icon: Twitter, name: "Twitter", color: "sky" },
            ].map((social, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClasses(social.color)}`}>
                  <social.icon className="w-4 h-4" />
                </div>
                <span
                  className={`font-medium ${
                    isDark ? "text-slate-200" : "text-gray-900"
                  }`}
                >
                  {social.name}
                </span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`border-t py-6 flex justify-between text-sm ${
            isDark ? "border-slate-700 text-slate-400" : "border-gray-200 text-gray-600"
          }`}
        >
          <p>© {new Date().getFullYear()} David Pal</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
