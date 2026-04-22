import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ResourceDetail from "./pages/ResourceDetail";
import ResourceLibrary from "./pages/ResourceLibrary";
import TripPlanner from "./pages/TripPlanner";      
import RitualTracker from "./pages/RitualTracker";   
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
 const user = JSON.parse(localStorage.getItem("user"));

  const appPaths = ["/resources", "/dashboard", "/trips", "/rituals"];
  const isAppPage = appPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (

   <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">

     
      {!isAppPage && <Navbar />}

      {location.pathname === "/" && !user && <Hero />}

      {isAppPage ? (
        <ProtectedRoute requireAuth={true}>
          <div className="flex min-h-screen">

            <Sidebar />

            <main className="flex-1 p-6">
              <Routes>

                <Route
                  path="/dashboard"
                  element={
                    <div className="space-y-2">
                      <h1 className="text-2xl font-semibold">Dashboard</h1>
                      <p className="text-gray-500">
                        Welcome to your journey planner 👋
                      </p>
                    </div>
                  }
                />

                <Route path="/trips" element={<TripPlanner />} />
                <Route path="/rituals" element={<RitualTracker />} />
                <Route path="/resources" element={<ResourceLibrary />} />
                <Route path="/resources/:id" element={<ResourceDetail />} />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />

              </Routes>
            </main>

          </div>
        </ProtectedRoute>
      ) : (
       
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>

            <Route
              path="/"
              element={
                user ? <Navigate to="/dashboard" replace /> : <HomePage />
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute requireAuth={false}>
                  <Login />
                </ProtectedRoute>
              }
            />

            <Route
              path="/register"
              element={
                <ProtectedRoute requireAuth={false}>
                  <Register />
                </ProtectedRoute>
              }
            />

            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/prayers" element={<div>Prayers Page</div>} />
            <Route path="/events" element={<div>Events Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      )}
    
      {!isAppPage && <Footer />}

    </div>
  );
}

export default App;