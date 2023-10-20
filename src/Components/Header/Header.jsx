import React, { useEffect, useState } from 'react'
import './Header.scss'
import './Header.scss'
import Logo from "../../img/Logo.png"
function Header() {
  
  const [vWidth, setVWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setVWidth(window.innerWidth);
  });
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".Header");
      nav.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='Header'>
      <div className="container">
        <div className="Header ">
          <div className="logo__container">
            <img className='Logo' src={Logo} alt="" />
            <h4 className='Logo__text'>Muhammadabdulloh</h4>
          </div>
          <div className="link__con">
          <a href='#about' className='About__link'>#About</a>
            <a href='#contact' className='Contact__link'>#Contact</a>
            <a href='#projects' className='Project__link'>#Projects</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Header
