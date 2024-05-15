
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";



export async function getCurrentUser() {
    const session = await getServerSession(authOptions);
  
    if(session){
    return session?.user;
    }
    else{
      return 'Unauthanticated'
    }

  }