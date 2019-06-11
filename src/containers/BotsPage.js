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
    //make new array of bots
    const newBots = []
    //iterate through regular bots
    this.state.bots.map(bot => {
      //if bot id matches, add to yourBots
      if(bot.id === botID){
        this.setState({
          yourBots: [...this.state.yourBots, bot]
        })
        console.log(this.state.yourBots)

      }
    })
  }

  render() {
    console.log(this.state.bots)
    return (
      <div>
        <BotCollection
          bots={this.state.bots}
          enlistBot={this.enlistBot}
        />
        <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
