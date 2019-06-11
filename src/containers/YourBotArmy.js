import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const mappedMyBots = this.props.army.map(bot => {
      return (
        <BotCard
          key={bot.id}
          name={bot.name}
          avatar_url={bot.avatar_url}
          catchphrase={bot.catchphrase}
          health={bot.health}
          damage={bot.damage}
          amor={bot.amor}
          bot_class={bot.bot_class}
        />
      )
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
              {mappedMyBots/*...and here...*/}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
