import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      counter: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const limit = 50;
      return {
        title: event.target.value.slice(0, limit),
        counter: limit - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="titleNote"
            aria-describedby="titleInfo"
            placeholder="title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div id="titleInfo" className="form-text">
            sisa karakter :
            {this.state.counter}
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="bodyNote"
            rows="4"
            placeholder="your note ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            {' '}
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default NoteInput;
