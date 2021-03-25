import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PostCard from "./containers/PostList";

function App() {
  return (
    <Router>
      <div className="App">
        <PostCard />
      </div>
    </Router>
  );
}

export default App;
