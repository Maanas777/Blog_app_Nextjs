
import { getCurrentUser } from "@/lib/session";
import User from "../../../../models/user";
import { ConnectMongodb } from "@/lib/db";
import { NextResponse } from "next/server";
import comments from "../../../../models/comment";


export async function POST(req){
  
    
    try {

        await ConnectMongodb()

        let {email}=await getCurrentUser()
        let user=await User.findOne({email})
        let userId=user._id
       
       let {input,BlogId}=await req.json()

      
       let res= await comments.create({comment:input,user:userId,BlogId:BlogId})
       await res.save()



      return  NextResponse.json({msg:'comment update'})


        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error,msg:'error occured'})
        
    }




    

}