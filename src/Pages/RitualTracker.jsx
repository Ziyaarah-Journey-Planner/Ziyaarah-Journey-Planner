import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const RitualTracker = () => {
  const [stages, setStages] = useState([]);

  const fetchRituals = () => {
    fetch(`${BASE_URL}/api/rituals`)
      .then(res => res.json())
      .then(setStages)
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchRituals();
  }, []);

  const toggleTask = (stageId, taskId) => {
    fetch(`${BASE_URL}/api/rituals/${stageId}/${taskId}`, {
      method: "PUT",
    })
      .then(() => fetchRituals()) 
      .catch(err => console.error(err));
  };

  

  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-2xl font-bold">Ritual Tracker</h1>

      {stages.map(stage => (
        <div
          key={stage.id}
          className="bg-white p-6 rounded-2xl shadow-sm border w-full"
        >
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">
              ○
            </div>
            <h2 className="text-lg font-semibold">{stage.stage}</h2>
          </div>

          
          <div className="space-y-3 ml-9">
            {stage.tasks.map(task => (
              <div
                key={task.id}
                onClick={() => toggleTask(stage.id, task.id)}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition
                ${
                  task.completed
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-white border-gray-100 hover:border-emerald-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs
                    ${
                      task.completed
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {task.completed && "✓"}
                  </div>

                  <span
                    className={`text-sm ${
                      task.completed
                        ? "text-emerald-700 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {task.name}
                  </span>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold
                  ${
                    task.type === "Mandatory"
                      ? "bg-red-100 text-red-600"
                      : task.type === "Sunnah"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {task.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RitualTracker;