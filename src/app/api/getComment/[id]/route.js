import { NextResponse } from "next/server";
import Blog from "../../../../../models/blog";
import comments from "../../../../../models/comment"
import { ConnectMongodb } from "@/lib/db";



export async function GET(request, context) {

    await ConnectMongodb();
    const { params } = context
    let { id } = params
  
    try {

        await ConnectMongodb()
        let getComment = await comments.find({BlogId:id}).populate('user','name')
        console.log(getComment,"comment")

        return NextResponse.json({ getComment, msg: 'successfully' })

    } catch (error) {
        return NextResponse.json({ error, msg: 'error occured' })

    }




}