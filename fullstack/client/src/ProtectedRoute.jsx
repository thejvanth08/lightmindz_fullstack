import { useAppData } from "./UserContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { NavBar } from "./components";

const noNavList = ["/chatbot"];

const ProtectedRoute = (props) => {
  const location = useLocation();
  const noNavBarList = ["/details-one", "/details-two"];

  const hideNavBar = noNavBarList.includes(location.pathname); 

  const { id } = useAppData();
 
  return id ? (
    <div className="lg:flex lg:relative">
      {
        hideNavBar || 
        <aside className="w-64">
          <NavBar />
        </aside>
      }
      <div className="w-full px-2 pt-2 pb-20 lg:pt-4 lg:px-4">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
export default ProtectedRoute;