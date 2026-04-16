function App() {
  const location = useLocation();
  const user = localStorage.getItem("user");

  const isDashboard = location.pathname.startsWith("/resources");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {!isDashboard && <Navbar />}

      {location.pathname === "/" && !user && <Hero />}

      <main className="flex-1 container mx-auto px-4 py-8">
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
            path="/resources"
            element={
              <ProtectedRoute requireAuth={true}>
                <ResourceLibrary />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      {!isDashboard && <Footer />}

    </div>
  );
}