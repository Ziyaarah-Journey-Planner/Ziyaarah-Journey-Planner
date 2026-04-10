import React from "react";
import {
  Book,
  Circle,
  Users,
  Star,
  CalendarCheck,
  MoveRight,
  Home,
} from "lucide-react";

const Footer = () => (
  

    
    <footer className="bg-white text-white py-8 mt-16 rounded-lg ">
    <section className="bg-gray-700 py-16 mt-16 rounded-lg relative overflow-hidden">
      <div className="max-w-7x1 max-auto px-6 grid mid:grid-coln-2 gap-10 itrms-center">
        <div>
          <span className="text-primary-400 text-sm font-semibold uppercase mb-2 block">
            <h1 className="text-xl font-bold text-white mb-4">
              Ready to Beggin Your
              <br /> spritual Journey{" "}
            </h1>
            <p className="text-white text-xs mt-6 ">
              Join thousands of Muslims <br />
              using Ziyaarah to plan their journey with love <br />
              and care. Let's start planning your spiritual journey together!
            </p>
          </span>

          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200">
            Great your account
          </button>
        </div>
      </div>
      <img
        src="kaap.png"
        alt="kaap"
        className="rounded-2xl shadow-lg absolute bottom-85 right-4 pt-2 bg-white"
      />
    </section>

    <div className="container  flex gap-4 w-full mx-auto ">
      <h2 className="text-2xl font-semibold  text-black">Quick Link </h2>
      <div className="  flex items-center gap-2 ml-auto">
        <span className="text-green-600 mb-6"> show all</span>
        <MoveRight size={20} className="h-6 w-6 text-primary-400 mr-2" />

        
      </div>
    </div>
        {/*boxes*/}

    <div className="flex gap-4 w-full  mx-auto">
      <div className="bg-gray-100 p-8 rounded-lg flex-col justify-content  items-center gap-2 flex-1">
        <CalendarCheck size={24} className="text-white-400 bg-blue-500" />
        <div>
          <h3 className="font-semibold text-black">Prayer Time</h3>
          <p className="text-sm text-gray-600">
            Daily prayer schedule and reminders
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg flex-row  justify-content items-center gap-2 flex-1">
        <Book size={24} className="text-white-400 bg-green-500" />
        <div>
          <h3 className="font-semibold text-black">Quran Study</h3>
          <p className="text-sm text-gray-600">
            Daily verses and interpretations
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg flex-col justify-content items-center gap-2 flex-1">
        <Users size={24} className="text-white-400 bg-orange-500" />
        <div>
          <h3 className="font-semibold text-black">Comunity</h3>
          <p className="text-sm text-gray-600">Connect with fellow believers</p>
        </div>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg flex-col justify-content items-center gap-2 flex-1">
        <Star size={24} className="text-white-400 bg-orange-500" />
        <div>
          <h3 className="font-semibold text-black">Events</h3>
          <p className="text-sm text-gray-600">Upcoming community getherings</p>
        </div>
      </div>
    </div>
    {/*footer*/}
    <div className="bg-gray-800 text-white py-8 mt-16 rounded-lg ">
      <div className="container mx-auto px-4  flex  items-center justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
          <div className="flex items-center mb-4 md:mb-0">
            <Circle size={20} className="h-6 w-6 text-primary-400 mr-2" />
            <div className="flex items-center flex flex-col text-sm text-gray-400">
              <span className="text-lg font-semibold">ZIYAARAH</span>
              <span className="text-sm text-white-400">
                {" "}
                spiritual journey planner
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ziyaarah.Helping Muslims prepare
            for their spiritual journey with love and care.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
