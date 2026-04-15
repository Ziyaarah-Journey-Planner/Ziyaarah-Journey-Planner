import { NavLink, useNavigate } from "react-router-dom";
import { CircleDot } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white">
            <CircleDot size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold">Ziyaarah</h1>
            <p className="text-xs text-gray-500">
              Spiritual Journey Planner
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-600">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink to="/about" className="hover:text-green-600">
            About Us
          </NavLink>

          <NavLink to="/prayers" className="hover:text-green-600">
            Prayers
          </NavLink>

          <NavLink to="/events" className="hover:text-green-600">
            Events
          </NavLink>

          <NavLink to="/contact" className="hover:text-green-600">
            Contact Us
          </NavLink>
        </div>

        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign In
            </NavLink>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;