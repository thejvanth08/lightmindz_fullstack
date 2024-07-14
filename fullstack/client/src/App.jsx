import { Routes, Route } from "react-router-dom";
import UserProtectedRoute from "./UserProtectedRoute";
import DoctorProtectedRoute from "./DoctorProtectedRoute";
import  { Landing, UserLogin, UserSignup, DetailsOne, DetailsTwo, Home, Journal, Test, Chatbot, SelfCare, Therapist, Meditation, ChillMusic, YogaTrainer, Games, Forum, Insights, Profile, NotFound} from "./pages";
import { DoctorLogin, DoctorSignup, DoctorDetailsOne, DoctorDetailsTwo, DoctorHome } from "./pages/doctor";
import { createContext } from "react";
import axios from "axios";

export const SampleContext = createContext();

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      {/* user role */}
      <Route path="/user-login" element={<UserLogin />}></Route>
      <Route path="/user-signup" element={<UserSignup />}></Route>
      <Route path="/details-one" element={<DetailsOne />}></Route>
      <Route path="details-two" element={<DetailsTwo />}></Route>
      <Route path="/" element={<UserProtectedRoute />}>
        <Route path="home">
          <Route index element={<Home />}></Route>
          <Route path="daily-journal" element={<Journal />}></Route>
          <Route path="test/:id" element={<Test />}></Route>
        </Route>
        <Route path="chatbot" element={<Chatbot />}></Route>
        <Route path="self-care">
          <Route index element={<SelfCare />}></Route>
          <Route path="therapist" element={<Therapist />}></Route>
          <Route path="meditation" element={<Meditation />}></Route>
          <Route path="chill-music" element={<ChillMusic />}></Route>
          <Route path="yoga-trainer" element={<YogaTrainer />}></Route>
          <Route path="games" element={<Games />}></Route>
        </Route>
        <Route path="forum" element={<Forum />}></Route>
        <Route path="insights" element={<Insights />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
      {/* doctor role */}
      <Route path="/doctor-login" element={<DoctorLogin />}></Route>
      <Route path="/doctor-signup" element={<DoctorSignup />}></Route>
      <Route path="doctor-details-one" element={<DoctorDetailsOne />}></Route>
      <Route path="doctor-details-two" element={<DoctorDetailsTwo />}></Route>
      <Route path="/" element={<DoctorProtectedRoute />}>
        <Route path="doctor/Home" element={<DoctorHome />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );

}

export default App;