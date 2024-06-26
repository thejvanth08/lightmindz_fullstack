import { io } from "socket.io-client";
import { Logo, Profile } from "../components";

// URL of http server which is attached with web socket server
const URL = "http://localhost:3000";
const Forums = () => {
  const socket = io(URL);
  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center overflow-y-hidden">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="">
        <div className="max-w-[600px] h-[70vh] p-2 mx-auto overflow-y-auto rounded-lg shadow-md shadow-violet-300 lg:max-w-[800px]">
          
        </div>
        {/* <ChatInput
          handleSend={handleSend}
          handleEnd={handleEnd}
          inputRef={inputRef}
        /> */}
      </div>
    </div>
  );
}
export default Forums;