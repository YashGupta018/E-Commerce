const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// Handeling Uncaught Exception
process.on("uncaughtException", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting Down The Server Due To Uncaught Exception`);
    process.exit(1);
})

// Config Path
dotenv.config({path:"./backend/config/config.env"});

// Connecting To Database
connectDatabase()

const server = app.listen(process.env.PORT,()=>{

    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting Down The Server Due To Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });

})