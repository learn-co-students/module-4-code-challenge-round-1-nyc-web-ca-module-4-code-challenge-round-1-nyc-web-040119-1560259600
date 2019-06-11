import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotCard from '../components/BotCard'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: [],
    clickedBot: {}
  }

  componentDidMount() {
    console.log('BotsPage mounted');
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(bots=>this.setState({bots}))
  }

  addBotToArmy = (e) => {
    // console.log(e.currentTarget.id);
    // console.log(bot);
    console.log('adding bot to army');
    let bot = this.state.bots.find(bot=>{
      return bot.id === parseInt(e.currentTarget.id, 10)
    })
    if (this.state.myBots.includes(bot)) {} else {
      this.setState({myBots: [...this.state.myBots, bot]})
    }
  }

  removeBotFromArmy = (e) => {
    console.log('removing bot from army');
    let bot = this.state.bots.find(bot=>{
      return bot.id === parseInt(e.currentTarget.id, 10)
    })
    if (this.state.myBots.includes(bot)) {
      let newMyBots = this.state.myBots.filter(bot=>{
        return bot.id !== parseInt(e.currentTarget.id, 10)
      })
      this.setState({myBots: newMyBots})
    }
  }

  showBotSpecs = (e) => {
    // console.log(e.currentTarget.id);
    console.log('showing bot specs');
    let clickedBot = this.state.bots.find(bot=>{
      return bot.id === parseInt(e.currentTarget.id, 10)
    })
    this.setState({clickedBot})
  }

  goBack = () => {
    this.setState({clickedBot: {}})
  }

  showBotCollectionOrBotSpecs = () => {
    if (Object.keys(this.state.clickedBot).length) {
      return <BotSpecs bot={this.state.clickedBot} goBack={this.goBack} addBotToArmy={this.addBotToArmy}/>
    } else {
      return <BotCollection bots={this.botCards()}/>
    }
  }

  botCards = () => {
    return this.state.bots.map(bot=>{
      return <BotCard bot={bot} key={bot.id} id={bot.id} addOrRemoveBotFromArmy={this.addBotToArmy} showBotSpecs={this.showBotSpecs}/>
    })
  }

  myBotCards = () => {
    return this.state.myBots.map(bot=>{
      return <BotCard bot={bot} key={bot.id} id={bot.id} addOrRemoveBotFromArmy={this.removeBotFromArmy} showBotSpecs={this.showBotSpecs}/>
    })
  }

  render() {
    console.log('BotsPage state', this.state);
    return (
      <div>
        <YourBotArmy myBots={this.myBotCards()}/>
        {this.showBotCollectionOrBotSpecs()}
      </div>
    );
  }

}

export default BotsPage;
