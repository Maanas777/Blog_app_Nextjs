'use client'

import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { ThreeDots } from "react-loader-spinner";





const BlogsPage =  () => {


  const { data: session } = useSession();

  let user=session?.user?.name




  const [blogs, setblogs] = useState([])
const [loading, setloading] = useState(true)



  useEffect(()=>{

    async function getBlogs() {
      const response = await axios.get('/api/blogs', {
        cache: "no-store",
      });
     let data=response?.data
     setblogs(data)
     setloading(false)
   
    }
    getBlogs();

  },[])



  
    return (
      <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
      {!loading?(<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {blogs.map((post) => (
 
            <Link
              key={post._id}
              href={`/blog/${post._id}`}
              className='bg-white p-4 rounded-md shadow-md'
            >
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>Written by: {post.username}</p>
            </Link>

          ))}
        </div>):
         <div className="flex justify-center">

         <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#03A9F4"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
         </div>
      
    }  
        



        {user? (<div className="mt-8 flex justify-center">

    
        <Link href="/blog_form" passHref>
          <button  className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600">
            Create New Blog
          </button>
        </Link>

      </div>):('')} 

      </div>


    );
  };
        

      

      
 


export default BlogsPage;
