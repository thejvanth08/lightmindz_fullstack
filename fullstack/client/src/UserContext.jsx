import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState("123");

  const data = {
    user: user,
    setUser: setUser,
    id : id,
    setId
  };

  return (
    <div>
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
    </div>
  );
}

export default ContextProvider;