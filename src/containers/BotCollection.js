import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //get the state of all bots and rener them to bot collection
listAllBots = () => {
	let bots = this.props.bots.map((bot) => {

		console.log(typeof(bot["bot_class"])=== 'string')
		return <BotCard name={bot['name']}
							id={bot.id}
							damage={bot['damage']}
							armor={bot['armor']}
							class={bot['bot_class']}
							addToArmy={this.props.addToArmy}
							catchphrase={bot['catchphrase']}
							url={bot['avatar_url']}
							health={bot['health']}/>
	})
	return bots
}
// "id": 301,
//     "name": "gs-98",
//     "health": 71,
//     "damage": 85,
//     "armor": 34,
//     "bot_class": "Assault",
//     "catchphrase": "111111111111110011001111100101110010010110001100",
//     "avatar_url": "https://robohash.org/voluptasetab.png?size=300x300&set=set1",

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.listAllBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
