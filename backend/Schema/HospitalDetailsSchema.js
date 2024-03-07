const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    donorname:{
        type:String,
        require:true
    },
    donorAge:{
        type:String,
        require:true
    },
    acceptorname:{
        type:String,
        require:true
    },
    acceptorage:{
        type:Number,
        require:true
    },
    bloodtype:{
        type:String,
        require:true
    },
    hospitalname:{
        type:String,
        require:true
    },
    hospitalAddress:{
        type:String,
        require:true
    },
})

module.exports= new mongoose.model('DonorDetails', Schema);