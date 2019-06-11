import React from "react";
import BotCard from "../components/BotCard.js";
import BotSpecs from "../components/BotSpecs.js";

class BotCollection extends React.Component {
  // showBotDets={this.showBotDets} recruits={this.recruits} selectedBot={selectedBot} bots={bots}
  eachBot = () => {
    let { bots, selectedBot, recruits, awol, showBotDets } = this.props
    console.log(selectedBot);
    return selectedBot.length > 0 ? selectedBot.map(b=>{
      return <BotSpecs showBotDets={showBotDets} recruit={recruits} awol={awol} bot={b} />
    }) : bots.map(b=>{
      return <BotCard showBotDets={showBotDets} recruitAwol={recruits} bot={b} />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.eachBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
