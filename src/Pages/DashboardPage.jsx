import { useEffect, useState } from "react";
import { CircleCheck, Calendar, TrendingUp, BookOpen } from "lucide-react";

function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/dashboard')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Fetch error:", err));
  }, []);

  
  if (!data) {
    return <div className="p-10 text-center font-semibold text-gray-500">Loading your journey...</div>;
  }

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-500">Welcome to your journey planner 👋</p>
      
      {/* Quote Banner */}
      <div className="bg-green-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-xl font-bold text-center mb-1 italic">
          " And Allah is wiht those who fear him." 
        </h2>
        <span className="text-emerald-200 flex justify-center text-sm font-medium">
         Quran and Sunnah
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <StatCard 
          label="Active Journeys" 
          value={data.stats?.activeJourneys} 
          icon={<Calendar size={20} />} 
          color="bg-blue-500" 
        />
        <StatCard 
          label="Progress" 
          value={`${data.stats?.progress}%`} 
          icon={<TrendingUp size={20} />} 
          color="bg-orange-600" 
        />
        <StatCard 
          label="Completed Tasks" 
          value={data.stats?.completedTasks} 
          icon={<CircleCheck size={20} />} 
          color="bg-emerald-800" 
        />
        <StatCard 
          label="Total Tasks" 
          value={data.stats?.totalTasks} 
          icon={<BookOpen size={20} />} 
          color="bg-orange-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left Column: Current Journey */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-emerald-600">📍</span> Current Journey
          </h2>
          
          {data.currentJourney ? (
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{data.currentJourney.title}</h3>
              <p className="text-emerald-600 font-semibold mb-6">🕋 {data.currentJourney.type}</p>
              
              <div className="bg-emerald-50/50 p-6 rounded-2xl mb-6">
                <div className="flex justify-between font-bold text-slate-700 mb-2 text-sm">
                  <span>Overall Progress</span>
                  <span>{data.stats.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-500" 
                    style={{ width: `${data.stats.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex gap-6 text-sm text-slate-500 font-medium">
                <span>📅 Start: {data.currentJourney.startDate}</span>
                <span>📅 End: {data.currentJourney.endDate}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No active journey found.</p>
          )}
        </div>

        {/* Right Column: Journey Stages */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-orange-500">🌐</span> Journey Stages
          </h2>
          <div className="space-y-6">
            {data.journeyStages?.map((stage, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                  {i < data.journeyStages.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-100 my-1"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-slate-800 text-sm">{stage.name}</h4>
                    <span className="text-[9px] uppercase font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-400">
                      {stage.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">
                    {stage.tasksCompleted} of {stage.totalTasks} tasks completed
                  </p>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-full" 
                      style={{ width: `${(stage.tasksCompleted / stage.totalTasks) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper component to clean up the code
function StatCard({ label, value, icon, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
      <div>
        <p className="text-xs font-medium text-gray-500 uppercase mb-1">{label}</p>
        <h1 className="font-bold text-xl text-slate-800">{value || 0}</h1>
      </div>
      <div className={`${color} p-3 rounded-xl text-white shadow-md`}>
        {icon}
      </div>
    </div>
  );
}

export default DashboardPage;