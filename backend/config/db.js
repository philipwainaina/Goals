const mongoose = require("mongoose") //import the mongoose module to connect to the MongoDB database

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) //log a message to the console indicating that the connection was successful
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB 
