import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteListArchive({ notes, onDelete }) {
    return (
        <div>
            {
                notes.length > 0 ?  (
                    notes.map(note => (
                        <NoteItem
                            key={note.id}
                            onDelete={onDelete}
                            {...note}
                        />
                    ))
                ) : (
                    <p>No Archive Notes</p>
                )
            }
        </div>
    );
}

NoteListArchive.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteListArchive;