import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ProfilePic from "../assets/images/profile-pic.png";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -40% 0px" });

  // Variants for the image animation
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Variants for the details animation (after image animation)
  const detailsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }, // Delay ensures it starts after the image
  };

  return (
    <section id="about" ref={ref} className="">
      <motion.div
        className="min-h-screen grid place-items-center place-content-center gap-6 grid-cols-1 md:grid-cols-2 p-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {/* Heading */}
        <motion.div
          className="col-span-1 md:col-span-2 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-secondary font-pally">
            About Me <span className="inline-block">🧑‍💻</span>
          </h2>
        </motion.div>

        {/* Left Section - Profile Image */}
        <motion.div
          className=""
          variants={imageVariants} // Apply image animation variants
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
          className="mt-6"
          variants={detailsVariants} // Apply details animation variants
        >
          {/* About Details */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl text-primary font-roboto mb-2">
              📄 About This Project
            </h4>
            <p className="text-justify text-secondary ">
            Hi! I’m Saifur Rahman Shihab, a Frontend Developer who loves solving problems with code and creating designs that people love to use. I’m fluent in HTML, CSS, JavaScript, and frameworks like Laravel and Bootstrap. Outside of work, I’m always learning and having fun experimenting with new ideas. Let’s do something awesome together!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
