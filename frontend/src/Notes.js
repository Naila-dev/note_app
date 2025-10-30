import { useState, useEffect } from "react";
import api from "./api"; // axios instance pointing to backend

function App() {
  // State for notes and the form inputs
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  // Load notes from backend when app starts
  useEffect(() => {
    api
      .get("/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  // Handle adding a new note
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!form.title.trim() || !form.content.trim()) return; // ignore empty notes
    try {
      const res = await api.post("/notes", form);
      setNotes([...notes, res.data]); // update notes in UI
      setForm({ title: "", content: "" }); // clear input fields
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  // Handle note deletion
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Notes App</h1>

      {/* Add new note form */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Add Note</button>
      </form>

      {/* Display all notes */}
      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
