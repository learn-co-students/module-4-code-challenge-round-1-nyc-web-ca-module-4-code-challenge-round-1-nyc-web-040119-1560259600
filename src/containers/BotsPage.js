import React from "react";
import BotCollection from  './BotCollection';
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots:[],
    army:[]
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(bots => {
      // console.log(bots);
      this.setState({
        bots:bots
      })
    })
  }
  addBotToArmy = (bot) => {
    console.log("BotsPage", bot)
    this.setState({
      army:[...this.state.army, bot]
    })
  }
  render() {
    // console.log("Bots page", this.state);
    // console.log("army", this.state.army);
    return (
      <div>
        <BotCollection
          bots={this.state.bots}
          addBotToArmy={this.addBotToArmy}
          />
        <YourBotArmy
          army={this.state.army}
          />
      </div>
    );
  }

}

export default BotsPage;
