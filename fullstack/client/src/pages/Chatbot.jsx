import { Logo, Back, Message } from "../components";
import historyIcon from "../assets/images/history-icon.png";
import sendIcon from "../assets/images/send-icon.png";
import { useState, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);

  const inputRef = useRef(null);
  
  const handleEnd = async () => {
    const userChat = conversation.filter((chat) => chat.role === "user").map((chat) => chat.message);
    console.log("conversation ended");
    setConversation([]);
    try {
      const { data } = await axios.post("/rasa/upload-chat", {
        userChat: userChat
      });

    } catch(err) {
      console.log(err);
    }

  };

  const handleSend = async (e) => {
    if(e) {
      e.preventDefault();
    }
    const inputEle = inputRef.current;
    const msg = inputEle.value;
    const updatedUserChat = [
      ...conversation,
      {
        role: "user",
        message: msg,
      },
    ];
    
    setConversation(updatedUserChat);
    inputEle.value = "";

    try {
      const { data } = await axios.post("/rasa/message", {
        message: msg
      });

      const updatedBotChat = [...updatedUserChat, { 
        role: "bot",
        message: data.response
      }]
      setConversation(updatedBotChat);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center overflow-y-hidden">
        <Back></Back>
        <Logo></Logo>
        <div>
          <img className="w-7 h-7" src={historyIcon} />
        </div>
      </div>
      <div className="max-w-[600px] h-auto mx-auto overflow-y-auto pb-12">
        <div className="">
          <div className="w-full mt-8">
            {conversation.length > 0 &&
              conversation.map((msgItem, index) => (
                <Message key={index} {...msgItem}></Message>
              ))}
          </div>
        </div>
        <form
          onSubmit={handleSend}
          className="fixed w-full max-w-[400px] px-1 flex justify-center bottom-[78px] left-1/2 -translate-x-1/2"
        >
          <button
            type="button"
            onClick={handleEnd}
            className="bg-primary text-white w-[10%] inline-flex justify-center items-center rounded-l-lg"
          >
            End
          </button>
          <input
            name="message"
            ref={inputRef}
            type="text"
            autoComplete="off"
            className="bg-violet-100 font-semibold w-[80%] px-2.5 outline-none"
          />
          <button
            type="submit"
            className="bg-primary w-[10%] inline-flex justify-center items-center rounded-r-lg"
          >
            <img src={sendIcon} className="w-10 h-10" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chatbot;
