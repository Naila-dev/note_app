function NoteCard({ note, onDelete }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
