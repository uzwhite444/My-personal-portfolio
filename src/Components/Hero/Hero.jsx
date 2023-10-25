import React, { useRef } from "react";
import "./Hero.scss";
import person from "../../img/Person.png";
import bgimg1 from "../../img/bgimg1.svg";
import dots from "../../img/Dots.svg";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import person2 from "../../img/Person2.png";
import discord from "../../img/Discord.svg";
import email from "../../img/Email.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Hero() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom =>({
      x: 0,
      opacity: 1,
      transition: { delay:custom * 0.5},
    })
  };
  const ImgAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom =>({
      y: 0,
      opacity: 1,
      transition: { delay:custom * 0.5},
    })
  };

  return (
    <div className="Hero">
      <div className="container">
        <div className="top__part">
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount:0.2}} className="First">
            <motion.h1 custom={1} variants={textAnimation} className="about__text1">
              <span className="name__text1" style={{ color: "white" }}>
                Muhammadabdulloh is a
              </span>
              <span className="name__text2" style={{ color: "#C778DD" }}>
                web designer
              </span>
              <span className="name__text3" style={{ color: "white" }}>
                and
              </span>
              <span className="name__text4" style={{ color: "#C778DD" }}>
                front-end developer
              </span>
            </motion.h1>
            <motion.span custom={2} variants={textAnimation} className="about__text2">
              He crafts responsive websites where technologies meet creativity
            </motion.span>
            <motion.button custom={3} variants={textAnimation} className="contact__btn">
              <a href="#contact">Contact me !!</a>
            </motion.button>
          </motion.div>
          <motion.img custom={1} variants={ImgAnimation}  className="bgimg1" src={bgimg1} alt="" />
          <img className="dots__1" src={dots} alt="" />
          <motion.div
          initial="hidden" 
          whileInView="visible"
          viewport={{amount:0.2}}
          className="righ__img">
            <motion.img custom={1} variants={ImgAnimation} className="person__img" src={person} alt="" />
            <motion.span custom={2} variants={ImgAnimation} className="person__text1">
              <div className="box__purple"></div>
              <span className="person__text2" style={{ color: "white" }}>
                <span className="person__text3" style={{ color: "#abb2bf" }}>
                  Currently working on
                </span>
                Portfolio
              </span>
            </motion.span>
          </motion.div>
        </div>
        <div id="projects" className="projects">
          <motion.div initial="hidden" whileInView="visible"   className="title__con">
            <motion.h2 custom={1} variants={textAnimation} className="projects__title">
              <span style={{ color: "#C778DD" }}>#</span>Projects
            </motion.h2>
            <motion.div initial='hidden' whileInView="visible" custom={2} variants={textAnimation} className="line"></motion.div>
            <Link className="projects__link">View all</Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" className="cards">
            <div className="card1">
              <img src={project1} alt="" />
              <span className="card__1__text1">
                <motion.h4 variants={textAnimation}>
                  HTML SCSS REACT JAVA SCRIPT
                </motion.h4>
              </span>
              <motion.h3 custom={1} variants={textAnimation}>ChertNodes</motion.h3>
              <motion.p custom={2} variants={textAnimation}>
                Minecraft servers hosting
              </motion.p>
            </div>
            <motion.div initial="hidden" whileInView="visible"  className="card2">
              <motion.img custom={1} variants={ImgAnimation} src={project2} alt="" />
              <motion.span custom={2} variants={textAnimation} className="card__1__text2">
                <motion.h4 custom={3} variants={textAnimation}>
                  HTML SCSS REACT JAVA SCRIPT
                </motion.h4>
              </motion.span>
              <motion.h3 custom={4} variants={textAnimation} >ProtectX</motion.h3>
              <motion.p custom={5} variants={textAnimation}>Discord anti-crash bot</motion.p>
            </motion.div>
            <motion.div  initial='hidden' whileInView="visible" className="card3">
              <motion.img custom={1} variants={ImgAnimation} src={project3} alt="" />
              <span className="card__1__text3">
                <motion.h4 custom={1} variants={textAnimation}>HTML SCSS REACT JAVA SCRIPT</motion.h4>
              </span>
              <motion.h3 custom={2} variants={textAnimation}>Kahoot Answers Viewer</motion.h3>
              <motion.p custom={3} variants={textAnimation}>Get answers to your kahoot quiz</motion.p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial='hidden' whileInView="visible" id="about" className="about__me">
          <div className="con__about">
            <motion.h2 custom={1} variants={textAnimation} className="about__title">
              <span style={{ color: "#C778DD" }}>#</span>About me
            </motion.h2>
            <motion.div custom={2} variants={textAnimation}  className="line__about"></motion.div>
          </div>
          <motion.p custom={3} variants={textAnimation} className="about__text">
            Hi my name is Muhammadabdullokh May surname Khasanov and I am
            Frontend developper I am 15 years old I know two languages ​​Russian
            English and Uzbek and I also know React JavaScript and Scss and css
          </motion.p>

          <motion.img custom={4} variants={ImgAnimation} className="dots__about__1" src={dots} alt="" />
          <div className="right__img">
            <motion.img custom={1} variants={ImgAnimation} src={person2} alt="" />
            <motion.div custom={2} variants={ImgAnimation} className="line__person2"></motion.div>
            <motion.img custom={3} variants={ImgAnimation} className="dots__about__2" src={dots} alt="" />
          </div>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' id="contact" className="contact">
          <div className="title__con">
            <motion.h2 custom={1} variants={textAnimation} className="contact__title">
              <span style={{ color: "#C778DD" }}>#</span>Contact
            </motion.h2>
            <div className="line__contact"></div>
            <motion.p custom={2} variants={textAnimation} className="contact__text">
              If you have any questions about cooperation, please contact me or
              have any other questions, I will be glad to see everyone
            </motion.p>
            <div className="messege">
              <motion.h5 custom={3} variants={textAnimation} className="messege__title">Message me here</motion.h5>
              <div className="discord__con">
                <motion.a custom={4} variants={textAnimation} target="blank" href="https://discord.com/">
                  <motion.img custom={5} variants={ImgAnimation} src={discord} alt="" />
                  <motion.p custom={6} variants={textAnimation} className="text__discord">uz__white</motion.p>
                </motion.a>
              </div>
              <div className="email__con">
                <a target="blank" href="https://mail.google.com/">
                  <motion.img custom={1} variants={ImgAnimation} src={email} alt="" />
                  <motion.p custom={2} variants={textAnimation} className="text__email">nuuuu391@gmail.com</motion.p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
