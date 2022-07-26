import React from 'react';
import NoteItem from './NoteItem';

function NoteArchivedList({
  notes, onDelete, onArchived, searchedTitle, searchedNotes,
}) {
  let archivedNotes = null;
  if (searchedTitle.length > 0) {
    archivedNotes = searchedNotes.filter((note) => note.archived === true);
  } else {
    archivedNotes = notes.filter((note) => note.archived === true);
  }

  return (
    <div className="note-archived-list">
      {
        archivedNotes.length > 0 ? (archivedNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            {...note}
          />
        ))) : (<h5 className="text-center text-danger">tidak ada arsip</h5>)
      }
    </div>
  );
}

export default NoteArchivedList;
