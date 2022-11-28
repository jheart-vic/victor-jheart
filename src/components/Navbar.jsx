import React from 'react'
import { Link } from 'react-router-dom'
import { SideBarData } from './sideBarData'
import './Navbar.css'
import ThemeTogglerButton from './ThemeToggleButton'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link  to={item.path}>
                  {item.icon}
                  <span className='span'>{item.title}</span>
                </Link>
              </li>
            )})}
        </ul>
        <ThemeTogglerButton />
      </nav>
    </div>
  )
}

export default Navbar;
