import React from "react";
import { getInitialData } from "../utils";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";
import SearchInput from "./SearchInput";

class NotesApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchInput: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toLocaleDateString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onFilterHandler(event) {
    const query = event.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        searchInput: query,
      };
    });
  }

  noteDataList() {
    const { searchInput, notes } = this.state;

    const dataList = searchInput.length
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : notes;
    return dataList;
  }

  render() {
    return (
      <>
        <div className="note-app__header ">
          <h1>📝myNotes App</h1>
        </div>
        <div className="note-app__body">
          <SearchInput onFilter={this.onFilterHandler} />
          <div className="note-input">
            <h2>Tambahkan Catatan</h2>
            <NotesInput addNotes={this.onAddNotesHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={this.noteDataList().filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip Catatan</h2>
          <NotesList
            notes={this.noteDataList().filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApps;
