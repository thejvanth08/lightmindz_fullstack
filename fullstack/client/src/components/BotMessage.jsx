const BotMessage = ({ username, role, content }) => {
  return (
    <div
      className={`w-2/3 p-2 mb-3.5 rounded-lg ${
        role === "user"
          ? "bg-violet-400 text-white float-right"
          : "bg-violet-100 float-left"
      }`}
    >
      <p className="text-wrap">{content}</p>
    </div>
  );
};
export default BotMessage;
