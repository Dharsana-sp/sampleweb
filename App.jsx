/* import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"; // Your Dashboard component
import Home from "./Home"; // Other components (create these separately)
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

function App() {
  return (
    <Router>
      <div>
       
        <Dashboard />

        {/* Dynamic content changes here */
       /*  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
} 

export default App; */

/* import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    "img 1.jpg",
    "img 2.png",
    "img 3.jpg",
    "img 4.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Update image index based on input length
    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App; */
/* 
import React from "react";
import Hen from "./Hen";

const App = () => {
  const need = "Mumum";

  return (
    <div>
      <Hen need={need} />
    </div>
  );
};

export default App; */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;