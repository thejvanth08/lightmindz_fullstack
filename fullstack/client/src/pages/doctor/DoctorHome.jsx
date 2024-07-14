import {
  Logo,
  Profile,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../../UserContext";
import axios from "axios";

const DoctorHome = () => {
  const navigate = useNavigate();
  const { user } = useAppData();

  return (
    <div className="w-full pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center lg:text-3xl">
          Welcome back, {user}!
        </h1>
        
        <section className="mt-3 lg:mt-8">
          <h2 className="text-lg font-semibold text-center lg:text-xl">
            
          </h2>
          <div className="flex max-w-[700px] justify-evenly overflow-x-auto mt-2 mx-auto lg:mt-4 scroll-style">
           
          </div>
        </section>

      </div>
    </div>
  );
};
export default DoctorHome;
