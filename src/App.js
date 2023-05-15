import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [thing, setThing] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Handle the successful response here
        console.log(response);
        setThing(response.data.title);
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error:", error.message);
        console.log("Config:", error.config);
        console.log("Request:", error.request);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {thing}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Changed the build file in Amplify.</h1>
      </header>
    </div>
  );
}

export default App;
