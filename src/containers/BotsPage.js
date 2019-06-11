import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
// highest component below App, serve as main
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }
  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(bots=>{
      this.setState({
        bots: bots
      })
    })
  }
//
addBot(id)=>{
  let newBot = this.state.bots.find(bot=>bot.id===id)
  this.setState({
    myBots: [...myBots, newBot]
  })
}
  render() {
    // console.log(this.state.bots)
    return (
      <div>
       <BotCollection bots={this.state.bots}/>
       <YourBotArmy myBots={this.state.myBots}/>

      </div>
    );
  }g

}

export default BotsPage;

// renderBots= ()=>{ return this.state.bots.map(bot=>{
  //       return(
    //       <BotCollection
    //       key={bot.id}
    //       name={bot.name}
    //       health={bot.health}
    //       damage={bot.damage}
    //       catchphrase={bot.catchphrase}
    //       armor={bot.armor}
    //       />
    //    )
    //   })
    // }
