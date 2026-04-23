import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResourceLibrary from "./pages/ResourceLibrary";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TripPlannerPage from "./pages/TripPlannerPage";
import DashboardLayout from "./pages/DashboardLayout";


function App() {
  const location = useLocation();
  const user = localStorage.getItem("user");



  const isDashboard = location.pathname === "/resources";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {!isDashboard && <Navbar />}

      {location.pathname === "/" && !user && <Hero />}
      
      <main className={`flex-1 ${isDashboard ? "" : "container mx-auto px-4 py-8"}`}>
        <Routes>
             
          
         


        

      
          <Route
            path="/"
            element={
              user ? <Navigate to="/resources" replace /> : <HomePage />
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
          
            <Route
              
              element={
                <ProtectedRoute requireAuth={true}>
                  <DashboardLayout />

                </ProtectedRoute>

              }
            >
              <Route path="/resources" element={<ResourceLibrary />} />
              <Route path="/planner" element={<TripPlannerPage />} />
            </Route>
             


          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

    

      {!isDashboard && <Footer />}

    </div>
  );
}

export default App;