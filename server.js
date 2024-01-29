const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const allRoutes = require("./controllers");
app.use(allRoutes)

app.listen(PORT,()=>{
    console.log(`Server listening at port: ${PORT}`)
});
