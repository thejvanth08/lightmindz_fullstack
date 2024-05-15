import { Logo, Back } from "../components";
import historyIcon from "../assets/images/history-icon.png";
import sendIcon from "../assets/images/send-icon.png";
import { useState, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);

  const inputRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault();
    const inputEle = inputRef.current;
    const msg = inputEle.value;
    setConversation(() => [...conversation, { 
      role: "user", 
      message: msg }]);
    inputEle.value = "";
    try {
      const { data } = await axios.post("/rasa/message", {
        message: msg
      });
      console.log(data.response);
      setConversation(() => [...conversation, { 
        role: "bot",
        message: data.response
      }]);
    } catch (err) {
      console.log(err);
    }


  }

  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center">
        <Back></Back>
        <Logo></Logo> 
        <div>
          <img 
            className="w-7 h-7"
            src={historyIcon}/>
        </div>
      </div>
      <div>
        <div>
          {
            conversation.length > 0 && 
            conversation.map(({ role, message }) => (
              <div className="w-20 h-auto bg-violet-300">{message}</div>
            ))
          }
        </div>
        <form onSubmit={handleSend} className="fixed w-[400px] flex justify-center bottom-[78px] left-1/2 -translate-x-1/2">
          <input name="message" ref={inputRef} type="text" className="bg-violet-100 font-semibold w-[85%] px-2.5 rounded-l-lg outline-none" />
          <button type="submit" className="bg-primary w-[12%] inline-flex justify-center items-center rounded-r-lg">
            <img src={sendIcon} 
              className="w-10 h-10"/>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chatbot;
