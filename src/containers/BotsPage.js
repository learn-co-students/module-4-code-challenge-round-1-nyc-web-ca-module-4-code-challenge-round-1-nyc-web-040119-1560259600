import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'


class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: []
  }

  addToArmy = (robot) => {
    this.setState({
      botArmy: [...this.state.botArmy, robot]
    })
  }
  //fetch the bots when mounted 

  componentDidMount() {
    fetch(URL)
    .then((res) => {return res.json()})
    .then((data) => {
      this.setState({
        bots: data
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy}/>
        {/* put your components here */}
        <BotCollection 
        addToArmy={this.addToArmy}
        bots={this.state.bots}/> 
        
      </div>
    );
  }

}

export default BotsPage;
