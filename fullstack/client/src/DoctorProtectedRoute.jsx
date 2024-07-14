import { useAppData } from "./UserContext";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "./components";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const DoctorProtectedRoute = (props) => {
  console.log("hi");
  const navigate = useNavigate();

  const location = useLocation();
  const noNavBarList = ["/doctor-details-one", "/doctor-details-two"];

  const hideNavBar = noNavBarList.includes(location.pathname);

  const { id, setId, user, setUser, role, setRole } = useAppData();

  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    if (cookies["token"]) {
      const token = cookies["token"].trim();
      // verify the jwt and set the id
      axios
        .post("/doctors/verify", { token: token })
        .then(({ data }) => {
          if (data.status == "success") {
            // console.log(data.payload);
            setId(data.payload.id);
            setUser(data.payload.name);
            setRole(data.payload.role);
            // console.log(data.payload.name);
            // if there is any state stored in the location
            // it will be useful in test page, the state must be sent while refreshing the page
            if (location.state) {
              navigate(location.pathname, {
                state: location.state,
              });
            } else {
              navigate(location.pathname);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return id && role == "doctor" ? (
    <div className="lg:flex lg:relative">
      {hideNavBar || (
        <aside className="w-64">
          <NavBar />
        </aside>
      )}
      <div className="w-full px-2 pt-2 lg:pt-4 lg:px-4">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/doctor-login" />
  );
};
export default DoctorProtectedRoute;
