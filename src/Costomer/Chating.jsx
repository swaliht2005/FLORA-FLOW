import React, { useState } from "react";
import smile from "../assets/images/smile.png";
import camera from "../assets/images/camera.png";
import ChatNavbar from "../Costomer/ChatNavbar";

function Chating() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(messages[index]);
  };

  const saveEdit = () => {
    const newMessages = [...messages];
    newMessages[editingIndex] = editingText;
    setMessages(newMessages);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatNavbar />
      {/* Chat Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="h-auto w-auto max-w-[70%] self-start p-3 bg-blue-100 text-blue-900 rounded-lg break-words flex items-center relative"
            >
              {index === editingIndex ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none w-full"
                />
              ) : (
                <span className="text-sm sm:text-base">{message}</span>
              )}
              <div className="absolute top-0 right-0 flex space-x-2">
                {index === editingIndex ? (
                  <button
                    onClick={saveEdit}
                    className="text-green-500 text-xs sm:text-sm"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(index)}
                    className="text-blue-500 text-xs sm:text-sm"
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => deleteMessage(index)}
                  className="text-red-500 text-xs sm:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M10 2L9 3H3v2h1.109l1.783 15.255c.13.987.986 1.737 1.981 1.737H16.124c.995 0 1.852-.75 1.983-1.737L19.891 5H21V3h-6l-1-1H10zm-3.875 3h11.75L16.124 20H7.875L6.125 5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

 {/* Input Field */}
 <div className="flex items-center p-4 bg-white border-t border-gray-300">
        {/* Smile Icon */}
        <div className=" sm:flex items-center justify-center  w-10 h-10 rounded-full bg-gray-100 sm:mr-4">
          <img src={smile} alt="Smile" className="w-6 h-6" />
        </div>

        {/* Input Box */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none text-sm  sm:text-base placeholder-gray-400"
          placeholder="Type your message..."
        />

        {/* Camera Icon */}
        <div className=" sm:flex items-center justify-center sm:ml-2">
          <img src={camera} alt="Camera" className="w-6 h-6" />
        </div>

        {/* Send Button */}
        <button
          onClick={sendMessage}
          className="ml-2 sm:ml-4 flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-white bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current text-white transition-transform duration-300"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chating;
