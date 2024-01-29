// Importing necessary Node.js modules

const express = require(`express`);
const router =  express.Router();
const path = require(`path`);



// GET request for index  page
router.get(`/`,(req,res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`));
})



// GET request for notes page
router.get(`/notes`,(req,res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`));
})



// GET request for everything else
router.get(`*`,(req,res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`));
})
module.exports = router;