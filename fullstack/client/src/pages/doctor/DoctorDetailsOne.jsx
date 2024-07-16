import { Input } from "../../components";
import { useAppData } from "../../UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/profile-icon.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useRef } from "react";
import * as yup from "yup";

const DoctorDetailsOne = () => {
  const { setDetails } = useAppData();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(profileIcon);
  const fileRef = useRef(null);


  const schema = yup.object().shape({
    fullname: yup.string().min(3).max(20).required(),
    mobileNum: yup.number().min(10).max(10).required(),
    age: yup.number().min(10).max(100).required(),
    gender: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.profilePicture);
    setDetails(data);
    navigate("/doctor-details-two");
    if (errors) console.log(errors);
  };

  const displayProfile = () => {
     console.log(fileRef.current.files[0]);
     const file = fileRef.current.files[0];
     if (file) {
       const url = URL.createObjectURL(file);
       setProfileImg(url);
     }
  }
  return (
    <div className="pt-32">
      <h1 className="text-2xl font-bold lg:text-3xl text-center">
        Welcome Doctor!👋
        <br /> Enter your Details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[400px] mx-auto mt-4"
      >
        <img src={profileImg} alt="" 
          className="w-20 h-auto" />
        <label htmlFor="profile-img">Upload Your Profile Photo</label>
        <input id="profile-img" type="file" accept="image/*" ref={fileRef} onChange={displayProfile}
          className="hidden" />
        <Input
          type="text"
          placeholder="Full Name"
          {...register("fullname")}
        ></Input>
        <Input
          type="number"
          placeholder="Mobile Number"
          {...register("mobileNum")}
        ></Input>
        <Input type="number" placeholder="Age" {...register("age")}></Input>
        <select
          {...register("gender")}
          className="bg-violet-200 text-gray-500 font-semibold w-full px-3 py-1.5 my-1.5 outline-none rounded-lg cursor-pointer"
        >
          <option className="hidden max-w-[400px]" value="">
            Gender
          </option>
          <option className="text-black max-w-[400px]" value="Male">
            Male
          </option>
          <option value="Female">Female</option>
        </select>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold mt-2 mb-1 rounded-lg py-2 cursor-pointer"
        >
          Next
        </button>
      </form>
    </div>
  );
};
export default DoctorDetailsOne;
