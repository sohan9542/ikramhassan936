import React from "react";
import project from "../photos/project.jpeg";
import project1 from "../photos/project1.jpeg";
import project2 from "../photos/project2.jpeg";

const Projects = () => {
  return (
    <div className="mt-32" style={{height:"100vh"}}>
      <div className="container">
        <div className=" w-full flex items-center flex-col justify-center">
          <h1 className="text-font text-2xl font-medium pb-8 w-40  text-center border-b-4 border-sr">
            Projects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-5">
            <a target="_blank" href="https://github.com/IkramH98/Weather-App.git" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </a>
            <a target="_blank" href="https://github.com/IkramH98/back-end-practise.git" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project1}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </a>
            <a target="_blank" href="https://github.com/IkramH98/Todo-List.git" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project2}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </a>
            <a target="_blank" href="https://github.com/SchoolOfCode/w8_d5-hackathon_react-app-with-api-data-room-60.git" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
