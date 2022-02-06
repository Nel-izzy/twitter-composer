import React from "react";
import Messages from "./components/Messages";
import Modal from "./components/AddModal";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Twitter Composer</h1>
      <Modal />

      <Messages />
    </div>
  );
};

export default App;
