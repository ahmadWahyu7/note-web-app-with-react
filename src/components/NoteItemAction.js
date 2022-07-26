import React from 'react';
import DeleteButton from './DeleteButton';
import ArchivedButton from './ArchivedButton';

function NoteItemAction({ id, onDelete, onArchived }) {
  return (
    <div className="d-flex justify-content-end me-4 mb-4">
      <ArchivedButton id={id} onArchived={onArchived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItemAction;
