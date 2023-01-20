const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema(
    {
        title: String,
        note:String,
        date: {
            type:Date,
            default:Date.now()      
        },
    }
);
module.exports=mongoose.model('Note', notesSchema);