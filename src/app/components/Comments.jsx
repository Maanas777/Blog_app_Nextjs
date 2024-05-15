"use client";

import axios from "axios";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const Comments = (req) => {
  let params = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      let id = params.id;
      let res = await axios.get(`../api/getComment/${id}`);
      let comments = res?.data?.getComment;
      setdata(comments);
    };

    getComment();
  },[params.id]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id} className="mb-4 bg-slate-300 p-2">
            <div className="flex items-center mb-2">
              <div className="text-blue-500 font-bold mr-2">
                {item.user.name}
              </div>
              <div className="text-gray-500">
                 {new Date(item.createdAt).toLocaleString('en-GB')}
              </div>
            </div>
            <p>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
