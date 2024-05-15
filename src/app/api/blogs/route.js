import { NextResponse } from "next/server";
import Blog from "../../../../models/blog";
import { ConnectMongodb } from "@/lib/db";


export async function GET(req){
   
    await ConnectMongodb()

    try {

        let blogs= await Blog.find()
       

        if(blogs){

            return NextResponse.json(blogs,{messgae:'blogs fetched succesfully'})
        }
        else{
            return NextResponse.json({message:'error occured'})
        }


    } catch (error) {
        
        console.log(error)
    }



}