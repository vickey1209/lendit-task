const mongoose = require('mongoose')

const contactschema = new mongoose.Schema({

    
    contactlist :{
        type: Array,
        required: [" "," "," "," "," "],
        unique: true ,
    }
     
    })



const lenditt = new mongoose.model("contact", contactschema );

module.exports = lenditt;