import React from "react";
import "../styles/Blogs.css";
import blogsData from "../components/BlogData";
import MainNavigation from "../components/Navigation";

export default function BlogAdd() {
  
  var inputImage;
  var inputTitle;
  var inputAbout;
  var inputId;
  var i = 5;

  // console.log(BlogState)
  function inputData() {
    inputId = i;
    inputImage = document.getElementById("Image").value;
    inputTitle = document.getElementById("Title").value;
    inputAbout = document.getElementById("About").value;
    console.log("sucess");
    i++;
    // updateBlogs() qcx
    updt();
    success();
    return (
      inputImage, inputTitle, inputAbout, inputId
      );
  }
  
  const [dataAdded, setDataAdded] = React.useState(false);
  function success() {
    setDataAdded((prevBlogState) => !prevBlogState);
  }

  function updt() {
    blogsData.push({
      id: inputId,
      image: inputImage,
      title: inputTitle,
      about: inputAbout,
    });
    console.log(blogsData.length);
  }

  return (
    <div>
      <MainNavigation />
      <div className="blog-add-form">
        <div className="blog-add">
        <div className="input-card">
          <label htmlFor="Image">Image url</label>
          <input
            id="Image"
            type="url"
            placeholder="ex: https://...jpg"
          ></input>
        </div>

        <div className="input-card">
          <label htmlFor="Title">New blog title</label>
          <input
            id="Title"
            type="text" required
            placeholder="Title for you blog   max: 200"
          ></input>
        </div>

        <div className="input-card">
          <label htmlFor="About">Description</label>
          <textarea
            id="About"
            type="text"
            placeholder="Add blog blog description   max: 500"
          ></textarea>
        </div>
        <div className="input-card">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            type="text"
            placeholder="Write your main Blog content here:"
            rows="5"
          ></textarea>
        </div>
        <div className="input-button">
          <button onClick={inputData}>add Blog</button>
        </div>

        <br />
        <br />
        <div>
          {dataAdded ? "Blog added successfully" : "Add blog data in the form"}
        </div>
      </div>
      </div>
      
    </div>
  );
}
