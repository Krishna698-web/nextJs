import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/getblog");
    const data = await response.json();
    setBlogs(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [setBlogs]);

  return (
    <div className="heading">
      <Navbar />
      <h1>Here goes all the Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.title}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
