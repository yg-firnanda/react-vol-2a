import React from "react";

function NoteDetail({ title, body }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default NoteDetail;