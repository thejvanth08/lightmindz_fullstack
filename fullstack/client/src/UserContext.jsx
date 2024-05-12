import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    // Check if user ID is stored in localStorage
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setId(storedId);
    } else {
      console.log("userId in localStorage is not found");
    }
  }, []);

  const data = {
    user: user,
    setUser: setUser,
    id : id,
    setId
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;