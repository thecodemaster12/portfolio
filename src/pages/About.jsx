import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfilePic from "../assets/images/profile-pic.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -40% 0px" }); // Trigger animation at 25% visibility

  // Variants for staggered animation of list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section id="about" ref={ref} className="bg-gray-100">
      <motion.div
        className="border border-red-700 min-h-screen grid place-items-center place-content-center gap-6 grid-cols-1 md:grid-cols-2 px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.div
          className="col-span-2 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl text-secondary font-pally">
            About Me <span className="inline-block">🧑‍💻</span>
          </h2>
        </motion.div>

        {/* Left Section - Profile Image */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img
            className="rounded-md shadow-lg"
            width={400}
            height={400}
            src={ProfilePic}
            alt="Profile"
          />
        </motion.div>

        {/* Right Section - Details */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Introduction */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl text-primary font-roboto mb-2">
              👋 Hi, I’m Saifur Rahman Shihab!
            </h4>
            <p className="text-justify text-secondary pl-12">
              A motivated Junior Web Developer with hands-on experience in PHP,
              Laravel, and modern frontend technologies. I specialize in
              crafting responsive, user-friendly web applications and have a
              proven track record of delivering scalable and efficient
              full-stack solutions.
            </p>
          </motion.div>

          {/* What Drives Me */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <h4 className="text-2xl text-primary font-roboto mb-2">
              ✨ What Drives Me
            </h4>
            <p className="text-justify text-secondary pl-12">
              I’m passionate about creating innovative digital experiences and
              continuously learning new technologies to stay ahead in the
              ever-evolving tech landscape.
            </p>
          </motion.div>

          {/* What I Bring to the Table */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl text-primary font-roboto mb-2">
              🌟 What I Bring to the Table
            </h4>
            <ul className="text-secondary">
              {[
                "Expertise in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS for building pixel-perfect designs.",
                "Backend development skills with PHP and Laravel, ensuring robust and scalable applications.",
                "Proficiency in tools like Git and Postman for efficient development workflows.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="pl-12 mb-2"
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
