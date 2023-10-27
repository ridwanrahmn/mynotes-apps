import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}

export default NotesItem;
