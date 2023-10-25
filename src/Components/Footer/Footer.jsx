import React from 'react'
import './Footer.scss'
import logo from '../../img/Logo.png'
import figma from '../../img/Figma.svg'
import discord from '../../img/Discord.svg'
import github from '../../img/Github.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="con__logo">
          <img className='footer__logo' src={logo} alt="" />
          <h5 className='logo__text'>Muhammadabdulloh</h5>
          <p className='email__text__logo'>nuuuu391@gmail.com</p>
        </div>
        <p className='text__2'>Web designer and front-end developer</p>
        <div className="media">
          <h4 className='media__text'>Media</h4>
          <div className="media__logo">
            <a target='blank' href='https://github.com/'>   
            <img src={github} alt="" />
            </a>
            <a target='blank' href='https://www.figma.com/'>
            <img src={figma} alt="" />
            </a>
            <a target='blank' href='https://discord.com/'>            
            <img src={discord} alt="" />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
