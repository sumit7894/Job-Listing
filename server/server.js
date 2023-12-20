const express = require('express');
const {PORT} = require('./src/config/serverConfig')
const connect = require('./src/config/databaseConfig')
const cors = require('cors');
const authRouter = require('./src/routes/authRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/',authRouter);


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
    connect();
    console.log('Server connected');
})