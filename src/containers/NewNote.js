import { API } from "aws-amplify";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import config from "../config";
import "./NewNote.css";




export default function NewNote() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }
  
  

async function handleSubmit(event) {
  event.preventDefault();

  
  try {
    await createNote({ content });
    console.log(API.get("notes", "/list"))
  } catch (e) {
      alert(e)
      console.log(e)
  }
}

function createNote(note) {
  return API.post("notes", "/create", {
    body: note
  });
}

  return (
    <div className="NewNote">
      <form >
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <button
      
          type="submit"
         
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}