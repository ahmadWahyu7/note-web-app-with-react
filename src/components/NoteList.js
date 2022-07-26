import React from 'react';
import NoteItem from './NoteItem';

function NoteList({
  notes, onDelete, onArchived, searchedTitle, searchedNotes,
}) {
  let activeNotes = null;
  if (searchedTitle.length > 0) {
    activeNotes = searchedNotes.filter((note) => note.archived === false);
  } else {
    activeNotes = notes.filter((note) => note.archived === false);
  }

  return (
    <div className="note-list">
      {
        activeNotes.length > 0 ? (activeNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            {...note}
          />
        ))) : (<h5 className="text-center text-danger">tidak ada catatan</h5>)
      }
    </div>
  );
}

export default NoteList;
