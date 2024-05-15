import { useAppData } from "./UserContext";
import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "./components";

const ProtectedRoute = () => {
  const { id } = useAppData();
  console.log(id);
  return id ? (
    <div>
      <Outlet />
      <NavBar/>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
export default ProtectedRoute;