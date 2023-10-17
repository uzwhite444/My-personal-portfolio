import React, { useRef } from 'react'
import './Hero.scss'
import person from "../../img/Person.png"
import bgimg1 from '../../img/bgimg1.svg'
import dots from "../../img/Dots.svg"
import project1 from "../../img/project1.jpg"
import project2 from "../../img/project2.png"
import project3 from "../../img/project3.png"
import person2 from '../../img/Person2.png'
import discord from '../../img/Discord.svg'
import email from '../../img/Email.svg'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <div className="top__part">
          <div className="First">
            <h1 className='about__text1'>
              <span className='name__text1' style={{ color: 'white' }}>
                Muhammadabdulloh is a
              </span>
              <span className='name__text2' style={{ color: "#C778DD" }}>
                web designer
              </span>
              <span className='name__text3' style={{ color: 'white' }}>
                and
              </span>
              <span className='name__text4' style={{ color: "#C778DD" }}>
                front-end developer
              </span>
            </h1>
            <span className='about__text2'>He crafts responsive websites where technologies meet creativity</span>
            <button className='contact__btn'>Contact me !!</button>
          </div>
          <img className='bgimg1' src={bgimg1} alt="" />
          <img className='dots__1' src={dots} alt="" />
          <div className="righ__img">
            <img className='person__img' src={person} alt="" />
            <span className='person__text1'>
              <div className='box__purple'>
              </div>
              Currently working on
              <span className='person__text2' style={{ color: 'white' }}>
                Portfolio
              </span>
            </span>
          </div>
        </div>
        <div className="projects">
          <div className='title__con'>
            <h2 className='projects__title'><span style={{ color: '#C778DD' }}>#</span>Projects</h2>
            <div className="line"></div>
            <Link className='projects__link'>View all</Link>
          </div>
          <div className="cards">
            <div className="card1">
              <img src={project1} alt="" />
              <span className='card__1__text1'>
                <h4>HTML SCSS REACT JAVA SCRIPT</h4>
              </span>
              <h3>ChertNodes</h3>
              <p>Minecraft servers hosting</p>
            </div>
            <div className="card2">
              <img src={project2} alt="" />
              <span className='card__1__text2'>
                <h4>HTML SCSS REACT JAVA SCRIPT</h4>
              </span>
              <h3>ProtectX</h3>
              <p>Discord anti-crash bot</p>
            </div>
            <div className="card3">
              <img src={project3} alt="" />
              <span className='card__1__text3'>
                <h4>HTML SCSS REACT JAVA SCRIPT</h4>
              </span>
              <h3>Kahoot Answers Viewer</h3>
              <p>Get answers to your kahoot quiz</p>
            </div>
          </div>

        </div>
        <div className="about__me">
          <div className="con__about">
            <h2 className='about__title'><span style={{color:'#C778DD'}}>#</span>About me</h2>
            <div className="line__about"></div>
          </div>
          <p className='about__text'>
          Hi my name is Muhammadabdullokh May surname Khasanov and I am Frontend developper I am 15 years old I know two languages ​​Russian English and Uzbek and I also know React JavaScript and Scss and css
          </p>

          <img className='dots__about__1' src={dots} alt="" />
          <div className="right__img">
            <img src={person2} alt="" />
            <div className="line__person2">
            </div>
          <img className='dots__about__2' src={dots} alt="" />
          </div>
        </div>
        <div className="contact">
          <div className="title__con">
          <h2 className='contact__title'><span style={{color:'#C778DD'}}>#</span>Contact</h2>
          <div className="line__contact"></div>
          <p className='contact__text'>If you have any questions about cooperation, please contact me or have any other questions, I will be glad to see everyone</p>
          <div className="messege">
            <h5 className='messege__title'>Message me here</h5>
            <div className="discord__con">
            <Link to={'https://discord.com/'}>            
              <img src={discord} alt="" />
              <p className='text__discord'>uz__white</p>
            </Link>
            </div>
            <div className="email__con">
            <Link to={'https://mail.google.com/'}>            
              <img src={email} alt="" />
              <p className='text__email'>nuuuu391@gmail.com</p>
            </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
