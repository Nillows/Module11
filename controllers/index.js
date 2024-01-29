// Importing necessary Node.js modules
const express = require("express");
const router = express.Router();  // Creating a router object for defining routes

const notesRoutes = require("./notesCon"); // Importing Notes API routes
router.use(notesRoutes); // Using Notes API routes with the router

// Importing route handlers for different parts of the application
const htmlRoutes = require("./htmlCon"); // Importing HTML routes
router.use(htmlRoutes); // Using HTML routes with the router

// Exporting the router for use in other parts of the application
module.exports = router;
