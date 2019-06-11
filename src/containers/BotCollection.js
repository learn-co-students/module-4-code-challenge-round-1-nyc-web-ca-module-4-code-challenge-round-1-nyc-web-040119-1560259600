import React from "react";
import BotCard from "../components/BotCard";
// all the bots will be displayed
class BotCollection extends React.Component {
  //your code here
  renderBots=()=>{
    return this.props.bots.map(bot=>{
        return(
          <BotCard
          key={bot.id}
          name={bot.name}
          health={bot.health}
          damage={bot.damage}
          catchphrase={bot.catchphrase}
          armor={bot.armor}
          addBot={this.props.addBot}
          />
        )
  })
}
  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
       {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
// <BotCard
// key={this.props.id}
// name={this.props.name}
// health={this.props.health}
// damage={this.props.damage}
// catchphrase={this.props.catchphrase}
// armor={this.props.armor}
// />
