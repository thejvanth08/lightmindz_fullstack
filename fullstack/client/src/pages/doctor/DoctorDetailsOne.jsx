import { Input } from "../../components";
import { useAppData } from "../../UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/profile-icon.png";
import uploadIcon from "../../assets/images/upload-icon.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useRef } from "react";
import * as yup from "yup";

const DoctorDetailsOne = () => {
  const { details, setDetails } = useAppData();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(profileIcon);
  const [base64Img, setBase64Img] = useState(null);
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

  const onSubmit = (formData) => {
    formData.profilePic = base64Img;
    setDetails(formData);
    navigate("/doctor-details-two");
    if (errors) console.log(errors);
  };

  const displayProfile = async () => {
    const file = fileRef.current.files[0];
    if (file) {
      try {
        const url = URL.createObjectURL(file);
        // setProfileImg(url); // This sets the profile image URL
        let base64string = await getBase64(file);
        // displaying img dynamically
        setProfileImg(url);
        // actual encoded data
        base64string = base64string.split(",")[1];
        // console.log(base64string);
        setBase64Img(base64string); // This sets the base64 image string
      } catch (error) {
        console.error("Error reading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

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
        <img src={profileImg} alt="" className="w-24 h-auto mx-auto" />
        <div className="flex justify-center">
          <label
            htmlFor="profile-img"
            className="inline-block bg-violet-200 text-center  px-3 py-1.5 mx-auto my-1.5 mt-3 rounded-lg"
          >
            Profile Picture <img src={uploadIcon} className="inline-block w-6 h-6 ml-2" />
          </label>
        </div>
        <input
          id="profile-img"
          type="file"
          accept="image/*"
          onChange={displayProfile}
          className="hidden"
          ref={fileRef}
        />
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

// onload, onerror -> async tasks - so need to return it as promise
// else it will return undefined  
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}