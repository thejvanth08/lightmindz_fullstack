import { Logo, Profile, BotMessage, ChatInput } from "../components";
import { useState, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);

  const inputRef = useRef(null);

  const handleEnd = async () => {
    const userChat = conversation
      .filter((chat) => chat.role === "user")
      .map((chat) => chat.content);
    console.log(userChat);
    console.log("conversation ended");
    setConversation([]);

    try {
      // upload during termination
      const { data } = await axios.post("/users/chatbot/terminate", {
        userChat: userChat,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSend = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const inputEle = inputRef.current;
    const msg = inputEle.value;
    const updatedConversation = [
      ...conversation,
      {
        role: "user",
        content: msg,
      },
    ];

    setConversation(updatedConversation);
    inputEle.value = "";

    try {
      const { data } = await axios.post("/users/chatbot/message", {
        chat: updatedConversation,
      });

      const updatedBotChat = [
        ...updatedConversation,
        {
          role: "assistant",
          content: data.response,
        },
      ];
      setConversation(updatedBotChat);
    } catch (err) {
      console.log(err);
    }
  };

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
              <BotMessage key={index} {...msgItem}></BotMessage>
            ))}
        </div>
        <ChatInput
          handleSend={handleSend}
          handleEnd={handleEnd}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};
export default Chatbot;
