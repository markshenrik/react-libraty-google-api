import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { useGlobalContext } from '../../context.';

const Navbar = () => {
  const {setSearchterm} = useGlobalContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const backHome = () => {
    setSearchterm("");
  }

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link onClick={backHome} to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='fw-7 fs-24 ls-1'>ReactLibrary</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link onClick={() => {if(toggleMenu){setToggleMenu(false)}}} to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' >Home</Link>
            </li>
            <li className='nav-item'>
              <Link onClick={() => {if(toggleMenu){setToggleMenu(false)}}} to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            <li className='nav-item'>
              <Link onClick={() => {if(toggleMenu){setToggleMenu(false)}}} to="/sign" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar