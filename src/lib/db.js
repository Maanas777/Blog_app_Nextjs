import mongoose from "mongoose";


export const ConnectMongodb=async()=>{
    try {
         
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Db connected")

    } catch (error) {
        console.log(error)
        
    }

}