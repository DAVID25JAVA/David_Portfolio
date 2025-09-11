import React from "react";
import { ExternalLink, Code2, Folder } from "lucide-react";

// Mock data for demonstration - replace with your actual workData
const mockWorkData = [
  {
    title: "E-commerce Platform",
    description: "Modern shopping experience with React & Node.js",
    bgImage: "/api/placeholder/400/300",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    bgImage: "/api/placeholder/400/300",
    tags: ["Next.js", "Express", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio with animations",
    bgImage: "/api/placeholder/400/300",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social platforms",
    bgImage: "/api/placeholder/400/300",
    tags: ["Vue.js", "Chart.js", "Firebase"],
  },
  {
    title: "Blog Platform",
    description: "Content management system for bloggers",
    bgImage: "/api/placeholder/400/300",
    tags: ["React", "GraphQL", "Strapi"],
  },

  {
    title: "Fitness Tracker",
    description: "Health and fitness monitoring app",
    bgImage: "/api/placeholder/400/300",
    tags: ["React Native", "Redux", "MongoDB"],
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16  ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="md:max-w-2xl w-full mx-auto text-center text-lg text-gray-700 leading-relaxed">
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in front-end development and modern
            web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {mockWorkData?.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project?.bgImage}
                  alt={`${project?.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project?.title}
                  </h3>
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {project?.description}
                </p>

                {/* Technology Tags */}
                {project?.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Number Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <Folder className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>

          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <Code2 className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-700 font-medium">Technologies Used</div>
          </div>

          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <ExternalLink className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
        </div> */}

        {/* Show More Button */}
        <div className="flex items-center justify-center">
          <button className="group flex items-center gap-3   backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300  bg-gradient-to-r  from-blue-600  to-indigo-600 hover:text-white">
            <span className="font-semibold">Show More Projects</span>
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ExternalLink className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
