import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTriplist } from "../store/Slices/ZiyaarahSlice";
import TripCard from "../Components/TripCards";
const TripPlannerPage = () => {
  const dispatch = useDispatch();
  const { triplist, loading, error } = useSelector((state) => state.ziyaarah);

  useEffect(() => {
    dispatch(fetchTriplist());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="p-6" >
      <div className="flex justify-between mb-6">
<div>
        <h1 className="text-2xl font-bold">Trip Planner</h1>
        <p className="text-gray-500">Plan and organize your spiritual journey</p>
</div>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Create New Trip</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {triplist.map((trip) => (
          <TripCard key={trip.id} triplist={trip} />
        ))}

      </div>
      
    </div>
  );
};

export default TripPlannerPage;
