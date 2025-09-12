import React from "react";
import { User, Code, GraduationCap, Award, Briefcase } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Next.js",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & Github",
    "BitBucket",
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4"
    >
      <div className="max-w-6xl md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Removed Profile Image Section */}

          {/* Content Section */}
          <div className="w-full lg:w-full space-y-8">
            {/* Introduction */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Journey
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
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
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Technical Skills
                  </h3>
                </div>

                <div className="flex flex-wrap  gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Master of Computer Applications
                      </h4>
                      <p className="text-gray-600">CGPA: 8.6</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Bachelor of Computer Applications
                      </h4>
                      <p className="text-gray-600">Percentage: 73%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-700 font-medium ">
                  Years Experience
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-700 font-medium">
                  Projects Completed
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  8+
                </div>
                <div className="text-gray-700 font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
