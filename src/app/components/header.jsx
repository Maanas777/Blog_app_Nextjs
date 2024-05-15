"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const header = () => {
    let router=useRouter()
    let {data:session,status}=useSession()

    let user=session?.user?.name

    console.log(session)


    let handleLogout=()=>{
      signOut('')




    }
  



  return (
    <header className="bg-orange-500 p-4 ">
      <nav className="flex justify-between items-center max-w-4xl mx-autpy">
        <Link href={"/"} className="text-white text-2xl font-bold">
          {" "}
          My Blogs{" "}
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href={"/blog"} className="text-white hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            { status === "authenticated"? (
              <>
               
                <button
                  onClick={handleLogout}
                  className="text-white hover:underline cursor-pointer"
                >
                  Log Out
                </button>
                <span className="text-white ml-10">Hii {user}</span>
               
              </>
            ) : (
              <Link href="/login" passHref className="text-white hover:underline cursor-pointer">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
