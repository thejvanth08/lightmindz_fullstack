import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const useAppData = () => {
  return useContext(UserContext);
};

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
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