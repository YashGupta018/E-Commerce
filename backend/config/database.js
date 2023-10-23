const mongoose = require("mongoose");

const connectDatabase = ( ) => {

    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true (This Is Not Working In Newer Versions Of MongoDB)
    })
    .then((data) =>{
        console.log(`Mongodb Connection Successful With The Server : ${data.connection.host}`);
    })
    // .catch((err) => {
    //     console.log(err);
    // }) // This Catch Block Is Not Required, As Unhandled Promise Regections Are Handeled In Server.js File

}

module.exports = connectDatabase