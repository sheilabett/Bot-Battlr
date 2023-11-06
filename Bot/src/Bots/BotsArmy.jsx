import React from "react";
import Bots from "./Bots";

function botsArmy({botArmy, addRemoveBot, deleteBot}){
    return (
        <div className="ui segment inverted olive bot-army">
          <div className="ui five column grid">
            <div className="row bot-army-row">
                {botArmy.map(bot => (
                    <ReadableStreamBYOBRequest
                        key={bot.id}
                        bot={bot}
                        addRemoveBot={addRemoveBot}
                        inArmy={true}
                        deleteBot={deleteBot}
                        style={{display: "flex" , flexDirection: "row", textAlign: "center"}}
                    />
                ))}
            </div>
          </div>
        </div>
      );
    }
export default botsArmy;