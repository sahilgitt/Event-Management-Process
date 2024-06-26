import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  
      const navigate = useNavigate();
  return (

		<div
			className="relative bg-cover bg-center h-screen "
			style={{
				backgroundImage:
					"url(https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg?t=st=1719293161~exp=1719296761~hmac=f2cea9885d6c8f0120af71ee5a6982ed92d6d9d1cbae7b53131e8be01c365233&w=1060)",
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
				<h1 className="text-5xl font-bold mb-4">Welcome to EventManager</h1>
				<p className="text-lg mb-8">
					Discover and manage your events with ease
				</p>
				<div className="space-x-4">

					<button
						onClick={() => navigate("/events")}
						className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
					>
						Explore Events
					</button>

					<button
						onClick={() => navigate("/register")}
						className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
					>
						Register
					</button>

					<button
						onClick={() => navigate("/login")}
						className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
					>
						Login
					</button>

				</div>
			</div>
		</div>
	);
}

export default HeroSection