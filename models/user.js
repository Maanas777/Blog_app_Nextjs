import mongoose, { Schema } from "mongoose";


const UserSchema=new mongoose.Schema(
    {

        email:{
            type:String,
            required:true
        },
        name:{
            type:String,
            
        },
        password:{
            type:String
        }

    },
    {timestamps:true}


);

const User= mongoose.models?.User || mongoose.model('User', UserSchema)

export default User;


