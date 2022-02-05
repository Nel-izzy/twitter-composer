import { useState, createContext } from "react";
import App from "../App";

export const ComposerContext = createContext();

const Context = () => {
  const [message, setMessage] = useState({
    content: "",
    date: "",
    id: "",
  });

  const [messages, setMessages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState({});

  const getRandomNumber = () => Math.floor(Math.random() * 1000);

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    let { content, date } = message;

    let diff = new Date().getTime() - Date.parse(date);

    if (content !== "" && date !== "" && diff < 0) {
      addMessage({ ...message, id: getRandomNumber() });

      setMessage({
        ...message,

        content: "",
        date: "",
      });
    }
  };

  const handleEditClick = (message) => {
    setIsEditing(true);
    setCurrentMessage({ ...message });
    console.log("clicked");
  };

  const handleUpdateMessage = (id, updatedMessage) => {
    const updatedItem = messages.map((message) =>
      message.id === id ? updatedMessage : message
    );
    setIsEditing(false);
    setMessages(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateMessage(currentMessage.id, currentMessage);
  };

  const handleEditInputChange = (e) => {
    setCurrentMessage({ ...currentMessage, [e.target.name]: e.target.value });
  };

  const deleteMessage = (id) =>
    setMessages(messages.filter((message) => message.id !== id));

  return (
    <div>
      <ComposerContext.Provider
        value={{
          message,
          setMessage,
          handleChange,
          messages,
          setMessages,
          handleCreate,
          deleteMessage,
          handleEditClick,
          handleEditFormSubmit,
          handleEditInputChange,
          currentMessage,
          isEditing,
        }}
      >
        <App />
      </ComposerContext.Provider>
    </div>
  );
};

export default Context;