import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    myMarineCorps: [],
    selectedBot: []
  }

  componentDidMount() {
    fetch(API)
    .then(r=>r.json())
    .then(bots=>{
      this.setState({
        bots
      })
    })
  }

  showBotDets = (e) => {
    let showBot = this.state.bots.find(b=>{
      return b.id === parseInt(e.currentTarget.id)
    })
    console.log(showBot);
    this.setState({
      selectedBot: [...this.state.selectedBot, showBot]
    })
  }

  recruits = (e) => {
    let recruited = this.state.bots.find(b=>{
      return b.id === parseInt(e.currentTarget.id)
    })
    let alreadyRecruited = this.state.myMarineCorps.filter(b=>{
      return b.id === parseInt(e.currentTarget.id)
    })
    alreadyRecruited.length === 0 ? this.setState({
      myMarineCorps: [...this.state.myMarineCorps, recruited],
      selectedBot: []
    }) : false
  }

  awolBots = (e) => {
    let awol = this.state.myMarineCorps.find(b=>{
      return b.id === parseInt(e.currentTarget.id)
    })
    let notAwol = this.state.myMarineCorps.filter(b=>{
      return b.id !== parseInt(e.currentTarget.id)
    })
    this.setState({
      bots: [...this.state.bots, awol],
      myMarineCorps: notAwol
    })
  }

  render() {
    const { bots, myMarineCorps, selectedBot } = this.state
    return (
      <div>
        <YourBotArmy awol={this.awolBots} bots={myMarineCorps} />
        <BotCollection showBotDets={this.showBotDets} recruits={this.recruits} awol={this.awolBots} selectedBot={selectedBot} bots={bots} />
      </div>
    );
  }

}

export default BotsPage;
