import React from "react";
import "./About.css";
import HeadShot from "../../assets/Images/headShot.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";

const animationVariants = {
  initial: { opacity: 0, y: "100px" },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.25,
      duration: 0.15,
      type: "spring",
    },
  }),
};

function About() {
  const techItems = ["TypeScript", "NextJS", "React", "NodeJS", "SQL", "NoSQL"];
  return (
    <section className="about-section">
      <motion.h2
        initial={{ opacity: 0, x: "-200px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        id="about"
        className="about-heading"
      >
        About Me
      </motion.h2>
      <div className="about-container">
        <div className="about-description">
          <motion.p
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="about-writeup"
          >
            Hello! My name is John Padworski, a military veteran turned software
            engineer with a passion for code. I'm driven by an insatiable
            appetite for solving intricate problems and crafting innovative
            solutions.
            <br />
            <br />
            Over the years, I've had the opportunity to work in diverse roles,
            from being a Frontend Web Developer at a non-profit "Know a Vet?" to
            a FinTech Startup and even roles in aviation. Each of these
            experiences has honed my unique problem-solving approach, which I
            bring to every project I undertake.
            <br />
            <br />
            Here are a few technologies and areas I've been deeply involved with
            recently:
          </motion.p>
          <ul className="tech-list">
            {techItems.map((item, index) => (
              <motion.li
                variants={animationVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className="tech-list-item"
                key={index}
              >
                <KeyboardArrowRightIcon sx={{ color: "rgb(255, 178, 56)" }} />{" "}
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="photo">
          <div className="photo-frame"></div>
          <img src={HeadShot} alt="profile" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
