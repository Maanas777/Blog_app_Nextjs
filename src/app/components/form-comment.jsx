'use client';

 
import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "next/navigation";



const FormComment = () => {

  let id=useParams()
  let BlogId=id.id



  


    const [input, setinput] = useState('')

    const handleChange=(e)=>{
        e.preventDefault()
        setinput(e.target.value)

    }

    // let string=JSON.stringify(input)

    const submitForm= ()=>{

      let res= axios.post('../api/comment',{input,BlogId})
      setinput('')

      

    }



  return (
    <div>
      <div className='mt-4'>
        <label
          htmlFor='comment'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Add Comment
        </label>
        <input
          value={input}
          onChange={handleChange}
          type='text'
          className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          name='comment'
        />
        <button onClick={submitForm}
       
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400'
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComment;
