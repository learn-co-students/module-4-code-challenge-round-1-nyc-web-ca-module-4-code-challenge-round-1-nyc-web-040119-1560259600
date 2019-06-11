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
    botPressed: false,
    filtered: [],
    filterOn: false
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(bots => {
        this.setState({ bots })
      })
  }

  // HELPER FUNCTIONS
  filterBots = (event) => {
    const botCopy = [...this.state.bots]
    const filteredBots = botCopy.filter(bot => bot.bot_class === event.target.value)

    switch (event.target.value) {
      case ("All"):
        this.setState({
          filtered: botCopy,
          filterOn: false
        })
        break
      default:
        this.setState({
          filtered: filteredBots,
          filteredOn: true
        })
        break
    }
  }

  addBot = (event) => {
    // find the bot that is clicked
    const botCopy = [...this.state.bots]
    const selectedBot = botCopy.find(bot => bot.id === parseInt(event.currentTarget.dataset.id))

    console.log("addBot", selectedBot)

    // remove selectedBot from current bots
    const removeSelectedBot = botCopy.filter(bot => bot.id !== selectedBot.id)

    // filtered
    const filteredCopy = [...this.state.filtered]
    const removeSelectedBotFiltered = filteredCopy.filter(bot => bot.id !== selectedBot.id)

    if (this.state.filtered) {
      // add to myBots state
      this.setState({
        bots: [...removeSelectedBot],
        myBots: [...this.state.myBots, selectedBot],
        filtered: [...removeSelectedBotFiltered]
      })
    } else {
      this.setState({
        bots: [...removeSelectedBot],
        myBots: [...this.state.myBots, selectedBot]
      })
    }


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
    const Filter = () => {
      return (
        <div style={{textAlign: 'center', marginBottom: '1em'}}>
          <button
            value="All"
            onClick={event => this.filterBots(event)}>
            All
          </button>
          <button
            value="Assault"
            onClick={event => this.filterBots(event)}>
            Assault
          </button>
          <button
            value="Defender"
            onClick={event => this.filterBots(event)}>
            Defender
          </button>
          <button
            value="Support"
            onClick={event => this.filterBots(event)}>
            Support
          </button>
        </div>
      )
    }
    return (
      <div>
        <YourBotArmy
          removeBot={this.removeBot}
          myBots={this.state.myBots} />

        {Filter()}

        {
          this.state.botPressed ?
            <BotSpecs
              goBack={this.goBack}
              addBot={this.addBot}
              bot={this.state.currentBot} />
        :
            <BotCollection
              selectCurrentBot={this.selectCurrentBot}
              bots={this.state.filteredOn ? this.state.filtered : this.state.bots} />
        }
      </div>
    );
  }

}

export default BotsPage;
