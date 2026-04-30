import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const RitualTracker = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/rituals').then(res => res.json()).then(setStages);
  }, []);

  const toggleTask = (stageId, taskId) => {
    fetch(`http://localhost:5000/api/rituals/${stageId}/${taskId}`, { method: 'PUT' })
      .then(() => {
        // Refresh local UI state
        const newStages = [...stages];
        const stage = newStages.find(s => s.id === stageId);
        const task = stage.tasks.find(t => t.id === taskId);
        task.completed = !task.completed;
        setStages(newStages);
      });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Ritual Tracker</h1>
      
      {stages.map(stage => (
        <div key={stage.id} className="bg-white p-6 rounded-2xl mb-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
             <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">○</div>
             <h2 className="text-lg font-bold">{stage.stage}</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4 ml-9">{stage.description}</p>
          
          <div className="space-y-3 ml-9">
            {stage.tasks.map(task => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(stage.id, task.id)}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${task.completed ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-100 hover:border-emerald-200'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-300'}`}>
                    {task.completed && "✓"}
                  </div>
                  <span className={`text-sm ${task.completed ? 'text-emerald-700 line-through' : 'text-gray-700'}`}>{task.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${task.type === 'Mandatory' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
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