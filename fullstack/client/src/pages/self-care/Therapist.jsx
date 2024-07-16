import { Logo, Profile } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

const Therapist = () => {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    const getAvailableDoctors = async () => {
      const { data } = await axios.get("/doctors/available-list");
      console.log(data.data);
      setDoctors(data.data);
    }
    getAvailableDoctors();
  }, []);

  return (
    <div className="px-2.5 py-2 pb-20 lg:pb-10">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <section className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="text-xl font-bold text-center lg:text-2xl">
          Mental Health Professionals
        </h1>
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-center">
            List of Professionals
          </h2>
          <div>
            {/* {
              doctors.map((doctor) => <div>

              </div>)
            } */}
          </div>
        </div>
        
      </section>
    </div>
  );
}
export default Therapist