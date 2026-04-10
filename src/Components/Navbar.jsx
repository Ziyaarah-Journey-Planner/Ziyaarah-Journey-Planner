import { Link } from 'react-router-dom';    
import {CircleDot } from 'lucide-react'

function Navbar() {
  return (
    <nav className=" w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
    {/* Logo  */}
< div className="flex items-center gap-2">
<div className='w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white font-bold'> 
    <CircleDot size={24} className="text-white" /> </div>
          <div> <h1 className="text-lg font-bold ">Ziyaarah</h1></div>
          <p className="text-xs text-gray-500">Spiritual Journey Planner</p>
         
        </div>
        {/* Navigation Links  */}
        <div className=" hidden md:flex items-center gap-8 text-gray-600">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About Us
          </Link>
          <Link to="/prayers" className="hover:text-green-600">
            Prayers
          </Link>
         <Link to="/events" className="hover:text-green-600">
            Events
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contact
          </Link>
        </div>
      {/* Sign In Button  */}
        <div >
<Link to="/signin" className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;