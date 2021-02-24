const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect(
    process.env.mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
    () => console.log(`Connected to MongoDB`)
);


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/events', require('./routes/events'));


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const path = require('path')
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req , res) => {
res.sendFile(path.join(__dirname , "build" , "index.html"))
})




