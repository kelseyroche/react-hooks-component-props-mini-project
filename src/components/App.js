import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";

console.log(blogData);
const posts = [
  { id: 1, title: "Cute Dogs", date: "March 3, 2024", preview: "From Poodles to Pitties!" },
  { id: 2, title: "Puppy Snacks", preview: "An exploration of peanut butter" },
  { id: 3, title: "Tricks to Teach your Pup", date: "April 10, 2024", preview: "Prereqs: sit and stay" }
]


function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name ="My Awesome Dog Blog"/>
      <About
        about="woof woof!"
        image="https://external-preview.redd.it/oHsozIpSW3_awDr0TST55UT9jiuh04OERbOM0MpUkBU.jpg?auto=webp&s=c6fec8bcfd4d7b666d500cf7af6bfcad51b33fdb"
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
