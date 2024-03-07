const mongoose = require('mongoose');
const link = 'mongodb://127.0.0.1:27017'

const mongooseConnection = async () => {
    await mongoose.connect(link)
    console.log("Mongoose connection made successfully")
}

module.exports= {mongooseConnection}