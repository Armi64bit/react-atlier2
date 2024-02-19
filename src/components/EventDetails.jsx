import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "/src/data/events.json"

function EventDetails() {
  const { name } = useParams(); // Retrieve event name from URL parameters
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch event details using name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedEvent = data.find(
          (event) => event.name.toLowerCase() === name.toLowerCase()
        ); // Case-insensitive comparison

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
  }, [name]);

  // Display event details or error message
  if (eventData) {
    return (
      <div className="container mt-5">
      {/* Event details with Bootstrap styling */}
      <h2 className="display-4 mb-3">{eventData.name}</h2>
      <div className="row">
        <div className="col-md-8">
          <p className="text-muted">{eventData.description}</p>
        </div>
        <div className="col-md-4">
          <img
            src={`/public/images/${eventData.img}`}
            alt={eventData.name}
            className="img-fluid mb-3"
          />
          <div className="d-flex justify-content-between mb-3">
            <p className="text-primary">Price: {eventData.price} &euro;</p>
            <p className="text-muted">Remaining Tickets: {eventData.nbTickets}</p>
          </div>
          <p className="text-muted">Participants: {eventData.nbParticipants}</p>
          {/* Add booking/purchase functionality with Bootstrap components */}
        </div>
      </div>
    </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div>Loading...</div>;
  }
}

export default EventDetails;
