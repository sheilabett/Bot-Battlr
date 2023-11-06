import React from 'react';
import Bots from './Bots';


function MyArmy({botCollection, addRemoveBot, deleteBot}) 
{
 
    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection.map(bot => (
                    <Bots
                        key={bot.id}
                        bot={bot}
                        addRemoveBot={addRemoveBot}
                        inArmy={false}
                        deleteBot={deleteBot}
                        style={{display: "flex" , flexDirection: "row", textAlign: "center"}}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyArmy;