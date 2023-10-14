import React from "react";
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive, onUnarchive, isArchive }) {
    return <button 
                onClick={isArchive ? () => onUnarchive(id) : () => onArchive(id)}
            >
                {isArchive ? 'Unarchive' : 'Archive'}
            </button>
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    isArchive: PropTypes.bool.isRequired,
}

export default ArchiveButton;