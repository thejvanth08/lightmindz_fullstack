import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import  { Login, Signup, DetailsOne, DetailsTwo, Home, Journal, Test, Chatbot, SelfCare, Meditation, ChillMusic, YogaTrainer, Games, Forums, Insights, Profile, NotFound} from "./pages";
import { createContext } from "react";
import axios from "axios";

export const SampleContext = createContext();

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/details-one" element={<DetailsOne />}></Route>
        <Route path="details-two" element={<DetailsTwo />}></Route>
        <Route path="home">
          <Route index element={<Home />}></Route>
          <Route path="daily-journal" element={<Journal />}></Route>
          <Route path="test/:id" element={<Test />}></Route>
        </Route>
        <Route path="chatbot" element={<Chatbot />}></Route>
        <Route path="self-care">
          <Route index element={<SelfCare />}></Route>
          <Route path="meditation" element={<Meditation />}></Route>
          <Route path="chill-music" element={<ChillMusic />}></Route>
          <Route path="yoga-trainer" element={<YogaTrainer />}></Route>
          <Route path="games" element={<Games />}></Route>
        </Route>
        <Route path="forums" element={<Forums />}></Route>
        <Route path="insights" element={<Insights />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );

}

export default App;