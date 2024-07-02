import './index.scss'
import logo from '@/assets/logo.svg'
import { BsArrowDown } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { GrMenu } from "react-icons/gr";
import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function Header() {
  const [isActive, setisActive] = useState(false)
  return (
    <header className="header container">
      <NavLink to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>

      <ul className={`header__menu ${isActive ? '-is-active' :''}`}>
        <li className="header__menu-item">
          <NavLink to="/work"  className='header__menu-link'>Work</NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to="/writing" className="header__menu-link">Writing</NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to="/about" className="header__menu-link">About</NavLink>
        </li>
        <li className="header__menu-item dropdown">
          <a href="/#" className="header__menu-link">
            Elements
            <BsArrowDown />
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item">
              <a href="/#" className="dropdown-menu__link">Login</a>
            </li>
            <li className="dropdown-menu__item">
              <a href="/#" className="dropdown-menu__link">Register</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div className={`btn-toggle ${isActive ? '-is-active' :''}`} onClick={() => {setisActive(!isActive)}}>
        <GrMenu />
        <LiaTimesSolid />
      </div>


    </header>

  )
}
