import React, { useContext, useState } from "react";
import { ComposerContext } from "../context/Context";
import ModalComponent from "./ModalComponent";

const AddModal = () => {
  const { handleChange, handleCreate, error } = useContext(ComposerContext);

  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  const modalBody = (
    <div className="modal-body">
      <button
        onClick={closeModal}
        className=" btn btn-close btn-secondary mb-3"
      ></button>
      <h5>Compose Tweet</h5>
      <hr />
      {error && (
        <div>
          <p className="text-danger">{error}</p>
          <hr />
        </div>
      )}
      <form onSubmit={handleCreate}>
        <div className="mb-3">
          <label htmlFor="tweetdate" className="form-label">
            Pick Date & Time
          </label>
          <input
            type="datetime-local"
            name="date"
            id="tweetdate"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tweettext" className="form-label">
            Twitter Name @twitterusername
          </label>
          <textarea
            className="form-control"
            name="content"
            id="tweettext"
            placeholder="Begin your Tweet to  Schedule"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-primary tweet-btn">
            Schedule Tweet
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary my-3">
        Schedule Tweet
      </button>
      {modalVisible && (
        <ModalComponent
          visible={modalVisible}
          handleClose={closeModal}
          body={modalBody}
        />
      )}

      <hr />
    </div>
  );
};

export default AddModal;
