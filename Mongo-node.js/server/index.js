const express = require('express');
const mongoose = require('mongoose');
const cors = require ("cors");



const app = express();
const PORT = 8080;

app.use(cors());

app.use(express.json());



mongoose.connect('mongodb+srv://fatimacbazmp202:fatima123@cluster0.b94na.mongodb.net/')
  .then(() =>{
    app.listen(PORT, () => {
        console.log(`Server listening on PORT  http://localhost:${PORT}`);
    }); 
  });