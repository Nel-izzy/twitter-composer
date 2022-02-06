import React, { useContext, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";

import { ComposerContext } from "../context/Context";

import ModalComponent from "./ModalComponent";

const Message = (props) => {
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  const {
    deleteMessage,
    handleEditClick,
    handleEditFormSubmit,
    handleEditInputChange,
    currentMessage,
    setError,
  } = useContext(ComposerContext);

  const truncate = (str, limit) =>
    str.length > limit ? str.slice(0, limit) + "..." : str;

  const modalBodyEdit = (
    <div className="modal-body">
      <h5>Recompose Tweet</h5>
      <button
        onClick={closeModalEdit}
        className=" btn btn-close btn-secondary"
      ></button>
      <form onSubmit={handleEditFormSubmit}>
        <div>
          <label htmlFor="tweetdate" className="form-label">
            Pick Date & Time
          </label>
          <input
            type="datetime-local"
            name="date"
            id="tweetdate"
            className="form-control"
            value={currentMessage.date}
            onChange={handleEditInputChange}
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
            value={currentMessage.content}
            onChange={handleEditInputChange}
          ></textarea>
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-info tweet-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );

  function openModalEdit() {
    setModalVisibleEdit(true);
    handleEditClick(props);
  }

  function closeModalEdit() {
    setModalVisibleEdit(false);
    setError("");
  }

  return (
    <div className="row">
      <div className="col-xs-8 col-sm-5 col-md-5 col-lg-4">
        <p>{truncate(props.content, 60)} </p>
      </div>
      <div className="col-xs-2  col-sm-3 col-md-3 col-lg-2">
        <time>
          <Moment format="D MMM YYYY HH:mm">{props.date}</Moment>
        </time>
      </div>

      <div className="col-xs-2  col-sm-2 col-md-2 col-lg-2">
        <button onClick={openModalEdit} className="btn btn-warning  tweet-btn">
          Edit
        </button>

        {modalVisibleEdit && (
          <ModalComponent
            visible={modalVisibleEdit}
            handleClose={closeModalEdit}
            body={modalBodyEdit}
          />
        )}
      </div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <button
          onClick={() => deleteMessage(props.id)}
          className="btn btn-danger  tweet-btn"
        >
          Delete
        </button>
      </div>

      <hr className="mt-2" />
    </div>
  );
};

export default Message;
