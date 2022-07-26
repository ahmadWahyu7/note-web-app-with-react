import React from 'react';

function NoteSearch({ searchTitle, onSearchChange }) {
  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="form-control"
        id="searchNote"
        placeholder="write title note ..."
        value={searchTitle}
        onChange={(event) => onSearchChange(event)}
      />
    </div>
  );
}

export default NoteSearch;
