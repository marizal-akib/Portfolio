import { useEffect, useState } from "react";
import { TbVersions } from "react-icons/tb";

const Skills = () => {
  const [skills, setSkills] = useState();

  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => {
        console.error("Error fetching skill data:", error);
      });
  }, []);

  console.log(skills?.length);
  return (
    <div className="bg-[#1b1f22]">
      <h2 className="text-[22px] text-center py-5 lg:text-4xl font-semibold text-white ">
        <span className=" text-indigo-500 font-bold ml-3 px-1">Tech</span>{" "}
        Arsenal In My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 max-w-6xl gap-3 mx-auto">
        {skills?.map((skill, i) => (
          <div
            style={{ backgroundImage: `url(${skill.img})` ,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
          }}
            key={i}
            className="card bg-indigo-600  bg-opacity-20 border-indigo-200 border-[1px] hover:border-b-2 hover:border-r-2 h-[260px] rounded-l-none  rounded-t-none shadow-xl"
          >
            <div className="card-body ">
              <h2 className="card-title text-xl font-bold  text-indigo-500">{skill.category}</h2>


              <ul>
                {skill.tech.map(((techs,i) => <li className="text-white font-semibold" key={i}>{techs}</li> ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
