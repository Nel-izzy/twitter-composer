import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ visible, handleClose, body }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "350px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={visible} style={customStyles} onRequestClose={handleClose}>
      {body}
    </Modal>
  );
};

export default ModalComponent;
