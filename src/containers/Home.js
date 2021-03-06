import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { LinkContainer } from "react-router-bootstrap";
import { API }  from "aws-amplify";
import "./Home.css";



export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);


useEffect(
  () => {
  async function onLoad() {
    console.log(notes)
    if (!isAuthenticated) {
      return;
    }

    try {
      const notes = await loadNotes();
      setNotes(notes);
    } catch (e) {
      console.log(e);
    }


  }

  onLoad();
},[isAuthenticated]);

function loadNotes() {
  return API.get("notes", "/list");
}

function renderNotesList(notes) {
  return [{}].concat(notes).map((note, i) =>
    i !== 0 ? (
      <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
        <ListGroupItem header={note.content.trim().split("\n")[0]}>
          {"Created: " + new Date(note.createdAt).toLocaleString()}
        </ListGroupItem>
      </LinkContainer>
    ) : (
      <LinkContainer key="new" to="/new-note">
        <ListGroupItem>
          <h4>
            <b>{"\uFF0B"}</b> Create a new note
          </h4>
        </ListGroupItem>
      </LinkContainer>
    )
  );
}



  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        
        <p> thank you for staying with us through all the madness </p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>

{ renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
<div className="Home">
      { isAuthenticated ? renderNotes()  : renderLander() }
    </div>
  );
}