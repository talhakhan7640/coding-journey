import React from 'react'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

const App = ({children}) => {
  return (
		<div className='app lg:container mx-auto'>
			<div className='main-content-container lg:mx-3 xl:mx-32 2xl:mx-64 mt-2 md:mt-4 lg:mt-7 px-5'>

				<Navbar />

				<div className='grid grid-cols-6 gap-1 mt- md:mt- mb-6'>

					<div className='col-span-6 md:col-span-4 px-5'>
						<div className='content'>
							{children}
						</div>	
					</div>

					<div className='hidden md:block col-span-2'>
						<Sidebar />
					</div>

				</div>
				
				<div className='line mx-auto'></div>
				
				<Footer />


			</div>
		</div>
  )
}

export default App
