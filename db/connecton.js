const mongoose = require('mongoose')
const {dbConfig} = require('../config')

mongoose.set('strictQuery', true)

// Function to connect database
const connectDatabase = ()=>{
    mongoose.connect(dbConfig.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('App is Connected Succesfully');
    }).catch((err)=>{
        console.log(err)
    })
}

const getDbConnection =()=>{
    return mongoose.connection
}


module.exports ={
    connectDatabase,
    getDbConnection
}