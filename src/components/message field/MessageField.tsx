"use client";

import { FC, useState } from "react";

const MessageField: FC = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Logic to send the message
    // console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-200">
      {/* Container for the input and buttons */}
      <div className="flex items-center w-full border rounded-lg border-gray-300 focus-within:border-blue-500">
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          {/* Share document button */}
          📎
        </button>
        <input
          type="text"
          placeholder="Send your message"
          className="flex-grow p-2 mx-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          {/* Emoji button */}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </button>

        <button
          onClick={handleSend}
          className="p-2 text-white rounded-none focus:outline-none"
          style={{ backgroundColor: "#002360" }}
        >
          {/* Airplane Icon for Send Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.232 8.12L3 9m0 0L5.232 8.12M3 9l18 0m0 0L3 9m0 0l2.4 10.005a.8.8 0 00.894.622l10.382-2.076a.8.8 0 00.557-.555L21 3.4a.8.8 0 00-.894-1.004L3 9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageField;
