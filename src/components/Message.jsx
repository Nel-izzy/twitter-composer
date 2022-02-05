import React, { useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";
import more from "../images/more.png";
import { ComposerContext } from "../context/Context";
import Modal from "react-modal";

const Message = (props) => {
  const {
    deleteMessage,
    handleEditClick,
    handleEditFormSubmit,
    handleEditInputChange,
    currentMessage,
  } = useContext(ComposerContext);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "500px",
      height: "350px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    handleEditClick(props);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="row">
      <div className="col-md-5">
        <p>{props.content} </p>
      </div>
      <div className="col-md-2">
        <time>
          <Moment format="D MMM YYYY hh:mm">{props.date}</Moment>
        </time>
      </div>

      <div className="col-md-2">
        <span className="dropdown">
          <img
            src={more}
            className="dropdown-toggle more"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li className="extra">
              <button onClick={openModal}>Open Modal</button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <button
                  onClick={closeModal}
                  className=" btn btn-close btn-secondary"
                ></button>

                <form onSubmit={handleEditFormSubmit}>
                  <div className="modal-body">
                    <div>
                      <label htmlFor="tweettext" className="form-label">
                        Twitter Name @twitterhandle
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
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success tweet-btn">
                      Update
                    </button>
                    <span className="dropdown">
                      <button
                        className="btn btn-success dropdown-toggle create-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <input
                              type="datetime-local"
                              name="date"
                              value={currentMessage.date}
                              onChange={handleEditInputChange}
                            />
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Save draft
                          </a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </form>
              </Modal>
            </li>

            <li className="extra">
              <button
                className="btn btn-white"
                onClick={() => deleteMessage(props.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </span>
      </div>

      <div className="col-md-3"></div>
    </div>
  );
};

export default Message;
