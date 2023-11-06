import React, { useState, useEffect } from "react";
import Bots from "./Bots";
import MyArmy from "./MyArmy";
import BotsArmy from "./BotsArmy";

function BotsContainer() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((botscollection) => {
        setBotCollection(botscollection);
      });
  }, []); // Empty dependency array ensures this runs only once
  function deleteBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        setBotCollection(botCollection.filter(({id}) => id !== bot.id));
        setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        console.log(res)
    })
}

function addRemoveBot(bot, inArmy) {
    // army === true if bot in botArmy
    if (botArmy.includes(bot) && inArmy === true) {
        // remove bot from BotArmy state
        setBotArmy(botArmy.filter(({id}) => id !== bot.id));
    } else if (botArmy.includes(bot) === false) {
        // add bot to BotArmy state
        setBotArmy(botArmy => [...botArmy, bot])
    }
}
  return (
    <div>
        <BotsArmy  botArmy={botArmy} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
    {/* <div className="card-container">
      {data.map((bot, index) => (
        <Bots key={index} bot={bot} />
      ))}
    </div> */}
    <MyArmy botCollection={botCollection} addRemoveBot={addRemoveBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsContainer;