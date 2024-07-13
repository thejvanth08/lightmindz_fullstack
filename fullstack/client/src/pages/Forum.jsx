import { io } from "socket.io-client";
import { Logo, Profile, ChatInput, Message } from "../components";
import { useState, useEffect, useRef } from "react";
import { useAppData } from "../UserContext";
import axios from "axios";

// URL of http server which is attached with web socket server
const URL = "http://localhost:3000";
const Forum = () => {
  const { user } = useAppData();
  const [socket, setSocket] = useState(null);
  const [conversation, setConversation] = useState([]);
  const inputRef = useRef(null);  

  const getChatHistory = async () => {
    try {
      const { data } = await axios.get("/users/forum/chat-history");
      if(data.status == "success") {
        console.log(data.data);
        setConversation(data.data);
      }
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const socket = io(URL);
    setSocket(socket);

    // restoring the messages from db
    getChatHistory();

    // getting msg from other clients
    socket.on("message", ({ username, msg }) => {
      const singleMsg = {
        username: username,
        role: "other user",
        message: msg,
      };
      storeMsg(singleMsg);
      setConversation((prev) => [...prev, singleMsg]);
    })

    // on unmount -> terminate + store conversation to db 
    return () => {
      socket.disconnect();
    }
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const singleMsg = {
      username: user,
      role: "current user",
      message: inputVal
    };
    storeMsg(singleMsg);
    setConversation((prev) => [...prev, singleMsg]);
    console.log(user);
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
export default Forum;

async function storeMsg(msg) {
  const { data } = await axios.post("/users/forum/message", msg);
  console.log(data);
}