import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

    const botCard = this.props.bots.map(bot => {
      return < BotCard myBots={this.props.myBots} key={bot.id} addBot={this.props.addBot} bot={bot} />
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row" >
    		  {botCard}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
