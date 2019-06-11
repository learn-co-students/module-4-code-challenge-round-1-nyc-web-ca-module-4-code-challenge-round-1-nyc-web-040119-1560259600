import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: []
  }


  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(bots => this.setState({bots}))
  }


  addToMyBots = e => {
    const addBotId = parseInt(e.currentTarget.id, 10) // FIND ID OF CLICKED BOT
    const findBotInMyBots = this.state.myBots.find(bot => bot.id === addBotId)

    if (!findBotInMyBots) { // IF BOT IS NOT IN myBots, ADD TO myBots
      const findBotInBots = this.state.bots.find(bot => bot.id === addBotId)
      this.setState({myBots: [...this.state.myBots, findBotInBots]})
    }
  }


  removeFromMyBots = e => {
    // FIND ID OF CLICKED BOT AND FILTER ONLY THOSE BOTS WHOSE ID != CLICKED BOT ID
    const rmvBotId = parseInt(e.currentTarget.id, 10)
    const myBotsCopy = this.state.myBots.filter(bot => bot.id !== rmvBotId)
    this.setState({myBots: myBotsCopy})
  }


  render() {
    console.log("App state: ", this.state)

    return (
      <div>
        <YourBotArmy
          bots={this.state.myBots}
          removeFromMyBots={this.removeFromMyBots} />
        <BotCollection
          bots={this.state.bots}
          addToMyBots={this.addToMyBots} />
      </div>
    );
  }

}

export default BotsPage;
