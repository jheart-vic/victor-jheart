import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { SideBarData } from './sideBarData'
import './Navbar.css'
import ThemeTogglerButton from './ThemeToggleButton'

const Navbar = () => {
 const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className='navbar'>
      <div className="menu-bars">
      <Link to='#' className='bars'>
        <FaBars onClick={showSidebar} />
      </Link>
      <h1 className='hidden'>Victor David</h1>
      </div>
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
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
        <ThemeTogglerButton onClick={showSidebar} />
      </nav>
    </div>
  )
}

export default Navbar;
