import signupImg from "../assets/images/signup.svg";
import { Logo, Input } from "../components";
import { useAppData } from "../UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const UserSignup = () => {
  const navigate = useNavigate();
  const { setId, setRole } = useAppData();

   const schema = yup.object().shape({
     email: yup.string().email().required(),
     password: yup.string().min(3).max(20).required(),
     confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required()
   });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/auth/signup", { email, password, role: "user" });
      const userId = data.id;
      setId(userId);
      setRole(data.role);
      navigate("/details-one");
    } catch(err) {
      // if account already exists
      // console.log(err.response?.data?.error);
      // alert(err.response?.data?.error);
      console.log(err);
    }
  };

  return (
    <main className="w-full h-screen flex items-center">
      <div className="hidden bg-primary w-1/2 h-full lg:flex justify-center items-center">
        <img src={signupImg} alt="" className="w-[400px] h-[400px]" />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
        <Logo></Logo>
        <h1 className="text-2xl font-bold lg:text-3xl mb-8">
          Create your new Account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[300px] mb-20"
        >
          <Input type="email" placeholder="Email" {...register("email")} />
          <Input
            type="password"
            placeholder="Create Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <p></p>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
          <button
            type="submit"
            className="bg-primary text-white font-bold mt-2 mb-1 rounded-lg py-2 cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?&nbsp;
            <span
              onClick={() => navigate("/user-login")}
              className="text-primary font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </main>
  );
};
export default UserSignup;
