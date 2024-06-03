import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const useAppData = () => {
  return useContext(UserContext);
};

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  // user details
  const [details, setDetails] = useState({});
  // user mood -> happy, sad,..
  const [mood, setMood] = useState(null);

  const data = {
    user: user,
    setUser: setUser,
    id : id,
    setId: setId,
    details: details,
    setDetails: setDetails,
    // mood: mood,
    // setMood: setMood
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
}


export default ContextProvider;