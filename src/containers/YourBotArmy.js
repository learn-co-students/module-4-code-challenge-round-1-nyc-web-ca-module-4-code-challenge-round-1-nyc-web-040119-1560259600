import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  allMyBots = () => {
    return this.props.myBots.map(bot => {
      return (
        <BotCard
          key={bot.id}
          removeBot={this.props.removeBot}
          bot={bot} />
      )
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.allMyBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
