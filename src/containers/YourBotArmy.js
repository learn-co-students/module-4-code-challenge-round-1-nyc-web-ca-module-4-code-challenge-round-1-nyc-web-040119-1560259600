import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    console.log(this.props.bots)
    
    const botCard = this.props.bots.map(bot => {
      return < BotCard key={bot.name} addBot={this.props.addBot} bot={bot} />
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {botCard}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
