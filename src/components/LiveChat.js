import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/store/chatSlice";
import generateRandomName, {generateRandomMessage } from "../utils/helper";



const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");
      
      dispatch(addMessages(
        {
          name:generateRandomName(),
        message:generateRandomMessage(20),
        }
      ))
    }, 2000);

    return ()=> clearInterval(i)

  },[])

  return (
    <>
    <div className='mx-2 w-full h-[600px] p-2 border bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
        {chatMessages.map((c, index) => <ChatMessages
        key={index}
        name={c.name}
        message={c.message}
      />)}
      </div>
      </div>

      <form
      className="w-full p-2 ml-2 border rounded-b-lg bg-slate-100"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("chat Submited", liveMessage);
        dispatch(addMessages(
          {
          name:"Chandra shekhar",
          message:liveMessage,
          }
        ))
    }}>
      <input
            type="text"
            placeholder="Chat..."
            className="px-5 w-4/6 border border-gray-400 p-2 rounded-full"
            value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
          />
          <button className="border border-gray-400 py-2 px-5 mx-4 rounded-full">Send</button>
      </form>
      </>
  )
}

export default LiveChat