import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div key={id}>
            <Link to={`/notes/${id}`}>
                <h3>{title}</h3>
            </Link>
            <h5>{showFormattedDate(createdAt)}</h5>
            <p>{body}</p>
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItem;