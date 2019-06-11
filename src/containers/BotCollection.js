import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  // //trying enlist bot here
  // botClick = (event) => {
  //   console.log(event.target)
  // }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              enlistBot={this.props.enlistBot}
            />
          ))}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
