import { useEffect, useState } from "react";
import { BASE_URL } from "../config";


const TripPlanner = () => {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const[ date, setDate] = useState("");

  const fetchTrips = () => {
    fetch(`${BASE_URL}/api/trips`)
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const addTrip = () => {
    if (!destination || !days || !date) {
      alert("Fill all fields");
      return;
    }

    fetch(`${BASE_URL}/api/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ destination, days }),
    })
      .then((res) => res.json())
      .then(() => {
        setDestination("");
        setDays("");
        setDate("");
        fetchTrips();
      });
  };

  const deleteTrip = (id) => {
    fetch(`${BASE_URL}/api/trips/${id}`, {
      method: "DELETE",
    }).then(() => fetchTrips());
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Trip Planner</h1>

      <div className="bg-white p-4 rounded-xl border space-y-3">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addTrip}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Trip
        </button>
      </div>

      {trips.length === 0 ? (
        <p className="text-gray-500">No trips found</p>
      ) : (
        trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white p-4 rounded-xl border flex justify-between items-center"
          >
             {trip.status === 'Active' && (
              <span className="absolute top-6 right-6 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Active</span>
            )}
            <div>
              <h2 className="font-semibold">{trip.destination}</h2>
              <p className="text-gray-500">{trip.days} days</p>
        
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 mb-4">
              <span> {trip.startDate}</span>
              <span> {trip.endDate}</span>
              <span> {trip.stages} stages</span>
              <span> {trip.progress}% complete</span>
            </div>


            <button
              onClick={() => deleteTrip(trip.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TripPlanner;