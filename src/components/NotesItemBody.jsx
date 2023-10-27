import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemBody({ title, createdAt, body }) {
  const formattedCreatedAt = showFormattedDate(createdAt);

  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{formattedCreatedAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NotesItemBody;
