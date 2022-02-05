import React, { useContext } from "react";
import { ComposerContext } from "../context/Context";
import Message from "./Message";

const Messages = () => {
  let { messages } = useContext(ComposerContext);
  messages = messages.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  return (
    <div>
      {messages.map((message) => (
        <Message
          key={message.id}
          content={message.content}
          date={message.date}
          id={message.id}
        />
      ))}
    </div>
  );
};

export default Messages;
