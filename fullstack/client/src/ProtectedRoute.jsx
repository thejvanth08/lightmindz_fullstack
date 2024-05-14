import { useAppData } from "./UserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { id } = useAppData();
  console.log(id);
  return (
    id ? <Outlet /> : <Navigate to="/login" />
  )
}
export default ProtectedRoute;