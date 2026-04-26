const TripCards = ({ trip }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{trip.title}</h2>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
          {trip.status}
        </span>
      </div>

      <div className="flex gap-6 text-sm mt-2 text-gray-500">
        
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-blue-500 rounded"
            style={{ width: `${trip.progress}%` }}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {triplist.stages.map((stage, i) => (
          <span
            key={i}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TripCards;
