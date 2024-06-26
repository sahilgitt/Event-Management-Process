import React from "react";
import { useParams } from "react-router-dom";
import dummyEvents from "../../DummyEvents";

const EventDetail = () => {

	const { id } = useParams();
	const event = dummyEvents.find((event) => event.id === parseInt(id));

	if (!event) {
		return <div className="container mx-auto p-4">Event not found</div>;
	}
  
	return (
		<div className="container mx-auto p-4">
			<div className="bg-white p-8 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold mb-4">{event.name}</h1>
				<p className="text-gray-700 mb-2">Venue: {event.venue}</p>
				<p className="text-gray-700 mb-2">Details: {event.details}</p>
				<p className="text-gray-700 mb-2">Max Capacity: {event.maxCapacity}</p>
			</div>
		</div>
	);
};

export default EventDetail;