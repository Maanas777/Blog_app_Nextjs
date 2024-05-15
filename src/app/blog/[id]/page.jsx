import Comments from "@/app/components/Comments";
import FormComment from "@/app/components/form-comment";
import { ConnectMongodb } from "@/lib/db";
import Blog from "../../../../models/blog";




const BlogDetailPage= async ({ params }) => {

  const{id}=params
  ConnectMongodb()

  let blog=await Blog.findById(id)
  
 









  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold'>{blog?.title}</h1>
      <p>Written by: {blog?.username}</p>
      <div className='mt-4'>{blog?.content}</div>
 
    <Comments/>
    <FormComment/>

    </div>
  );
}

export default BlogDetailPage;
