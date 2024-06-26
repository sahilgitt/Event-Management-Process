// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import dummyEvents from "../../DummyEvents";

const Home = () => {
	const navigate = useNavigate();
	const upcomingEvents = dummyEvents.slice(0, 4); // Display first 4 events as highlights

	return (
		<div className="container mx-auto p-4">
			{/* Hero Section */}
			<HeroSection />

			{/* Upcoming Events Section */}
			<div className="my-8">
				<h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{upcomingEvents.map((event) => (
						<div
							key={event.id}
							className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
							onClick={() => navigate(`/events/${event.id}`)}
						>
							<h3 className="text-xl font-semibold mb-2">{event.name}</h3>
							<p className="text-gray-700 mb-1">Venue: {event.venue}</p>
							<p className="text-gray-700 mb-1">Details: {event.details}</p>
							<p className="text-gray-700 mb-1">
								Max Capacity: {event.maxCapacity}
							</p>
						</div>
					))}
				</div>

				<button onClick={() => navigate("/events")}
					className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
					View All Events
				</button>
			</div>

			{/* About Section */}
			<div className="my-8 text-center">
				<h2 className="text-2xl font-bold mb-4">About Us</h2>

				<p className="text-gray-700 mb-4">
					EventManager is a platform dedicated to bringing you the best events
					in the city. Our mission is to make event discovery and management as
					seamless as possible.
				</p>

				<p className="text-gray-700">
					Whether you are looking to attend a music festival, tech conference,
					or art exhibition, we have got you covered.
				</p>
			</div>

			{/* Newsletter Signup */}
			<div className="my-8 text-center bg-gray-100 p-8 rounded-lg">
				<h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>

				<form className="flex flex-col items-center">
					<input
						type="email"
						placeholder="Enter your email"
						className="w-full max-w-md px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
						required
					/>

					<button type="submit"
						      className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;