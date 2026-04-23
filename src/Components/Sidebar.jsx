import { Home, Book, Calendar, CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-64 h-screen bg-gray-50 border-r flex flex-col justify-between">

    
      <div className="p-5">
     
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 bg-[#16A34A] rounded-lg flex items-center justify-center text-white font-bold">
            Z
          </div>
          <div>
            <p className="font-semibold">Ziyaarah</p>
            <p className="text-xs text-gray-500">Journey Planner</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-[#16A34A] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Home size={18} />
            Dashboard
          </NavLink>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-900 cursor-pointer">
            <Calendar size={18} />
            <NavLink to="/planner" className= { ({ isActive }) =>
              `text-sm transition ${
                isActive                  ? "text-white " : "text-gray-600 hover:text-white"
              }`
            } >
              Trip Planner
            </NavLink>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
            <CheckCircle size={18} />
            Ritual Tracker
          </div>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-[#16A34A] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Book size={18} />
            Resources
          </NavLink>

        </nav>
      </div>

      {user && (
        <div className="p-5">
          <div className="border-t border-gray-200 mb-4"></div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 bg-[#16A34A] text-white flex items-center justify-center rounded-full text-sm font-medium">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-medium">
                {user.email?.split("@")[0]}
              </p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="text-red-500 text-sm hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;