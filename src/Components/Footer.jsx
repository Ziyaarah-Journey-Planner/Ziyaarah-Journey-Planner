
import {
  Book,
  Circle,
  Users,
  Star,
  CalendarCheck,
  MoveRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-16">

      {/* CTA Section */}
      <section className="bg-gray-700 py-16 rounded-lg text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Ready to Begin Your <br /> Spiritual Journey?
            </h1>

            <p className="text-sm text-gray-200 mb-6">
              Join thousands of Muslims using Ziyaarah to plan their journey with love and care.
            </p>

            <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Create your account
            </button>
          </div>

          <img
            src="/kaaba.jpg"
            alt="Kaaba"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-black">Quick Links</h2>

          <div className="flex items-center gap-2 text-green-600">
            <span>Show all</span>
            <MoveRight size={18} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <CalendarCheck className="mx-auto mb-2 text-blue-500" />
            <h3 className="font-semibold">Prayer Time</h3>
            <p className="text-sm text-gray-600">
              Daily prayer schedule and reminders
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Book className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">Quran Study</h3>
            <p className="text-sm text-gray-600">
              Daily verses and interpretations
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Users className="mx-auto mb-2 text-orange-500" />
            <h3 className="font-semibold">Community</h3>
            <p className="text-sm text-gray-600">
              Connect with fellow believers
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Star className="mx-auto mb-2 text-yellow-500" />
            <h3 className="font-semibold">Events</h3>
            <p className="text-sm text-gray-600">
              Upcoming community gatherings
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Circle size={20} />
            <div>
              <p className="font-semibold">ZIYAARAH</p>
              <p className="text-xs text-gray-400">
                Spiritual journey planner
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ziyaarah. Helping Muslims prepare for their journey.
          </p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;