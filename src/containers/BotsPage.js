import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(bots => {
      return this.setState({
        bots
      })
    })
  }

  addBot = (bot) => {
    console.log(bot)
    const copyBots = [...this.state.bots]
    const newBots = copyBots.filter(theBot => {
      return theBot.name !== bot.name
    })
    this.setState({
      bots: newBots,
      army: [...this.state.army, bot]
    })
  }

  removeBot = (bot) => {
    const copyArmy = [...this.state.army]
    const newArmy = copyArmy.filter(theBot => {
      return theBot.name !== bot.name
    })
    this.setState({
      bots: [...this.state.bots, bot],
      army: newArmy
    })
  }

  render() {
    console.log('Bots Page State', this.state)
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          removeBot={this.removeBot}/>
        <BotCollection
          bots={this.state.bots}
          addBot={this.addBot}/>

      </div>
    );
  }

}

export default BotsPage;
