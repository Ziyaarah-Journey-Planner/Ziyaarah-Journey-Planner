import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const TripPlanner = () => {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");

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
      body: JSON.stringify({
        destination,
        days,
        startDate: date, 
      }),
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
      <h1 className="text-2xl font-bold">Trip Planner</h1>

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
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addTrip}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
            className="bg-white p-6 rounded-2xl border shadow-sm space-y-4 relative"
          >
                     
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">
                  {trip.destination || trip.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {trip.startDate
                    ? new Date(trip.startDate).toLocaleDateString()
                    : "No date"}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  trip.status === "Active"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {trip.status}
              </span>
            </div>

                       
            <div className="flex gap-6 text-sm text-gray-500">
              <span>📅 {trip.days || "-"} days</span>
              <span>🧭 {trip.stages?.length || 0} stages</span>
              <span>📊 {trip.progress || 0}% complete</span>
            </div>

            <div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${trip.progress || 0}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(trip.stages || ["Travel", "Miqat", "Tawaf"]).map(
                (stage, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {stage}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => deleteTrip(trip.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TripPlanner;