import React, { useState } from "react";

export default function InputBox({ cancelInputbox, add }) {

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");


  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center  input-box">
        <div className="input-card p-3">
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="title">want to do</label>
            <input
              type="text"
              className="form-control"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
          </div>

          <div className="buttons d-flex justify-content-between mt-2">
            <button
              className="btn btn-success"
              onClick={() => {
                add({ title, content });
                cancelInputbox(false);
              }}
            >
              confirm
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                cancelInputbox(false);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
