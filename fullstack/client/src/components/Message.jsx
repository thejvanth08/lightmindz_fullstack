const Message = ({ username, role, message }) => {

  return (
    <div
      className={`w-2/3 p-2 mb-3.5 rounded-lg ${
        role === "current user"
          ? "bg-violet-400 text-white float-right"
          : "bg-violet-100 float-left"
      }`}
    >
      <p className="text-wrap">{username}: {message}</p>
    </div>
  );
}
export default Message;