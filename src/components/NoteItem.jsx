import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ id, title, body }) {
    return (
        <div key={id}>
            <Link to={`/notes/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{body}</p>
        </div>
    )
}

export default NoteItem;