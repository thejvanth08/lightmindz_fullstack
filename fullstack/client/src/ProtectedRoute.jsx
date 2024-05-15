import { useAppData } from "./UserContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { NavBar } from "./components";

const noNavList = ["/chatbot"];

const ProtectedRoute = (props) => {
  const { id } = useAppData();
 
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