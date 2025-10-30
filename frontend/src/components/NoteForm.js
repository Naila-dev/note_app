import { useState } from "react";

function NoteForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    onAdd(form); // calls parent function (in App.js)
    setForm({ title: "", content: "" }); // reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Note Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Write your note..."
          rows="3"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
