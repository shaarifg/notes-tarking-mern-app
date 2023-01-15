require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const {serverConfig} = require('./config')


app.use(cors({
    origin: '*'
}));

app.use('/', (req, res)=>{
    res.send('Hello')
})

const connectDb = () =>{
    db.connectDatabase()
    dbconnection = db.getDbConnection()
}

connectDb(app);

app.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`Server is running on http://${serverConfig.hostname}:${serverConfig.port}`);
})
