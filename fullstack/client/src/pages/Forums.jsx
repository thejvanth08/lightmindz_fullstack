import { io } from "socket.io-client";
import { Logo, Profile, ChatInput } from "../components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// URL of http server which is attached with web socket server
const URL = "http://localhost:3000";
const Forums = () => {
  const [socket, setSocket] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const socket = io(URL);
    setSocket(socket);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    console.log(inputVal);
    inputRef.current.value = "";
  }


  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center overflow-y-hidden">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="">
        <div className="max-w-[600px] h-[70vh] p-2 mx-auto overflow-y-auto rounded-lg shadow-md shadow-violet-300 lg:max-w-[800px]">
          
        </div>
        <ChatInput
          handleSend={handleSend}
          inputRef={inputRef}
          isForum={true}
        />
      </div>
    </div>
  );
}
export default Forums;