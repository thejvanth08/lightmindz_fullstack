import { Input } from "../components";
import { useAppData } from "../UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const DetailsOne = () => {
  const { setDetails } = useAppData();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullname: yup.string().min(3).max(20).required(),
    mobileNum: yup.number().min(10).max(10).required(),
    age: yup.number().min(10).max(100).required(),
    gender: yup.string().required()
  });

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDetails(data);
    navigate("/details-two");
    if(errors) console.log(errors);
  };

  return (
    <div className="pt-32">
      <h1 className="text-2xl font-bold lg:text-3xl text-center">
        Welcome buddy!👋
        <br /> Enter your Details
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] mx-auto mt-4">
        <Input type="text" placeholder="Full Name" {...register("fullname")}></Input>
        <Input type="number" placeholder="Mobile Number" {...register("mobileNum")}></Input>
        <Input type="number" placeholder="Age" {...register("age")}></Input>
        <select {...register("gender")} className="bg-violet-200 text-gray-500 font-semibold w-full px-3 py-1.5 my-1.5 outline-none rounded-lg cursor-pointer">
          <option className="hidden" value="">Gender</option>
          <option className="text-black" value="Male">Male</option>
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
}
export default DetailsOne;