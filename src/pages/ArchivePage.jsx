import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArchivedNotes, deleteNote } from "../utils/local-data";
import SearchBar from "../components/SearchBar";
import NoteListArchive from "../components/NoteListArchive";
import PropTypes from 'prop-types';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivePage
                defaultKeyword={keyword}
                keywordChange={changeSearchParams}
            />
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id)

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
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
            <>
                <Link to="/">
                    <h1>Hello, React</h1>
                </Link>
                <Link to="/archive">
                    <button>Archive</button>
                </Link>
                <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}
                />
                <NoteListArchive
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                />
            </>
        );
    }
}

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default ArchivePageWrapper;