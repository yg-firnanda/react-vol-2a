import React from "react";
import NoteListActive from "../components/NoteListActive";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <NoteListActive />
            <button>
                <Link to="/new">Add New</Link>
            </button>
        </div>
    )
}

export default HomePage;