const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DB = require('./connection/connection');
const Document = require('./routes/document')

const app = express();
app.use(bodyParser.json());
app.use(cors());

DB();

app.use(Document);


app.listen(5000, () => {
    console.log("Server is Running")
})
