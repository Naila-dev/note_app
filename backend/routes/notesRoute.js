const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// get all notes
//  this route handles GET requests to fetch all notes from the database
//  it uses the Note model to retrieve all notes and sends them as a JSON response 
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add a new note
// this route handles POST requests to add a new note to the database
// it creates a new Note instance with the data from the request body, saves it to the database, and returns the created note as a JSON response
router.post('/', async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete a note
// this route handles DELETE requests to remove a note by its ID
// it uses the Note model to find and delete the note with the specified ID and returns a confirmation message as a JSON response
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// In server.js, you would use this route as follows:
// const notesRoute = require('./routes/notesRoute');
// app.use('/api/notes', notesRoute);