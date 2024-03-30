const express = require('express');
const app = express();
const dotenv = require("dotenv")
const morgan = require("morgan");
const routes = require("./Routes/index");


app.use(morgan("dev"));

dotenv.config();

require("./db_connection");//connect to database

app.use(express.json());
app.use(routes); //routes

const PORT =  5000;

app.listen(PORT, () => {
    console.log('Listening on port 5000...');
});