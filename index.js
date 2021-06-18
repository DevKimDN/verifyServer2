//dotenv
require('dotenv').config();
const{connectDB} = require('./db');
const express = require ('express');
const cors = require('cors');
const Router = require('./routers/myRouter');

connectDB();
const app = express();

app.use(cors());
app.use(express.json()); //Body parser


const port = process.env.PORT  || 5000;


//Mount the route
app.use('/',Router);


app.listen(port, ()=> {
    console.log(`server is running !!! on port ${port}`)
});