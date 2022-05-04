import React from "react";
import { Link } from "react-router-dom";
import '../styles/Blogs.css'
import BlogData from "../components/BlogData"
import MainNavigation from "../components/Navigation";

export default function Blogs() {
  
    
    // const blogData = [
    //   {
    //     id: 1,
    //     image:
    //       "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2021/07/2018-04-05T165026Z_1101404031_RC18839E3160_RTRMADP_3_USA-MILITARY-400x267.jpg",
    //     title: "Space Commands Lt. Gen John Shaw Says Space Is Under Threat",
    //     about:
    //       "In an exclusive interview, the military branch second in command talks about junk in orbit, cyberattacks, satellite vulnerabilities, and Russia's war in Ukraine.",
    //   },
    //   {
    //     id: 2,
    //     image:
    //       "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2021/07/2018-04-05T165026Z_1101404031_RC18839E3160_RTRMADP_3_USA-MILITARY-400x267.jpg",
    //     title: "Space Commands Lt. Gen John Shaw Says Space Is Under Threat",
    //     about:
    //       "In an exclusive interview, the military branch second in command talks about junk in orbit, cyberattacks, satellite vulnerabilities, and Russia's war in Ukraine.",
    //   },
    //   {
    //     id: 3,
    //     image:
    //       "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2021/07/2018-04-05T165026Z_1101404031_RC18839E3160_RTRMADP_3_USA-MILITARY-400x267.jpg",
    //     title: "Space Commands Lt. Gen John Shaw Says Space Is Under Threat",
    //     about:
    //       "In an exclusive interview, the military branch second in command talks about junk in orbit, cyberattacks, satellite vulnerabilities, and Russia's war in Ukraine.",
    //   },
    //   {
    //     id: 4,
    //     image:
    //       "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2021/07/2018-04-05T165026Z_1101404031_RC18839E3160_RTRMADP_3_USA-MILITARY-400x267.jpg",
    //     title: "Space Commands Lt. Gen John Shaw Says Space Is Under Threat",
    //     about:
    //       "In an exclusive interview, the military branch second in command talks about junk in orbit, cyberattacks, satellite vulnerabilities, and Russia's war in Ukraine.",
    //   },
    // ];
   const blogCard = BlogData.map((blogs) => {
       console.log(blogs.image);
       return(
           <div className="blog-card" key={blogs.id}>
               <img src={blogs.image} alt=""></img>
               <h1>{blogs.title}</h1>
               <p>{blogs.about}</p>
           </div>
       )
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
