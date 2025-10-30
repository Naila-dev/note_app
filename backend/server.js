const express = require('express');       // Import express to create the server
const mongoose = require('mongoose');       // Import mongoose to connect to MongoDB
const cors = require('cors');             // Import cors to handle cross-origin requests
require('dotenv').config();           // Import dotenv to manage environment variables

const app = express();            // Initialize express

// middleware
app.use(cors());     // Enable CORS for all routes
app.use(express.json());     // Middleware to parse JSON bodies

const notesRoute = require('./routes/notesRoute');          // Import the notes route
app.use('/api/notes', notesRoute);              // Use the notes route for /api/notes endpoints 


// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))       // Log success message on successful connection
  .catch(err => console.error(err));          // Log error message on connection failure

// routes placeholder
app.get('/', (req, res) => res.send('Notes API running'));        // Basic route to check if the server is running

const PORT = process.env.PORT || 5000;        // Define the port to run the server on
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));    // Start the server and log the port number
