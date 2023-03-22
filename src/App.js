import React from "react";
import { Buffer } from "buffer";
import "./App.css"; // Import the CSS file

window.Buffer = buffer.Buffer;

function App() {
  return (
    <div className="App">
      <img
        className="centeredImage"
        src="https://img.squadhelp.com/story_images/visual_images/1651096986-DriverPass.png?class=show"
        alt="Your Image Description"
      />
    </div>
  );
}

export default App;
