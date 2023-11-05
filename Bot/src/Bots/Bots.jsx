import React from "react";

const Bots = ({ bot }) => {
    return (
      <div className="card">
        <img src={bot.avatar_url} alt={bot.name} />
        <div className="card-body">
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
        </div>
      </div>
    );
  };
  
  export default Bots;