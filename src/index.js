import dotenv from "dotenv"
import connectDB from "./database/index.js";
import app from "./app.js";


dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running at portL ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongodb connection failed !!!", error)
})









































// import express from "express";
// const app = express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",()=>{
//         console.log("Error: ", error);
//         throw error

//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("Error", error);
//     throw err;
//   }
// })();