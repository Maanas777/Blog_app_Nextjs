
import { ConnectMongodb } from "@/lib/db";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'



export async function POST(request) {
    try {

        const { email, password } = await request.json()
        await ConnectMongodb()

        let existinguser = await User.findOne({ email })
        let username=existinguser.email.split('@')
        
        let name=username[0]


        if (existinguser) {

            const isPasswordValid = await bcrypt.compare(password, existinguser.password)

            if (isPasswordValid) {
                return NextResponse.json({ name, message: 'verified user' })
            }
            else {
                return NextResponse.json({ error: 'invalid user' })

            }
        }
        else{
            const hashedpassword= await bcrypt.hash(password,10)

            const newUser= new User({email, password:hashedpassword})
         


             await newUser.save()
             return NextResponse.json({name,message:'user created and logged in successfully'})

        }

    } catch (error) {
        console.log(error)

    }



}