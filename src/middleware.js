import { NextResponse } from "next/server";

import cookie from 'cookie'


export async function middleware(req,res){
    let resuit= cookie.parse(String(req.cookies))
    
let token=resuit['next-auth.session-token']




if(!token){
    return NextResponse.redirect(new URL('http://localhost:3000'))

}
else{
     return NextResponse.next()

}
  

}
export const config={
    matcher:['/blog_form']
}