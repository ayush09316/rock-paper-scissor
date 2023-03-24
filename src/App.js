import React, { useState } from "react";
import { Header,Play,Game,Footer } from "./components";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    
    <Router>
    <div className="container">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route path="/game" element={<Game setScore={setScore} myChoice={myChoice} score={score} />}/>
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
