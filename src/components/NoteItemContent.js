import React from 'react';

function NoteItemContent({ title, body }) {
  return (
    <div>
      <div className="card-header fw-bold">{title}</div>
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}

export default NoteItemContent;
