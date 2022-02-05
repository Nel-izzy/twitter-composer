import React, { useContext } from "react";
import { ComposerContext } from "../context/Context";

const Modal = () => {
  const { handleChange, handleCreate } = useContext(ComposerContext);

  const clearMessage = () => {
    document.getElementById("tweettext").value = "";
    document.getElementById("tweetdate").value = "";
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#tweetmodal"
      >
        New Tweet
      </button>

      <div
        className="modal fade"
        id="tweetmodal"
        tabIndex="-1"
        aria-labelledby="tweetLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tweetLabel">
                Compose Mode
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={clearMessage}
              ></button>
            </div>
            <form onSubmit={handleCreate}>
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
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={clearMessage}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary tweet-btn">
                  Tweet
                </button>
                <span className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle create-toggle"
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
                          id="tweetdate"
                          onChange={handleChange}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
