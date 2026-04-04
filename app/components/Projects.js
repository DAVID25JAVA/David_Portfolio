import React, { useEffect, useState } from "react";
import { ExternalLink, Code2, Folder, Github } from "lucide-react";
import { assets } from "@/assets/assets";
import { useTheme } from "../ThemeContext/theme";
import { API } from "../API/API";
import Loader from "./UI/Loader";

function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    handleProject();
  }, []);

  const handleProject = async () => {
    try {
      const res = await API({
        method: "GET",
        url: "/project/get",
      });
      if (res?.status == 200) {
        setProjects(res?.data?.project);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  // console.log(projects);

  return (
    <div
      id="projects"
      className={`min-h-screen py-16 transition-colors duration-500 ${
        isDark
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              isDark ? "text-slate-50" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>
              Projects
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full mb-6 ${
              isDark
                ? "bg-linear-to-r from-blue-400 to-indigo-400"
                : "bg-linear-to-r from-blue-600 to-indigo-600"
            }`}
          ></div>

          <p
            className={`md:max-w-2xl w-full mx-auto text-center text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-gray-700"
            }`}
          >
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in front-end development and modern
            web technologies.
          </p>
        </div>

        {/* Projects Grid */}

        {projects.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
              {projects?.map((project, index) => (
                <div
                  key={index}
                  className={`group relative backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                    isDark
                      ? "bg-slate-800/60 border border-slate-700/50"
                      : "bg-white/70 border border-white/20"
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <a href={project.liveLink} target="_blank">
                      <img
                        src={project?.img[0]}
                        alt={`${project?.title} preview`}
                        className="w-full h-full text-gray-400 cursor-pointer object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className={`backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 ${
                            isDark ? "bg-slate-800/90" : "bg-white/90"
                          }`}
                        >
                          <ExternalLink
                            className={
                              isDark
                                ? "w-6 h-6 text-blue-400"
                                : "w-6 h-6 text-blue-600"
                            }
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isDark
                            ? "text-slate-100 group-hover:text-blue-400"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {project?.name}
                      </h3>
                      <div
                        className={`shrink-0 p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? "bg-blue-500/20 group-hover:bg-blue-500/30"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        }`}
                      >
                        <a href={project?.githubLink} target="_blank">
                          <Github
                            className={`w-4 h-4 ${
                              isDark ? "text-blue-400" : "text-blue-600"
                            }`}
                          />
                        </a>
                      </div>
                    </div>

                    <div className="text-base text-gray-400">
                      {project?.title}
                    </div>

                    {/* <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-slate-400" : "text-gray-700"
                  }`}
                >
                  {project?.description}
                </p> */}

                    {/* Technology Tags */}
                    {project?.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {JSON.parse(project.techStack)
                          .flat()
                          .map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>

                  {/* Project Number Badge */}
                  <div
                    className={`absolute top-4 left-4 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-lg ${
                      isDark ? "bg-slate-800/90" : "bg-white/90"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="flex items-center justify-center">
              <button className="group cursor-pointer flex items-center gap-3 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-linear-to-r from-blue-600 to-indigo-600 text-white border border-white/10">
                <span className="font-semibold">Show More Projects</span>
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ExternalLink className="w-3 h-3" />
                </div>
              </button>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Projects;
