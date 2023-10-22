const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// Config Path
dotenv.config({path:"./backend/config/config.env"});

// Connecting To Database
connectDatabase()

app.listen(process.env.PORT,()=>{

    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})