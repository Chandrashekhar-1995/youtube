import userIcon from "../static/userIcon.png";

const ChatMessages = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="user icon"
        src={userIcon}
        className=" h-8"
      />
      <span className="text-slate-500 px-2">{name}</span>
      <span >{message}</span>
    </div>
  )
}

export default ChatMessages