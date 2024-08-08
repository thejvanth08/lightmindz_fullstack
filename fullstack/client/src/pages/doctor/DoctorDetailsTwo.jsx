import { useState } from "react";
import { Input } from "../../components";
import { useAppData } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const DoctorDetailsTwo = () => {
  const { details, setDetails } = useAppData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    e.preventDefault();
    console.log("two", formData);
    try {
      const { data } = await axios.post("/doctors/add-details", formData);
      console.log(data);
      navigate("/doctor/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4">
      <div className="max-w-[450px] h-auto bg-violet-200 px-5 py-8 mx-auto mt-32 rounded-lg">
        <h1 className="text-2xl font-bold lg:text-3xl text-center">
          Enter Your Professional Details
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[430px] mx-auto mt-6">
          <select
            {...register("professionalTitle")}
            className="bg-violet-200 text-gray-500 font-semibold w-full px-3 py-1.5 my-1.5 outline-none rounded-lg cursor-pointer"
          >
            <option className="hidden max-w-[400px]" value="">
              Professional Title
            </option>
            <option className="text-black max-w-[400px]" value="Psychiatrist">
              Psychiatrist
            </option>
            <option value="Psychologist">Psychologist</option>
          </select>
          <Input
            type="text"
            placeholder="Specializations"
            {...register("specializations")}
          ></Input>
          <Input
            type="text"
            placeholder="License Number"
            {...register("licenseNo")}
          ></Input>
          <Input
            type="text"
            placeholder="Issuing Authority"
            {...register("issuingAuthority")}
          ></Input>
          <Input
            type="text"
            placeholder="License Expiry Date"
            {...register("licenseExpiryDate")}
          ></Input>
          <Input
            type="number"
            placeholder="Years of Experience"
            {...register("yearsOfExperience")}
          ></Input>
          <button
            type="submit"
            className="block w-40 bg-primary text-white font-bold mt-4 mx-auto rounded-lg py-2 cursor-pointer"
          >
            Finish
          </button>
        </form>
      </div>
    </div>
  );
};
export default DoctorDetailsTwo;
