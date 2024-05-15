
import { getCurrentUser } from "@/lib/session";
import Blog from "../../../../models/blog";
import { NextResponse } from "next/server";
import { ConnectMongodb } from "@/lib/db";

export async function POST(request) {
   

    let user = await getCurrentUser()

    try {

        if (!user?.email) {
            return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
        }
        else{

            const { title, content, name } = await request.json()
           
            await ConnectMongodb()
            const newPost = await Blog.create({ title, content, username:name });
             console.log(newPost,'post created')
    
            return NextResponse.json({ message: 'Blog post created successfully', newPost });
    

        }

      


    } catch (error) {
        console.log(error,"erorr aane sireeee")
        return NextResponse.json({ message: 'Error creating blog post' }, { status: 500 });
    }





}

