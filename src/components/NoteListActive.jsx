import React from "react";
import NoteItem from "./NoteItem";
import { getActiveNotes } from "../utils/local-data"; 

function NoteListActive() {
    const notes = getActiveNotes();
    return (
        notes.map(note => (
            <NoteItem key={note.id} {...note} />
        ))
    )
}

export default NoteListActive;