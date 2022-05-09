import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.user);

  return user.role === "admin" ? children : <Navigate to="/login" />;
}
