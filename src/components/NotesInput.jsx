import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputLength = event.target.value.length;

    if (inputLength <= 50)
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return { title: "", body: "" };
    });
  }

  render() {
    return (
      <>
        <div className="note-input__title__char-limit">
          Sisa karakter: {50 - this.state.title.length}
        </div>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <input
            name="title"
            type="text"
            placeholder="Tulis judul di sini ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          ></input>
          <textarea
            name="body"
            type="text"
            placeholder="Tulis deskripsi di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default NotesInput;
