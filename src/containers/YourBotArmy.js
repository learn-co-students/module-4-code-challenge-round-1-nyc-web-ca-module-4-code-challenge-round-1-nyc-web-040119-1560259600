import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  generateBotArmy = () => {
    return this.props.army.map(bot => {
      return  <BotCard
                key={bot.id}
                bot={bot}
              />
    })
  }
  render(){
    // console.log(this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
