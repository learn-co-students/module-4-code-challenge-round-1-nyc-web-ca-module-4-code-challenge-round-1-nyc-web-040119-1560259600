import React from "react";
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: [],
    currentBot: [],
    botPressed: false
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

    // goBack from BotSpecs
    this.goBack()
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
  } // end removeBot

  selectCurrentBot = (event) => {
    const botCopy = [...this.state.bots]
    const currentBot = botCopy.find(bot => bot.id === parseInt(event.currentTarget.dataset.id))
    console.log("selectCurrentBot", currentBot)

    this.setState({
      currentBot,
      botPressed: true
    })
    console.log("currentBot state: ", this.state)
  } // end selectCurretBot

  goBack = () => {
    this.setState({
      botPressed: false
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

        {
          this.state.botPressed ?
            <BotSpecs
              goBack={this.goBack}
              addBot={this.addBot}
              bot={this.state.currentBot} />
        :
            <BotCollection
              selectCurrentBot={this.selectCurrentBot}
              bots={this.state.bots} />
        }
      </div>
    );
  }

}

export default BotsPage;
