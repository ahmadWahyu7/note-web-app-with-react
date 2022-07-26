import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({
  title, body, id, onDelete, onArchived,
}) {
  return (
    <div className="card mb-4">
      <NoteItemContent title={title} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}

export default NoteItem;
