import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
		const [email, setEmail] = useState("");
		const [username, setUsername] = useState("");
		const [password, setPassword] = useState("");

		const handleRegister = (e) => {
			e.preventDefault();
			// Add your registration logic here
			console.log("Registering:", { email, username, password });
		};

  return (

		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

				<form onSubmit={handleRegister}>

					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
							required
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="username" className="block text-gray-700 mb-2">
							Username
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-700 mb-2">
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
							required
						/>
					</div>

					<button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
						Register
					</button>
				</form>
        
				<p className="mt-4 text-center">
					Already have an account?{" "}
					<span
						onClick={() => navigate("/login")}
						className="text-blue-600 cursor-pointer hover:underline"
					>
						Login
					</span>
				</p>
			</div>
		</div>
	);
}

export default Register