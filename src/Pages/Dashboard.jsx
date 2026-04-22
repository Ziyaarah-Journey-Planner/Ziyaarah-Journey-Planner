function App() {
  const location = useLocation();
  const user = localStorage.getItem("user");

  const isAppPage =
    location.pathname.startsWith("/resources") ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/trips") ||
    location.pathname.startsWith("/rituals");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {!isAppPage && <Navbar />}

      {location.pathname === "/" && !user && <Hero />}

      <main className={`flex-1 ${isAppPage ? "" : "container mx-auto px-4 py-8"}`}>
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

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireAuth={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/trips"
            element={
              <ProtectedRoute requireAuth={true}>
                <div className="p-6">Trip Planner</div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/rituals"
            element={
              <ProtectedRoute requireAuth={true}>
                <div className="p-6">Ritual Tracker</div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/resources"
            element={
              <ProtectedRoute requireAuth={true}>
                <ResourceLibrary />
              </ProtectedRoute>
            }
          />

          <Route path="/about" element={<div className="p-6">About Page</div>} />
          <Route path="/prayers" element={<div className="p-6">Prayers Page</div>} />
          <Route path="/events" element={<div className="p-6">Events Page</div>} />
          <Route path="/contact" element={<div className="p-6">Contact Page</div>} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      {!isAppPage && <Footer />}

    </div>
  );
}

export default App;