import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Blogs.css'
import MainNavigation from "../../pages/Home/HomeNav";
import { Card, Button } from "flowbite-react";
import altImg from "../../images/cover.png"

export default function Blogs() {
  
  const [articles, setArticles] = useState([])
   
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
    return () => {};
  }, [])
  
  console.log(articles)
   
    const blogCard = articles.map((blogs) => {
       console.log(blogs.image);
       return (
         <div className="max-w-sm" key={blogs.id}>
           <Card imgAlt="Not found" imgSrc={blogs.cover_image || altImg}>
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {blogs.title}
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               {blogs.description}
             </p>
             <Button>
               Read more
               <svg
                 className="ml-2 -mr-1 h-4 w-4"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   fillRule="evenodd"
                   d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                   clipRule="evenodd"
                 />
               </svg>
             </Button>
           </Card>
         </div>
       );
   } )
  return (
    <div>
      <MainNavigation />
      <div className="blog-container">
        {blogCard}
      
      <div className="blog-add">
          <Link className="blog-link" to="/add-blog"><i className="fa fa-pencil" aria-hidden="true"></i>
          <span>Add blog</span></Link>
      </div>
      </div>
      
    </div>
  );
}
