import { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/store/chatSlice";
import generateRandomName from "../utils/helper";



const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
      
      dispatch(addMessages(
        {
          name:generateRandomName(),
        message:"Test message 😁😁😁",
        }
      ))
    }, 2000);

    return ()=> clearInterval(i)

  },[])

  return (
    <div className='mx-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
      {chatMessages.map((c, index)=> <ChatMessages
        key={index}
        name={c.name}
        message={c.message}
      />)}
    </div>
  )
}

export default LiveChat