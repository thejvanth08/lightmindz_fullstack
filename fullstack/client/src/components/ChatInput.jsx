import sendIcon from "../assets/images/send-icon.png";

const ChatInput = ({ handleSend, handleEnd, inputRef }) => {
  return (
    <form
      onSubmit={handleSend}
      className="w-full max-w-[400px] flex justify-center mx-auto mt-4 shadow-md shadow-violet-300 rounded-lg lg:max-w-[500px]"
    >
      <button
        type="button"
        onClick={handleEnd}
        className="bg-primary text-white w-[10%] py-1 inline-flex justify-center items-center rounded-l-lg"
      >
        End
      </button>
      <input
        name="message"
        ref={inputRef}
        type="text"
        autoComplete="off"
        className="bg-violet-100 font-semibold w-[80%] px-2.5 py-1 outline-none lg:text-lg"
      />
      <button
        type="submit"
        className="bg-primary w-[10%] inline-flex justify-center items-center rounded-r-lg lg:py-0.5"
      >
        <img src={sendIcon} className="w-10 h-10" />
      </button>
    </form>
  );
}
export default ChatInput;