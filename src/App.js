import "./bootstrap.css";
import "./App.css";
import React, { useEffect, useState } from "react";

import TodoCard from "./Componants/TodoCard";

import InputBox from "./Componants/InputBox";

function App() {
  const [notes, setnotes] = useState([]);

  const [showInput, setshowInput] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("notes"))) {
      setnotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (data) => {
    setnotes([...notes, data]);
  };

  const deleteNote = (idx) => {
    setnotes(
      notes.filter((ele, i) => {
        return idx !== i;
      })
    );
  };

  const cancelInputbox = () => {
    setshowInput(false);
  };

  return (
    <>
      <>
        <header className="header  mt-2">
          <div className="title row">
            <h1>
              {" "}
              <span style={{ color: "#2e2eee" }}>M</span>y{" "}
              <span style={{ color: "#ee3939d4" }}>T</span>odo 
              <span style={{ color: "#c000ff" }}>L</span>ist
            </h1>
          </div>

          <div className="d-block">
            <button
              className="btn btn-primary"
              onClick={() => setshowInput(true)}
            >
              create task
            </button>
          </div>
        </header>
        <div>
          <h4 className="text-end p-2">Total tasks : {notes.length}</h4>
        </div>

        <div className="container-fluid">
          <div className="row p-4">
            {notes.length !== 0 ? (
              notes.map((note, idx) => {
                return (
                  <TodoCard
                    title={note.title}
                    deleteNote={deleteNote}
                    index={idx}
                    key={idx}
                    content={note.content}
                  />
                );
              })
            ) : (
              <div>
                <h1> not created any task yet!!</h1>
              </div>
            )}
          </div>
        </div>

        {showInput ? (
          <InputBox cancelInputbox={cancelInputbox} add={addNote} />
        ) : (
          <div></div>
        )}
      </>
    </>
  );
}

export default App;
