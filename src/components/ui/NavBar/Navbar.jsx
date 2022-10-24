import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const navigationRef = useRef();
  const righSide = useRef();

  const handleRedirect = ({ target }) => {
    onToggleMenu()
    navigate(target.getAttribute("path"))
  }

  const onToggleMenu = () => {
    navigationRef.current.classList.toggle("active");
    righSide.current.classList.toggle("changeIcon");
  }

  return (
    <React.Fragment>
      <header>
        <a href="#" className="logo">LOGO</a>
        <div ref={righSide} className="righSide">
          <div onClick={onToggleMenu} className="btns menuToggle">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </header>

      <ul ref={navigationRef} className="navigation">
        <li><a path="/home" onClick={handleRedirect}>Home</a></li>
        <li><a path="/maker" onClick={handleRedirect}>Maker</a></li>
        <li><a path="/about" onClick={handleRedirect}>About</a></li>
        <li className="links">
          <a href="https://github.com/danielhuenul" target="_blank">
            <i className="fa-brands fa-github ico"></i>
          </a>
          <a href="https://linkedin.com/in/daniel-hc" target="_blank">
            <i className="fa-brands fa-linkedin ico"></i>
          </a>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Navbar