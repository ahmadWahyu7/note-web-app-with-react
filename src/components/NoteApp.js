import React from 'react';
import Swal from 'sweetalert2';
import { getData } from '../utils/data';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';
import NoteArchivedList from './NoteArchivedList';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchedNotes: [],
      searchTitle: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah anda yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, saya yakin!',
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        Swal.fire(
          'Deleted!',
          'Data telah dihapus',
          'success',
        );
      }
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
        },
      ],
    }));
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Data telah Ditambahkan',
    });
  }

  onSearchChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      searchTitle: event.target.value,
    }));
    this.onSearchEventHandler(event.target.value);
  }

  onSearchEventHandler(searchedTitle) {
    const searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase()));

    if (this.state.searchTitle.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
  }

  onArchivedHandler(id) {
    const archiveNote = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => note.archived = !note.archived);
    this.setState({ archiveNote });
  }

  render() {
    return (
      <div className="contact-app mt-3 mx-3">
        <h1 className="text-center mb-5">My Personal Notes</h1>

        <div className="row justify-content-center mb-5">
          <div className="col-sm-8 border border-3 border-opacity-25 border-primary rounded p-4">
            <h3 className="text-center mb-3">New Note</h3>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
        </div>

        <div className="row justify-content-evenly border border-3 border-opacity-25 border-primary rounded mb-5 pb-5">
          <div className="col-md-8 p-4 mb-3">
            <h3 className="text-center">Search Note</h3>
            <NoteSearch onSearchChange={this.onSearchChangeEventHandler} searchTitle={this.state.searchTitle} />
          </div>
          <div className="col-md-7 border border-3 border-opacity-25 border-primary rounded p-4">
            <h3 className="text-center mb-4">Note List</h3>
            <NoteList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onArchived={this.onArchivedHandler}
              searchedNotes={this.state.searchedNotes}
              searchedTitle={this.state.searchTitle}
            />
          </div>
          <div className="col-md-4 border border-3 border-opacity-25 border-primary rounded p-4">
            <h3 className="text-center mb-4">Archieved List</h3>
            <NoteArchivedList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onArchived={this.onArchivedHandler}
              searchedNotes={this.state.searchedNotes}
              searchedTitle={this.state.searchTitle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
