import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "/src/data/events.json"
function EventDetails() {
  const { eventId } = useParams(); // Retrieve event ID from URL parameters
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch event details from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Find matching event using eventId
        const selectedEvent = data.find((event) => event.id == eventId);

        if (selectedEvent) {
          setEventData(selectedEvent);
        } else {
          setError('Event not found!'); // Handle event not found
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [eventId]);

  // Display event details or error message
  if (eventData) {
    return (
      <div>
        {/* Render fetched event details using `eventData` properties */}
        <h2>{eventData.name}</h2>
        <p>{eventData.description}</p>
        <img src={`public/images/${eventData.img}`} alt={eventData.name} />
        <p>Price: {eventData.price} &euro;</p>
        <p>Remaining Tickets: {eventData.nbTickets}</p>
        <p>Participants: {eventData.nbParticipants}</p>
        {/* Add booking/purchase functionality if applicable */}
      </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>Loading...</div>;
  }
}

export default EventDetails;
