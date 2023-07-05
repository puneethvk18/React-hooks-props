
import './App.css';
import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import Data from "./Data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3); // Default selected ID is 3

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="app">
      <div className="left-child">
        <LeftChild data={Data} selectedId={selectedId} onItemClick={handleItemClick} />
      </div>
      <div className="right-child">
        <RightChild id={selectedId} />
      </div>
    </div>
  );
};

export default App;

