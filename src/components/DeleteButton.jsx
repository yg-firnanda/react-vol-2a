import React from "react";
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete}) {
    return <button
                onClick={() => onDelete(id)}
            >
                DELETE
            </button>
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;