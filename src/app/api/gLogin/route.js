import { ConnectMongodb } from "@/lib/db"
import User from "../../../../models/user"
import { NextResponse } from "next/server"

export async function POST(req){
    try {
        let{email,name}=await req.json()
        await ConnectMongodb()
    
      await User.create({email,name})
    
      return NextResponse.json({message:'user created succesfully'})
    
        
    } catch (error) {
        console.log(error)
        
    }




}