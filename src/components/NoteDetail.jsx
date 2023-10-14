import React from "react";
import NoteButton from "./NoteButton";
import { showFormattedDate } from "../utils";
import PropTypes from 'prop-types';

function NoteDetail({ id, title, body, createdAt, onDelete, onArchive, onUnarchive, archived }) {
    return (
        <div>
            <h3>{title}</h3>
            <h5>{showFormattedDate(createdAt)}</h5>
            <p>{body}</p>
            <NoteButton
                id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                isArchive={archived}
            />
        </div>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default NoteDetail;