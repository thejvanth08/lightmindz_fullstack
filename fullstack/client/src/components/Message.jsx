const Message = ({ role, message }) => {
  return <div className={`w-2/3 p-2 mb-3.5 rounded-lg ${role === "user" ? "bg-violet-100 float-right" : "bg-violet-300 float-left"}`}>
  {message}
  </div>;
}
export default Message;