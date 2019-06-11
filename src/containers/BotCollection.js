import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {

    return this.props.allBots.map( (bot) => {
      // console.dir(bot)
      return (
        <BotCard
          key={bot.id}
          enlistBot={this.props.enlistBot}
          bot={bot}
        />
      // id={bot.id}
      // name={bot.name}
      // health={bot.health}
      // damage={bot.damage}
      // armor={bot.armor}
      // avatar_url={bot.avatar_url}
      // bot_class={bot.bot_class}
      // catchphrase={bot.catchphrase}
      )

    })


  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
