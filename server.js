const express= require('express')
const cors= require('cors')
const colors=require('colors')
const morgan= require('morgan')
const dotenv= require('dotenv')
const connectDB = require('./config/connectDB.js')

// config dot env
dotenv.config();

//database call
connectDB();

//rest object
const app=express();

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//routes
//user routes
app.use("/api/v1/users",require("./routes/userRoute.js"))  
//transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoute.js"));

//port
const PORT=8080 || process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})