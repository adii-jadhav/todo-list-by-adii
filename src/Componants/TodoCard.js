import React, { useState, useEffect } from "react";
import { AiFillDelete } from 'react-icons/ai';

export default function TodoCard({ title, content, deleteNote, index }) {

  const [color, setcolor] = useState("#2e2eee");

  useEffect(() => {
    const colors = [
      "#2e2eee",
      "#60ff27d4",
      "#ffeb27d4",
      "#ee3939d4",
      "#fe51f4d4",
    ];
    const index = Math.floor(Math.random() * 5);
    setcolor(colors[index]);
  }, []);

  const handledelete = ()=>{
    deleteNote(index);
  }
  return (
    <>
   
      <div
        className="card col-md-3 mt-4 shadow-lg"
        style={{ borderTopColor: color }}
      >
        <div className="title my-1">
          <span className="px-3 py-1">{title}</span>
        </div>

        <div className="content my-md-4">
          <p>{content}</p>
        </div>

        <div className="edits mt-3 d-flex justify-content-end">
        
          <div
            className=" icon-box mx-2"
            onClick={handledelete}
          >
          <AiFillDelete color={color} size="2rem"/>
          </div>
        </div>
      </div>
    </>
  );
}
