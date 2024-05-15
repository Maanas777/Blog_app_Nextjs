
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "../../models/user"
import { ConnectMongodb } from "./db"
import axios from "axios"
import Cookies from "js-cookie"
import { NextResponse } from "next/server"

// import { useRouter } from "next/navigation";

// const router = useRouter();

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],


  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Check if the account provider is Google
      if (account.provider == 'google') {
        try {
          // Assuming ConnectMongodb is an asynchronous function that establishes a connection to MongoDB
          await ConnectMongodb();
    
          // Destructure the user object to get the name and email
          const { name, email } = user;
    
          // Check if the user already exists in the database
          let existingUser = await User.findOne({ email });
    
          if (!existingUser) {
            // If the user does not exist, make a request to the gLogin API
            let res = await axios.post('http://localhost:3000/api/gLogin', { name, email });

    
            // Assuming res.ok checks if the response is successful
            if (res.ok) {
         
          
              return NextResponse.json({ res, message: "logged in successfully" });
            } else {
              // Handle unsuccessful response here if needed
              console.log("Error in gLogin API");
            }
          } else {
            // Handle the case where the user already exists in the database
      
            console.log("User already exists");
            return existingUser;
          }
        } catch (error) {
          // Catch and log any errors that occur during the process
          console.log(error);
          // You might want to handle the error or return an error response here
          return NextResponse.error({ message: "An error occurred during sign-in" });
        }
      } else {
        // Handle other account providers if needed
        console.log("Unsupported account provider");
        // Return false or handle the case according to your logic
        return false;
      }
    }
    ,
    async redirect({}) {
      return '/'
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }

  }


}


export default NextAuth(authOptions)