import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import config from "../config";
import "./Notes.css";


import { API, Storage } from "aws-amplify";

export default function Notes() {
  const { id } = useParams();
  const history = useHistory();
  const [note, setNote] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    function loadNote() {
      return API.get("notes", `/notes/${id}`);
    }

    async function onLoad() {
      try {
        const note = await loadNote();
        const { content } = note;

       

        setContent(content);
        setNote(note);
        console.log("this is notes")
        console.log(note)
      } catch (e) {
        console.log(e)
      }
    }

    onLoad();
  }, [id]);

 function validateForm() {
  return content.length > 0;
}

function formatFilename(str) {
  return str.replace(/^\w+-/, "");
}


async function handleSubmit(event) {
  let attachment;

  event.preventDefault();

 
}

async function handleDelete(event) {
  event.preventDefault();

  const confirmed = window.confirm(
    "Are you sure you want to delete this note?"
  );

  if (!confirmed) {
    return;
  }

}

return (
  <div className="Notes">
    {note && (
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        
        <button
          block
          type="submit"
        
          
        >
          Save
        </button>
        <button
        
          onClick={handleDelete}
        >
          Delete
        </button>
      </form>
    )}
  </div>
);
}