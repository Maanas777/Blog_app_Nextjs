import { NextResponse } from "next/server";

import cookie from 'cookie'


export async function middleware(req,res){
    let resuit= cookie.parse(String(req.cookies))

    console.log(req,"requst objecttttttttttttttttttttt    <<<<<<<<<<< ===========   >>>>>>>")
    
let token=resuit['next-auth.session-token']




if(!token){
    return NextResponse.redirect(new URL('https://blog-app-nextjs-tawny.vercel.app/login'))

}
else{
     return NextResponse.next()

}
  

}
export const config={
    matcher:['/blog_form']
}