import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.props.navigate('/')
        
        setTimeout(() => {
            alert('Successful delete note!');
        }, 100)
    }

    onArchiveNoteHandler(id) {
        archiveNote(id);

        this.props.navigate('/');

        setTimeout(() => {
            alert('Note has been archived');
        }, 100)
    }

    onUnarchiveNoteHandler(id) {
        unarchiveNote(id);

        this.props.navigate('/');

        setTimeout(() => {
            alert('Note has been activated');
        }, 100)
    }
    
    render() {
        const { note } = this.state;
        
        if(!note) {
            return <p>Note not found</p>
        }
    
        return <NoteDetail
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveNoteHandler}
                    onUnarchive={this.onUnarchiveNoteHandler} 
                    {...note}
                />
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;