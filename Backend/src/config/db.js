require('dotenv').config();
const mongoose = require('mongoose');

const mongodbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(mongodbUrl);
        console.log("Mongodb is coneected successfully!");
    } catch(error){
        console.log("Mongodb error to connect", error.message);
    }
}

module.exports = connectDB;