const mongoose = require("mongoose");

const connectDatabase = ( ) => {

    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true (this is not working in newer versions of mongodb)
    })
    .then((data) =>{
        console.log(`Mongodb connection successful with the server : ${data.connection.host}`);
    })
    .catch((err) => {
        console.log(err);
    })

}

module.exports = connectDatabase