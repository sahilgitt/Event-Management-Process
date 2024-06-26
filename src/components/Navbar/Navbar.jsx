import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4'>
        <div className="container mx-auto flex justify-between items-center">
			<div className="text-white font-bold text-lg">Event Management</div>
				<div className="flex space-x-4">
					<Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
						Home
					</Link>

					<Link to="/events" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
						Events
					</Link>

					<Link to="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
						Login
					</Link>
			    </div>
		</div>

    </nav>
  )
}

export default Navbar