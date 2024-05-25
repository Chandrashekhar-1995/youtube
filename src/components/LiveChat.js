import { useEffect } from "react";
import ChatMessages from "./ChatMessages";

const LiveChat = () => {

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
    }, 2000);

    return ()=> clearInterval(i)

  },[])

  return (
    <div className='mx-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg'>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
      <ChatMessages name="Chandra Shekhar" message="Test message 😁😁😁"/>
    </div>
  )
}

export default LiveChat