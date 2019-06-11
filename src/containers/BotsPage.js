import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(bots => {
        this.setState({ bots })
      })
  }

  // HELPER FUNCTIONS
  addBot = (event) => {
    // find the bot that is clicked
    const botCopy = [...this.state.bots]
    const selectedBot = botCopy.find(bot => bot.id === parseInt(event.currentTarget.dataset.id))

    console.log("addBot", selectedBot)

    // remove selectedBot from current bots
    // const findIndex = botCopy.indexOf(selectedBot)
    // console.log("findIndex", findIndex)

    const removeSelectedBot = botCopy.filter(bot => bot.id !== selectedBot.id)

    // add to myBots state
    this.setState({
      bots: [...removeSelectedBot],
      myBots: [...this.state.myBots, selectedBot]
    })

    console.log("myBots state", this.state)
  } // end addBot

  removeBot = (event) => {
    const myBotCopy = [...this.state.myBots]
    const selectedMyBot = myBotCopy.find(bot => bot.id === parseInt(event.currentTarget.dataset.id))

    console.log("removeBot", selectedMyBot)

    // removed selectedMyBot from current myBots
    const removeSelectedMyBot = myBotCopy.filter(bot => bot.id !== selectedMyBot.id)

    // add selectedMyBot back to bots and removed selectedMyBot from myBots
    this.setState({
      bots: [...this.state.bots, selectedMyBot],
      myBots: [...removeSelectedMyBot]
    })
  }
  // end HELPER FUNCTIONS

  render() {
    console.log("BotsPage state: ", this.state)
    return (
      <div>
        <YourBotArmy
          removeBot={this.removeBot}
          myBots={this.state.myBots} />
        <BotCollection
          addBot={this.addBot}
          bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
