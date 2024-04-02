const express = require('express');
const PORT = process.env.PORT || 8888;
const app = express();
const con = require('./config/db.config');
require('dotenv').config();

const cors = require('cors')
const bodyParser = require("body-parser");

app.use(cors());


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());

con.sync({ alter: true }).then(() => {
    console.log("Models synchronized successfully.");
}).catch((error) => {
    console.log(error.message);
});


app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server listening at ${PORT}.`);
});