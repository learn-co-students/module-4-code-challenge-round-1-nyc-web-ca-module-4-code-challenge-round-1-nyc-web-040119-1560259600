import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  botCards = () => {
    return this.props.bots.map(bot=>{
      return <BotCard bot={bot} key={bot.id} id={bot.id} addOrRemoveBotFromArmy={this.props.addOrRemoveBotFromArmy}/>
    })
  }

  render(){
    console.log('BotCollection props', this.props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
