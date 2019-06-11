import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    // console.log(this.props.army)
    let bots = this.props.army.map(bot => <BotCard id={bot.id} key={bot.name} bot={bot}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
