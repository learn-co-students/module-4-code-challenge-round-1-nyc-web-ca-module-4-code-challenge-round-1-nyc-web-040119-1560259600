import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  //initialize state
  constructor(){
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  //componentDidMount fetch and update state
  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(bots => this.setState({
        bots: bots
      })
    )
  }

  //move bot to army on click
  enlistBot = (botID) => {

    let newBots = []

    this.state.bots.map(bot => {
      //if bot id matches, add to yourBots
      if(bot.id === botID){
        newBots = [...this.state.bots.slice(0, bot.id-1), this.state.bots.slice(bot.id+1, this.state.bots.length)]
        console.log(bot.id)
        this.setState({
          bots: newBots,
          yourBots: [...this.state.yourBots, bot]
        })
      }
    })
    console.log(this.state.yourBots)
  }
  //i know I have new empty bots being added to the end of the bots list. It is currently 11:00.

  //i also know that the bots aren't being removed from the list when they're added to the army. With additional time, I think I could fix that. It is currently 11:03

  //with an additional hour or so, I think I would be able to get the rest of the necessary functionality (removing bots from the army) and fixing the weird adding of empty bots bug

  render() {
    console.log(this.state.bots)
    console.log(this.state.yourBots)
    return (
      <div>
        <BotCollection
          bots={this.state.bots}
          enlistBot={this.enlistBot}
        />
        <YourBotArmy
          yourBots={this.state.yourBots}
        />
      </div>
    );
  }

}

export default BotsPage;
