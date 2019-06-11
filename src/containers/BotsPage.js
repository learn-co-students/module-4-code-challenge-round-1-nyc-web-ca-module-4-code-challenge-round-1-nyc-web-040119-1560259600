import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
     // console.log("Component did mount")
     fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
       .then(response => response.json())
       .then(botsArr=>  {
         this.setState({
         bots: botsArr})
     })
  }//componentDidMount


  botSelector = (event) => {
    console.log(event.currentTarget.id)

    let armyBot = this.state.bots.find(bot => parseInt(event.currentTarget.id) === bot.id)
    this.setState({
      army: [...this.state.army, armyBot]
    })

    let filteredBotsArray = this.state.bots.filter(bot => bot.id !== parseInt(event.currentTarget.id))
    this.setState({
      bots: filteredBotsArray
    })
  } //botSelector

  showSpecs = (event) => {
    console.log(event.currentTarget.id);
    let armyBot = this.state.bots.find(bot => parseInt(event.currentTarget.id) === bot.id)
    // this.setState({
    //   bots: armyBot.specs
    // })
  }


  render() {
    console.log(this.state.army);
    return (
      <div>
      <YourBotArmy
      army= {this.state.army}/>
      <BotCollection
      bots={this.state.bots}
      botSelector={this.botSelector}
      showSpecs={this.showSpecs}
      />
      </div>
    );
  }

}

export default BotsPage;
