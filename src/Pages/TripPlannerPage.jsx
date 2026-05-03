
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTriplist } from "../store/Slices/ZiyaarahSlice";

const TripPlannerPage = () => {
  const dispatch = useDispatch();
  const { triplist, loading, error } = useSelector((state) => state.ziyaarah);

  useEffect(() => {
    dispatch(fetchTriplist());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">

     
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Trip Planner</h1>
          <p className="text-gray-500">
            Plan and organize your spiritual journey
          </p>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Create New Trip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {triplist.map((trip) => (
          <div
            key={trip.id}
            className="bg-white p-5 rounded-xl border shadow-sm"
          >
            <h2 className="font-semibold text-lg">
              {trip.destination || trip.title}
            </h2>

            <div className="flex gap-4 text-sm text-gray-500 mt-2">
              <span>
                {trip.startDate
                  ? new Date(trip.startDate).toLocaleDateString()
                  : "No date"}
              </span>

              {trip.days && <span>{trip.days} days</span>}
            </div>

           
            {trip.status && (
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                {trip.status}
              </span>
            )}

           
            <div className="mt-3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${trip.progress || 0}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TripPlannerPage;