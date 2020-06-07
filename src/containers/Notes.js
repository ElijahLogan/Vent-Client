import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API, Storage } from "aws-amplify";

export default function Notes() {
  const file = useRef(null);
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
       
        setNote(note.Item.content)
        console.log(note.Item.content)
      } catch (e) {
        alert(e)
      }
    }

    onLoad();
    console.log("cat")
  }, [id]);

  return (
    <div>
    <div className="Notes">
    <h1> Note Content </h1>
    </div>
    <div>
     <h2> {note} </h2>
    </div>
    </div>
  );
}