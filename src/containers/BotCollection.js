import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  allBots = () => {
    return this.props.bots.map(bot => {
      return (
        <BotCard
          key={bot.id}
          selectCurrentBot={this.props.selectCurrentBot}
          bot={bot} />
      )
    })
  }

  render(){
    console.log("BotCollection props: ", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.allBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
