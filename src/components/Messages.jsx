import React, { useContext } from "react";
import { ComposerContext } from "../context/Context";
import Message from "./Message";

const Messages = () => {
  const { messages } = useContext(ComposerContext);
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
