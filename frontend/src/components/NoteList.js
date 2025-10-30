import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p className="text-center text-muted">No notes yet. Add one above!</p>;
  }

  return (
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-4" key={note._id}>
          <NoteCard note={note} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
