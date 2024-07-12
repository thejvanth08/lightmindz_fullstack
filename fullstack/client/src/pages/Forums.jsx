import { io } from "socket.io-client";
import { Logo, Profile, ChatInput, Message } from "../components";
import { useState, useEffect, useRef } from "react";
import { useAppData } from "../UserContext";

// URL of http server which is attached with web socket server
const URL = "http://localhost:3000";
const Forums = () => {
  const { user } = useAppData();
  const [socket, setSocket] = useState(null);
  const [conversation, setConversation] = useState([]);
  const inputRef = useRef(null);  

  useEffect(() => {
    const socket = io(URL);
    setSocket(socket);

    // getting msg from other clients
    socket.on("message", ({ username, msg }) => {
      setConversation((prev) => [...prev, {
        username: username,
        role: "other user",
        message: msg
      }]);
    })

    // on unmount -> terminate + store conversation to db 
    return () => {
      socket.disconnect();
      console.log(conversation);
    }
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    setConversation((prev) => [...prev, {
      username: user,
      role: "current user",
      message: inputVal
    }]);
    socket.emit("message", { username: user, msg: inputVal });
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
          {conversation.length > 0 &&
            conversation.map((msgItem, index) => (
              <Message key={index} {...msgItem}></Message>
            ))}
        </div>
        <ChatInput handleSend={handleSend} inputRef={inputRef} isForum={true} />
      </div>
    </div>
  );
}
export default Forums;