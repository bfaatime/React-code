const express = require('express')
const mongoose = require('mongoose');


const app = express()
const PORT = 8080;



app.get("/api/products", (req, res) => {});
app.get("/api/products/:id", (req, res) => {});
app.delete("/api/products/:id", (req, res) => {});
app.post("/api/products", (req, res) => {});
app.put("/api/products/:id", (req, res) => {});

app.get("/", (req, res) => {
    res.send("Hello")
});









mongoose.connect('mongodb+srv://fatimacbazmp202:fatimacbazmp202@cluster0.b94na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => {
        console.log(
            `Example app listening on port ${PORT}, url is http://localhost:${PORT}` 
        );
        });
    });


