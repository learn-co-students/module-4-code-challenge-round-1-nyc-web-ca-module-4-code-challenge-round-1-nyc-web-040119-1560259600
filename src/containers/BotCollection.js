import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  generateBot = () => {
    return this.props.bots.map(bot => {
      return  <BotCard
                key={bot.id}
                bot={bot}
                checkBotSpecs={this.props.checkBotSpecs}
              />
    })
  }
  render(){
    // console.log(this.props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.generateBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
