import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { id } = useContext(UserContext);

  return (
    id ? <Outlet /> : <Navigate to="/login" />
  )
}
export default ProtectedRoute;