'use client'

import React from 'react'
import { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const inputClass =
  'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';



const Form_new_post = () => {

  let session=useSession()
  let name=session?.data?.user?.name

  // console.log(,"seddioion")

  let router=useRouter()



const [formdata, setformdata] = useState({
    title:'',
    content:''
})

const { title, content } = formdata;

const requestData = {
  title,
  content,
  name, // Add email to the request data
};


const handleChange=(e)=>{
    e.preventDefault()

    const {name,value}=e.target
  
    setformdata({
        ...formdata,    
        [name]: value
    })

}

const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
        const response= await axios.post('/api/post',requestData)
        console.log(response)
        if(response.status===200){
           toast.success('Blog created sucessfully')

           router.push('/')

        }
        else{
          toast.error("Error occured")
        }
       

        
    } catch (error) {

        console.log(error)
        
    }
   

}

  return (
    <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
      <ToastContainer />

        <input
          type='text'
          className={inputClass}
          placeholder='Enter the title'
          name='title'
          onChange={handleChange}
          value={formdata.title}
        
        />
      </div>
      <div className='mb-4'>
        <ReactTextareaAutosize
          minRows={5}
          name='content'
          className={inputClass}
          placeholder='Enter the content'
          onChange={handleChange}
          value={formdata.content}
          
        />
      </div>
      <button 
       
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
      >
        Submit
      </button>
    </form>
  )
}

export default Form_new_post