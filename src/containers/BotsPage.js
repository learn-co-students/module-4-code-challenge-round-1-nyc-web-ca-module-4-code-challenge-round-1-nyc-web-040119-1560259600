import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(bots => {
      this.setState({bots: bots})
    })
  }

  addBot = (e) => {
    let botImage = e.currentTarget.firstChild.firstChild.src
    let clickedBot = this.state.bots.find(data => data.src === botImage)
    // console.log("updated bots state:", [...this.state.bots, clickedBot] )
    this.setState({bots: [...this.state.army, clickedBot]})
    // console.log('clicked on a bot')
  }

  render() {
    return (
      <div>

          <BotCollection bots={this.state.bots} addBot={this.addBot} army={this.state.army}/>
          <YourBotArmy army={this.state.army}/>

      /* put your components here */
      </div>
    );
  }

}

export default BotsPage;
