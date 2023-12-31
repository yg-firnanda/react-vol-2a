import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteListActive({ notes, onDelete, onArchive }) {
    return (
        <div>
            {
                notes.length > 0 ? (
                    notes.map(note => (
                        <NoteItem
                            key={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note}
                        />
                    ))
                ) : (
                    <p>No Active Notes</p>
                )
            }
        </div>
    )
}

NoteListActive.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default NoteListActive;