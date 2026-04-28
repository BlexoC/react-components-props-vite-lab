import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About name={blog.about} img src={blog.imageUrl}/>
      <Article />
      <ArticleList preview={blogData.prop.preview} date ={blogData.prop.date} title ={blogData.prop.title}
       />
      <Header name={blog.name}/>
    </div>
  );
}

export default App;
