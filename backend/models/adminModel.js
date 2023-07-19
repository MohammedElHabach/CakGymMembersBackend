const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please add a name'],
        unique:true

    },
    password:{
        type:String,
        required:[true,'Please add a password']
    },

},{timestamps:true})

module.exports = mongoose.model('Admin',adminSchema)