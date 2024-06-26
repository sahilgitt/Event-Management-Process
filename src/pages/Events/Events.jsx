import React from 'react'
import dummyEvents from '../../DummyEvents';
import { useNavigate } from 'react-router-dom';

const Events = () => {
     const navigate = useNavigate();
  return (
    
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Events</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{dummyEvents.map((event) => (
					<div
						key={event.id}
						className="bg-blue-200 p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
						onClick={() => navigate(`/events/${event.id}`)}
					>
						<h2 className="text-xl font-semibold mb-2">{event.name}</h2>
						<p className="text-gray-700 mb-1">Venue: {event.venue}</p>
						<p className="text-gray-700 mb-1">Details: {event.details}</p>
						<p className="text-gray-700 mb-1">
							Max Capacity: {event.maxCapacity}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Events