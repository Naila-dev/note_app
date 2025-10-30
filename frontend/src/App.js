import { useEffect, useState } from "react";
import api from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api
      .get("/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  const addNote = async (noteData) => {
    try {
      const res = await api.post("/notes", noteData);
      setNotes([...notes, res.data]);
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">📝 Notes App</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;


