import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log(this.props.botRemover);
    let bots = this.props.bots.map(bot => <BotCard id={bot.id} key={bot.name} bot={bot} botSelector={this.props.botSelector} showSpecs={this.props.showSpecs}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
