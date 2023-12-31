import React from 'react';
import NoteListActive from '../components/NoteListActive';
import { archiveNote, getActiveNotes, deleteNote } from '../utils/local-data'; 
import SearchBar from '../components/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage
                defaultKeyword={keyword}
                keywordChange={changeSearchParams}
            />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onArchiveHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes()
            }
        })
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes()
            }
        })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter(note => (
            note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        ))

        return (
            <div>
                <Link to='/'>
                    <h1>Hello, React</h1>
                </Link>
                <Link to='/archive'>
                    <button>Archive</button>
                </Link>
                <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}
                />
                <NoteListActive
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <button>
                    <Link to='/new'>Add New</Link>
                </button>
            </div>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;