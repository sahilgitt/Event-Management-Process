import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		const handleLogin = (e) => {
			e.preventDefault();
			// Add your login logic here
			console.log("Logging in:", { email });
		};
  return (

		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
				<form onSubmit={handleLogin}>

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
						Login
					</button>

				</form>

				<p className="mt-4 text-center">
					Don't have an account?{" "}
          
					<span
						onClick={() => navigate("/register")}
						className="text-blue-600 cursor-pointer hover:underline"
					>
						Create an account
					</span>
				</p>
			</div>
		</div>
	);
}

export default Login