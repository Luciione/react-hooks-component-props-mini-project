// App.js
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from "../data/blog";

function App() {
  const blogName = "My Personal Blog";

  return (
    <div>
      <Header blogName={blogName} />
      <About logo={data.logo} aboutText={data.about} />
      <ArticleList articles={data.articles} />
    </div>
  );
}

export default App;
