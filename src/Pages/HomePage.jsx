import { Calendar, CheckCircle, BookOpen, User, Globe } from "lucide-react";

function HomePage() {
  return (
    <div>


      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-2">

            Everything You Need for Your Sacred Journey
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">

            Comprehensive tools and resources to help you prepare spiritually and practically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="text-white" size={22} />
              </div>
              <h3 className="font-semibold mb-2">Trip Planning</h3>
              <p className="text-sm text-gray-600">

                Organize your journey with detailed stage-by-stage planning and comprehensive checklists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="text-white" size={22} />
              </div>
              <h3 className="font-semibold mb-2">Ritual Tracker</h3>
              <p className="text-sm text-gray-600">

                Track mandatory and sunnah rituals with guided completion checklists and reminders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <BookOpen className="text-white" size={22} />
              </div>
              <h3 className="font-semibold mb-2">Learning Resources</h3>
              <p className="text-sm text-gray-600">

                Access authentic Islamic resources and educational materials for each journey stage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-orange-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <User className="text-white" size={22} />
              </div>
              <h3 className="font-semibold mb-2">Personal Dashboard</h3>
              <p className="text-sm text-gray-600">

                Monitor your progress with detailed insights and daily spiritual inspiration.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-green-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-2">
            
            Choose Your Sacred Journey
          </h2>

          <p className="text-green-100 mb-12">

            Tailored planning for both Hajj and Umrah pilgrimages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="relative group rounded-2xl overflow-hidden shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769"
                alt="Hajj"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-left w-full">
                <h3 className="text-xl font-semibold mb-1">

                  Hajj Pilgrimage
                </h3>

                <p className="text-sm text-gray-200 mb-2">

                  The greater pilgrimage – a once-in-a-lifetime spiritual journey
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Globe size={16} className="text-white" />

                  <span>5–7 days comprehensive planning</span>
                </div>
              </div>

            </div>

            <div className="relative group rounded-2xl overflow-hidden shadow-lg">

              <img
                src="https://images.pexels.com/photos/2787826/pexels-photo-2787826.jpeg"
                alt="Umrah"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-left w-full">
                <h3 className="text-xl font-semibold mb-1">
                  Umrah Pilgrimage
                </h3>

                <p className="text-sm text-gray-200 mb-2">

                  The lesser pilgrimage – can be performed anytime of year
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Calendar size={16} className="text-white" />

                  <span>2–3 days flexible planning</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;