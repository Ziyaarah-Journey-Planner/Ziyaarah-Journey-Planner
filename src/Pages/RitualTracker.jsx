import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const RitualTracker = () => {
  const [rituals, setRituals] = useState([]);

  const fetchRituals = () => {
    fetch(`${BASE_URL}/api/rituals`)
      .then((res) => res.json())
      .then((data) => setRituals(data));
  };

  useEffect(() => {
    fetchRituals();
  }, []);

  const toggleRitual = (id) => {
    fetch(`${BASE_URL}/api/rituals/${id}`, {
      method: "PUT",
    }).then(() => fetchRituals());
  };

  const completed = rituals.filter((r) => r.completed).length;
  const total = rituals.length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Ritual Tracker</h1>

      <div className="bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-600 h-3 rounded-full"
          style={{ width: `${(completed / total) * 100}%` }}
        />
      </div>

      <p className="text-sm text-gray-500">
        {completed} of {total} completed
      </p>

     
      {rituals.map((r) => (
        <div
          key={r.id}
          className="bg-white p-4 rounded-xl border flex justify-between items-center"
        >
          <span>{r.name}</span>

          <button
            onClick={() => toggleRitual(r.id)}
            className={`px-3 py-1 rounded text-sm ${
              r.completed
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {r.completed ? "Completed" : "Mark Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RitualTracker;