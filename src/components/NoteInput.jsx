import React, { useState } from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const NoteInput = () => {
    const [state, setState] = useState({
        title: '',
        body: ''
    });

    const navigate = useNavigate();

    const onTitleChangeEventHandler = (event) => {
        const { value } = event.target;
        setState((prevState) => ({ ...prevState, title: value }));
    }

    const onBodyChangeEventHandler = (event) => {
        const { value } = event.target;
        setState((prevState) => ({ ...prevState, body: value }));
    }

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const { title, body } = state;
        addNote({ title, body });
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={onSubmitEventHandler}>
                <input type="text" value={state.title} onChange={onTitleChangeEventHandler} />
                <textarea value={state.body} onChange={onBodyChangeEventHandler}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NoteInput;
