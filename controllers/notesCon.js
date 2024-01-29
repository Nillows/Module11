// Importing necessary Node.js modules
const express = require("express");
const router = express.Router();  // Creating a router object for defining API routes
const fs = require('fs');        // File system module for reading and writing files
const crypto = require(`crypto`); // Crypto module for generating unique IDs

// GET route to fetch all notes
router.get(`/api/notes`, (req, res) => {
    // Read and parse the notes from the db.json file
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    
    // Logging the request details
    console.log(`${req.method} request to ${req.url}`);

    // Sending back the parsed notes as JSON
    res.json(notes);
});

// POST route to add a new note
router.post(`/api/notes`, (req, res) => {
    // Constructing a new note object with a unique ID, title, and text
    const addedNote = {
        id: crypto.randomUUID(),
        title: req.body.title,
        text: req.body.text
    };

    // Read the current notes, parse them, and add the new note
    const noteData = JSON.parse(fs.readFileSync("./db/db.json"));
    noteData.push(addedNote);

    // Write the updated notes back to the db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData, null, 4));

    // Logging the request details
    console.log(`${req.method} request to ${req.url}`);

    // Sending back the added note as JSON
    res.json(addedNote);
});

// DELETE route to remove a note by its ID
router.delete(`/api/notes/:id`, (req, res) => {
    // Read the current notes and parse them
    const noteData = JSON.parse(fs.readFileSync("./db/db.json"));

    // Find the note to be deleted by ID
    const selectedNoteIndex = noteData.findIndex(obj => obj.id === req.params.id);
    
    // If note is found, remove it from the array
    if (selectedNoteIndex !== -1) {
        noteData.splice(selectedNoteIndex, 1);

        // Write the updated notes back to the db.json file
        fs.writeFileSync("./db/db.json", JSON.stringify(noteData, null, 4));

        // Logging the request details
        console.log(`${req.method} request to ${req.url}`);

        // Sending back the deleted note as JSON
        res.json(noteData[selectedNoteIndex]);
    } else {
        // If note not found, send a 404 error
        res.status(404).send('Note not found');
    }
});

// Exporting the router for use in other parts of the application
module.exports = router;
