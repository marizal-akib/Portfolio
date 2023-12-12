import { useEffect, useState } from "react";
import { FaGitlab, FaReadme } from "react-icons/fa";

import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching skill data:", error);
      });
  }, []);
  console.log(projects);
  return (
    <div className="bg-[#1b1f22]">
      <h2 className="text-[22px] text-center py-5 lg:text-4xl font-semibold text-white ">
        My latest Pro<span className=" text-indigo-500 font-bold">jects</span>{" "}
      </h2>
      <div className="grid grid-cols-1 py-4 justify-center md:grid-cols-2 lg:grid-cols-3 px-2 max-w-6xl gap-3 mx-auto">
        {projects?.map((project, i) => (
          <div key={i}>
            <div className="gap-4   hover:border-r-white hover:border-t-0 hover:border-l-0 hover:border hover:border-b-white  ">
              <img src={project.img} alt="" />
              <div className="bg-indigo-800 py-4 text-white bg-opacity-30 flex items-center">
                <div className="flex flex-1  items-center ">
                  <p className="text-xl ml-3 mr-2">
                    {" "}
                    <FaGitlab />
                  </p>
                  <Link to={`${project.client}`}>
                    <div className="badge mr-1  hover:bg-[GreenYellow] text-white font-medium badge-info gap-2">
                      Client
                    </div>
                  </Link>
                  <Link to={`${project.server}`}>
                    <div className="badge hover:bg-[GreenYellow] text-white font-medium badge-info gap-2">
                      Server
                    </div>
                  </Link>
                </div>
                <Link
                  to={`${project.readme}`}
                  className="text-xl mr-5 hover:text-[GreenYellow]"
                >
                  {" "}
                  <FaReadme />{" "}
                </Link>
              </div>
            </div>
            <p className="text-white text-center">({`${project.name}`})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
