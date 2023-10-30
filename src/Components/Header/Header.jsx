import React, { useEffect, useState } from "react";
import "./Header.scss";

import Logo from "../../img/Logo.png";
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
    <div className="Header">
      <div className="container">
        <div className="Header1 ">
          <div className="logo__container">
            <a href="#top__part">
              <img className="Logo" src={Logo} alt="" />
            </a>
            <a href="#top__part">
              <h4 className="Logo__text">Muhammadabdulloh</h4>
            </a>
          </div>
          <div className={vWidth <= 616 ? "none " : "link__con"}>
            <a href="#about" className="About__link">
              #About
            </a>
            <a href="#contact" className="Contact__link">
              #Contact
            </a>
            <a href="#projects" className="Project__link">
              #Projects
            </a>
          </div>
          <div
            className={vWidth <= 616 ? "btn-group" : "none"}
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div class={vWidth <= 616 ? "btn-group" : "none"} role="group">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-list"></i>
              </button>
              <ul class="dropdown-menu">
                <a href="#about" className="About__link">
                  #About
                </a>
                <a href="#contact" className="Contact__link">
                  #Contact
                </a>
                <a href="#projects" className="Project__link">
                  #Projects
                </a>
              </ul>
            </div>
          </div>
          {/* <div className={vWidth <= 838 ? "dropdown " : "header__list"}>
              <a
                className={
                  vWidth <= 838 ? "btn btn-secondary dropdown-toggle" : "none"
                }
                href="#/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-list i"></i>
              </a>

              <ul
                className={vWidth <= 838 ? " dropdown-menu  " : "header__list"}
              >
                <li
                  onClick={() => setActive(1)}
                  className={active == 1  ? "active" : null}
                >
                  <a className="dropdown-item" href="#about">
                    About me
                  </a>
                </li>
                <li
                  onClick={() => setActive(2)}
                  className={active == 2 ? "active" : null}
                >
                  <a className="dropdown-item" href="#services">
                    Services
                  </a>
                </li>
                <li
                  onClick={() => setActive(3)}
                  className={active == 3 ? "active" : null}
                >
                  <a className="dropdown-item" href="#contact">
                    Contact me
                  </a>
                </li>

                

               
              </ul>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
