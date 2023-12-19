const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig')
const connect = require('./config/databaseConfig')
const cors = require('cors');
app.use(cors);
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
    connect();
    console.log('Server connected');
})