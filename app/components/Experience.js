'use client'
import { useTheme } from "../ThemeContext/theme";
import { Briefcase, Calendar, MapPin, CheckCircle, Clock } from "lucide-react";
import { experiences } from "@/assets/assets";

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      id="experience"
      className={`min-h-screen py-16 px-4 transition-colors duration-500 ${
        isDark
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-6xl md:px-6 mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              isDark ? "text-slate-50" : "text-gray-900"
            }`}
          >
            Work{" "}
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>
              Experience
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? "bg-linear-to-r from-blue-400 to-indigo-400"
                : "bg-linear-to-r from-blue-600 to-indigo-600"
            }`}
          ></div>
          <p
            className={`mt-6 text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            A journey of building real-world solutions through hands-on industry
            experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full top-0 rounded-full ${
              isDark ? "bg-slate-700" : "bg-blue-100"
            }`}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div
                      className={`backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                        isDark
                          ? "bg-slate-800/60 border border-slate-700/50"
                          : "bg-white/80 border border-white/30"
                      }`}
                    >

                      {/* Top row: Badge + Duration pill */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span
                          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-slate-700/60 text-slate-300"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Role */}
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          isDark ? "text-slate-50" : "text-gray-900"
                        }`}
                      >
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase
                          className={`w-4 h-4 shrink-0 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-base font-semibold ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {exp.company}
                        </span>
                      </div>

                      {/* Date range + Location row */}
                      <div
                        className={`flex flex-wrap items-center gap-3 mb-6 p-3 rounded-xl ${
                          isDark ? "bg-slate-700/40" : "bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar
                            className={`w-4 h-4 shrink-0 ${
                              isDark ? "text-indigo-400" : "text-indigo-500"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              isDark ? "text-slate-200" : "text-slate-700"
                            }`}
                          >
                            {exp.dateRange}
                          </span>
                        </div>

                        {/* Separator dot */}
                        <span
                          className={`hidden sm:block w-1 h-1 rounded-full ${
                            isDark ? "bg-slate-500" : "bg-slate-300"
                          }`}
                        ></span>

                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 shrink-0 ${
                              isDark ? "text-slate-400" : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isDark ? "text-slate-400" : "text-gray-500"
                            }`}
                          >
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className={`w-full h-px mb-5 ${
                          isDark ? "bg-slate-700" : "bg-gray-100"
                        }`}
                      ></div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                isDark ? "text-green-400" : "text-green-500"
                              }`}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                isDark ? "text-slate-300" : "text-gray-600"
                              }`}
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center shadow-lg z-10 bg-linear-to-br from-blue-500 to-indigo-600">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "1+", label: "Years Experience", color: isDark ? "text-blue-400" : "text-blue-600" },
            { value: "2", label: "Companies Worked", color: isDark ? "text-indigo-400" : "text-indigo-600" },
            { value: "MERN", label: "Core Stack", color: isDark ? "text-green-400" : "text-green-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center backdrop-blur-md rounded-xl p-6 shadow-lg transition-colors duration-500 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/50 border border-white/20"
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div
                className={`font-medium ${
                  isDark ? "text-slate-300" : "text-gray-700"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;