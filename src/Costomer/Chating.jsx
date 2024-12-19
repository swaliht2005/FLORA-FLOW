import React, { useState } from "react";
import smile from "../Costomer/costomerimgs/smile.png";
import camera from '../Costomer/costomerimgs/camera.png'
import ChatNavbar from '../Costomer/ChatNavbar'
function Chating() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatNavbar/>
      {/* Chat Messages */}
      <div className="flex flex-col flex-grow p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="self-start p-3 bg-blue-100 text-blue-900 rounded-lg max-w-[70%] break-words"
            >
              {message}
            </div>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        {/* Smile Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-4">
          <img src={smile} alt="Smile" className="w-6 h-6" />
        </div>

        {/* Input Box */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none "
          placeholder="Type your message..."
        />
        <img src={camera} alt="" />

        {/* Send Button */}
        <button
          onClick={sendMessage}
          className="ml-4 flex items-center justify-center px-6 py-3 text-white bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full transition-all duration-300 hover:bg-white/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current text-white transition-transform duration-300"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
            </svg>
          </div>
          <span className="ml-2">Send</span>
        </button>
      </div>
    </div>
  );
}

export default Chating;
