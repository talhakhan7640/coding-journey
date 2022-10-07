import React from 'react'
import './Footer.css'
import Navlinks from './Navlinks'

const Footer = () => {
	return (
		<div className=' footer grid grid-cols-6 mb-10 mt-4'>
			
			<div className=' col-span-6 md:col-span-3 mb-6'>
				<Navlinks />
			</div>

			<div className=' newsletter px-2 col-span-6 md:col-span-3 my-4'>
				
				<div className='md:mx-10'>
					<p className=''>Join our newsletter</p>	
					<input type="email" placeholder="Your email address" className='p-2 my-2'/>
				</div>

				<button className='py-2 px-3 md:mx-10'>Subscribe</button>

			
			</div>

		</div>
	)
}

export default Footer
