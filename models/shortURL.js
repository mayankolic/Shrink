const mongoose = require("mongoose");

//ShortID is a NPM package for generating random short values cooresponding to a long URL
const shortID = require("shortid");

const shortURLschema= new mongoose.Schema({
    big:{
        type:String,
        required: true
    },
    small:{
        type:String,
        required:true,
        default: shortID.generate //This will generate a unique shortID everytime it gets called
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
});

module.exports=mongoose.model('shortURL',shortURLschema);
