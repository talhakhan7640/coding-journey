import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<h2 className='sidebar-heading mx-10'>EXPLORE</h2>
			<ul className='sidebar-menu mx-10'>

				<li className='sidebar-menu-item'>
					<Link to="/posts">Home</Link>
				</li>

				<li className='sidebar-menu-item'>
					<Link to="/posts/category/programming">Programming</Link>
				</li>

				<li className='sidebar-menu-item'>
<Link to="/posts/category/random-articles">Random Articles</Link>
				</li>

				<li className='sidebar-menu-item'>
					<Link to=''>About Me</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
