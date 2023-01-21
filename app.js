require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const {serverConfig} = require('./config')
const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
}));

app.use('/', routes)


db.connectDatabase()



app.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`Server is running on http://${serverConfig.hostname}:${serverConfig.port}`);
})
