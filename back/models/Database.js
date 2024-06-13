const mongoose = require('mongoose');

const Database = mongoose.Schema({
    Title:{
        type:String
    }, 
    body:{
        type:String
    }
});

module.exports = mongoose.model("document", Database);