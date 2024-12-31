import React from "react";
import MuiCard from "../components/mui/MuiCard";
import Marquee from "react-fast-marquee";
import skills from "../assets/js/skills";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="min-h-screen grid grid-cols-2 gap-4 place-content-center">
          <div className="mb-8 text-center col-span-2">
            <h2 className="text-6xl text-secondary font-pally">
              My Skills <div className="inline-block p-0">🧑‍💻</div>
            </h2>
          </div>

          <div className="col-span-2 py-24">
            <Marquee gradient={true} speed={100} pauseOnHover={true}>
              <div className="flex gap-6 p-10">
                {skills.map((skill) => (
                  <div
                    className="p-6 border-2 border-[gray] rounded-lg group hover:shadow-xl hover:shadow-[#F5F5F5] transition duration-150 ease-in-out hover:scale-105"
                    key={skill.id}
                  >
                    <div className="w-40 h-w-40 border-2 border-[#96D4D4]  p-4 rounded-lg mb-6">
                      <img className="" src={skill.icon} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-2xl text-secondary group-hover:text-primary group-hover:text-3xl transition-all duration-300 ease-in-out font-pally text-center">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
