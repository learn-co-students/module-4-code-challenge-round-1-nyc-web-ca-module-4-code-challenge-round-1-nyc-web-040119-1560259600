import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import YourBotArmy from "./containers/YourBotArmy";
import "./App.css";

const api = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class App extends Component {

  state = {
    allBots: [],
    myBots: []
  }

  componentWillMount(){
    fetch(api)
      .then( res => res.json())
      .then( bots =>{

        this.setState({
          allBots:bots
        }/*, () => (console.log(this.state.allBots))*/)

      })
  }

  enlistBot = (e) => {
    // console.log(e.target.id)
    const target = parseInt(e.target.id)

    const clickedBot = () => {
      return this.state.allBots.find( (bot) => {
        return bot.id === target
      })
    }
    // console.log(clickedBot())

    const currentBots = [...this.state.myBots, clickedBot()]

    this.setState({
      myBots: currentBots
    },() => ( console.log( this.state.myBots)))

  }

  releaseBot = (e) => {
    const target = parseInt(e.target.id)

    const indexBot = this.state.myBots.findIndex( (bot)=> {
      return bot.id === target
    })

    this.state.myBots.splice(indexBot,1)
    //mutate the state and removes the one bot

    const currentBots = this.state.myBots

    this.setState({
      myBots: currentBots
    })
    
  }

  render() {
    // {console.log(this.enlistBot)}
    return (
      <div className="App">
        <YourBotArmy
          currentBots={this.state.myBots}
          releaseBot={this.releaseBot}
        />
        <BotsPage
          allBots={this.state.allBots}
          enlistBot={this.enlistBot}
        />
      </div>
    );
  }
}

export default App;
