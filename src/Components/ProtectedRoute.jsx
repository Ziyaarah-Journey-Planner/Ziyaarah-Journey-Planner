import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, requireAuth }) {
  const user = localStorage.getItem("user");
  const location = useLocation();

  if (requireAuth && !user) {
    if (location.pathname !== "/login") {
      return <Navigate to="/login" replace />;
    }
  }

  if (!requireAuth && user) {
    if (location.pathname !== "/resources") {
      return <Navigate to="/resources" replace />;
    }
  }

  return children;
}