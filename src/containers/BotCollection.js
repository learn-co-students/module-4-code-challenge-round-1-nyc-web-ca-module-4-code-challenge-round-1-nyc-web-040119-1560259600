import React from "react";
import BotCard from "../components/BotCard";



class BotCollection extends React.Component {
  //your code here

  render(){
    // have data of bots from API
    // console.log("in BotCollection:",this.state.bots)

    const mappedBots = this.props.bots.map(bot => {
      return (
        <BotCard
          addBot={this.props.addBot}
          key={bot.id}
          name={bot.name}
          avatar_url={bot.avatar_url}
          catchphrase={bot.catchphrase}
          health={bot.health}
          damage={bot.damage}
          amor={bot.amor}
          bot_class={bot.bot_class}
        />
      )
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { mappedBots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
