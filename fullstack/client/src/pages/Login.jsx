import loginImg from "../assets/images/login.svg";
import {Logo, Input} from "../components";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
  });

  const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    const { data } = await axios.post("/login", formData);
    console.log("Errors", errors);
  }

  return (
    <main className="w-full h-screen flex items-center">
      <div className="hidden bg-primary w-1/2 h-full lg:flex justify-center items-center">
        <img src={loginImg} alt="" className="w-[400px] h-[400px]" />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
        <Logo></Logo>
        <h1 className="text-2xl font-bold lg:text-3xl mb-8">
          Login into your Account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[300px] mb-20"
        >
          <Input type="email" placeholder="Email" {...register("email")} />
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <button
            type="submit"
            className="bg-primary text-white font-bold mt-2 mb-1 rounded-lg py-2 cursor-pointer"
          >
            Login
          </button>
          <p className="text-center">
            Don't have an Account?&nbsp;
            <span
              onClick={() => navigate("/signup")}
              className="text-primary font-semibold cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
export default Login;