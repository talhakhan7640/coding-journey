import React from 'react'
import './Navbar.css'
import man from '../images/man2.jpg'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks.jsx'

const Navbar = () => {
  return (
    <div className='navbar'>
			<div className='logo flex mt-6'>
				<img src={man} alt='logo-icon' width="110px" height="20px" className=''/>
				<Link to="/posts">
					<h1 className='main-heading text-xl sm:text-3xl mt-2'>CODING JOURNEY</h1>
					<p className='sub-heading text-xs md:text-sm'>Articles related to programming</p>
				</Link>
			</div>

			<div className='rendered-navbar md:hidden'>
				<Navlinks />
			</div>
    </div>
  )
}

export default Navbar
