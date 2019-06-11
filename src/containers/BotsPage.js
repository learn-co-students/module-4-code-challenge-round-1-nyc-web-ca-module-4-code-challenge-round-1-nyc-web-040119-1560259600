import React from "react";
import BotCollection from  './BotCollection';
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  state = {
    bots:[],
    army:[],
    chosen: false,
    bot: []
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
  checkBotSpecs = (bot) => {
    // console.log("BotsPage", bot)
    this.setState({
      chosen: !this.state.chosen,
      bot: bot
    })
  }
  enlistToArmy = (bot) => {
    // console.log(bot);
    // console.log(this.removeBotFromBots(bot));
    const oneGone = this.removeBotFromBots(bot)
    this.setState({
      chosen: !this.state.chosen,
      army: [...this.state.army, bot],
      bots: oneGone,
      bot: []
    })

  }
  removeBotFromBots = (enlisted) => {
    return [...this.state.bots].filter(bot => {return bot.id !== enlisted.id})
  }
  returnToScrapPile = (bot) => {
    this.setState({
      chosen: !this.state.chosen,
      bot:[]
    })
  }
  render() {
    // console.log("Bots page", this.state);
    // console.log("army", this.state.army);
    // console.log("chosen", this.state.bot);
    return (
      <div>
        {(!this.state.chosen)
        ? (<BotCollection
            bots={this.state.bots}
            checkBotSpecs={this.checkBotSpecs}
            />)
        : (<BotSpecs
            bot={this.state.bot}
            enlistToArmy={this.enlistToArmy}
            returnToScrapPile={this.returnToScrapPile}
            />)
        }

        <YourBotArmy
          army={this.state.army}
          />
      </div>
    );
  }

}

export default BotsPage;
