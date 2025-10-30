const mongoose = require('mongoose');     // Import mongoose to define the schema

// Define the Note schema
// Each note has a title, content, and a timestamp
// The title and content are required fields
// The date field defaults to the current date and time

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);   // Export the Note model based on the schema
