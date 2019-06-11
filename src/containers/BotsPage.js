import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: [],
  }
  componentDidMount() {
     fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
       .then(response => response.json())
       .then(bots => this.setState({ bots }));
   }

   addBot = (bot) => {
     this.setState({
       myBots: [...this.state.myBots, bot]
     })
   }

  render() {
    const myBots = this.state.myBots.map(bot => {
      return <YourBotArmy bot={bot}/>
    })

    console.log(this.state.myBots)
    return (
      <div>
        <BotCollection myBots={this.state.myBots} addBot={this.addBot} bots={this.state.bots} />
        <YourBotArmy bots={this.state.myBots}/>
      </div>
    );
  }

}

export default BotsPage;
