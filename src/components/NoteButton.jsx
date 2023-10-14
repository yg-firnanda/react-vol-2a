import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import PropTypes from 'prop-types';

function NoteButton({ id, onDelete, onArchive, onUnarchive,isArchive }) {
    return (
        <div>
            <ArchiveButton
                id={id}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                isArchive={isArchive}
            />
            <DeleteButton
                id={id}
                onDelete={onDelete}
            />
        </div>
    )
}

NoteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    isArchive: PropTypes.bool.isRequired,
}

export default NoteButton;