import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    console.log('BotsPage mounted');
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(bots=>this.setState({bots}))
  }

  addBotToArmy = (e) => {
    // console.log('adding bot to army');
    // console.log(e.currentTarget.id);
    let bot = this.state.bots.find(bot=>{
      return bot.id === parseInt(e.currentTarget.id)
    })
    if (this.state.myBots.includes(bot)) {} else {
      this.setState({myBots: [...this.state.myBots, bot]})
    }
  }

  removeBotFromArmy = (e) => {
    console.log('removing bot from army');
    let bot = this.state.bots.find(bot=>{
      return bot.id === parseInt(e.currentTarget.id)
    })
    if (this.state.myBots.includes(bot)) {
      let newMyBots = this.state.myBots.filter(bot=>{
        return bot.id !== parseInt(e.currentTarget.id)
      })
      this.setState({myBots: newMyBots})
    }
  }

  render() {
    console.log('BotsPage state', this.state);
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} addOrRemoveBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection bots={this.state.bots} addOrRemoveBotFromArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
