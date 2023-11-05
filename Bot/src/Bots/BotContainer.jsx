import React, { useState, useEffect } from "react";
import Bots from "./Bots";

function BotsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((botscollection) => {
        setData(botscollection);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
        <h1>Bots Collection</h1>
    <div className="card-container">
      {data.map((bot, index) => (
        <Bots key={index} bot={bot} />
      ))}
    </div>
    </div>
  );
}

export default BotsContainer;