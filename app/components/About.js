import React from "react";
import { User, Code, GraduationCap, Award, Briefcase } from "lucide-react";
import { useTheme } from "../ThemeContext/theme";

const AboutSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skills = [
    "Next.js",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & Github",
    "BitBucket",
    "Postman"
  ];

  return (
    <div
      id="about"
      className={`min-h-screen py-16 px-4 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-6xl md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
            isDark ? "text-slate-50" : "text-gray-900"
          }`}>
            About <span className={isDark ? "text-blue-400" : "text-blue-600"}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDark
              ? "bg-gradient-to-r from-blue-400 to-indigo-400"
              : "bg-gradient-to-r from-blue-600 to-indigo-600"
          }`}></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-full space-y-8">
            {/* Introduction */}
            <div className={`backdrop-blur-md rounded-2xl p-8 shadow-xl transition-colors duration-500 ${
              isDark
                ? "bg-slate-800/60 border border-slate-700/50"
                : "bg-white/70 border border-white/20"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <h3 className={`text-2xl font-bold ${isDark ? "text-slate-50" : "text-gray-900"}`}>
                  Professional Journey
                </h3>
              </div>
              <p className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-gray-700"}`}>
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth through
                innovative web solutions and cutting-edge technologies.
              </p>
            </div>

            {/* Skills and Education Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills Card */}
              <div className={`backdrop-blur-md rounded-2xl p-8 shadow-xl hover:transform hover:scale-105 transition duration-300 ${
                isDark
                  ? "bg-slate-800/60 border border-slate-700/50"
                  : "bg-white/70 border border-white/20"
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${isDark ? "bg-blue-500/20" : "bg-blue-100"}`}>
                    <Code className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-slate-50" : "text-gray-900"}`}>
                    Technical Skills
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className={`backdrop-blur-md rounded-2xl p-8 shadow-xl hover:transform hover:scale-105 transition duration-300 ${
                isDark
                  ? "bg-slate-800/60 border border-slate-700/50"
                  : "bg-white/70 border border-white/20"
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${isDark ? "bg-green-500/20" : "bg-green-100"}`}>
                    <GraduationCap className={`w-6 h-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-slate-50" : "text-gray-900"}`}>
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${
                      isDark ? "bg-green-400" : "bg-green-500"
                    }`}></div>
                    <div>
                      <h4 className={`font-bold ${isDark ? "text-slate-100" : "text-gray-900"}`}>
                        Master of Computer Applications
                      </h4>
                      <p className={isDark ? "text-slate-400" : "text-gray-600"}>
                        Babu Banarasi Das University, Lucknow | Passout: 2024
                      </p>
                      <p className={isDark ? "text-slate-400" : "text-gray-600"}>CGPA: 8.6</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${
                      isDark ? "bg-blue-400" : "bg-blue-500"
                    }`}></div>
                    <div>
                      <h4 className={`font-bold ${isDark ? "text-slate-100" : "text-gray-900"}`}>
                        Bachelor of Computer Applications
                      </h4>
                      <p className={isDark ? "text-slate-400" : "text-gray-600"}>
                        Rajendra Singh Rajju Bhaiya University, Prayagraj | Passout: 2022
                      </p>
                      <p className={isDark ? "text-slate-400" : "text-gray-600"}>Percentage: 73%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
              <div className={`text-center backdrop-blur-md rounded-xl p-6 shadow-lg transition-colors duration-500 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/50 border border-white/20"
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                  1+
                </div>
                <div className={`font-medium ${isDark ? "text-slate-300" : "text-gray-700"}`}>
                  Years Experience
                </div>
              </div>

              <div className={`text-center backdrop-blur-md rounded-xl p-6 shadow-lg transition-colors duration-500 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/50 border border-white/20"
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? "text-green-400" : "text-green-600"}`}>
                  5+
                </div>
                <div className={`font-medium ${isDark ? "text-slate-300" : "text-gray-700"}`}>
                  Projects Completed
                </div>
              </div>

              <div className={`text-center backdrop-blur-md rounded-xl p-6 shadow-lg transition-colors duration-500 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/50 border border-white/20"
              }`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                  8+
                </div>
                <div className={`font-medium ${isDark ? "text-slate-300" : "text-gray-700"}`}>
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;