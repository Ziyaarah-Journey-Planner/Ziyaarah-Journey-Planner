import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAuth }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}