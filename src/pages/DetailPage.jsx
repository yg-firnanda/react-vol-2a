import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data"

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={id} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }

    }
    
    render() {
        const { note } = this.state;
        
        if(!note) {
            return <p>Note not found</p>
        }
    
        return <NoteDetail {...note} />
    }
}

export default DetailPageWrapper;