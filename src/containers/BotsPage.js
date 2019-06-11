import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    botList: [],
    botArmy: []
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp=>resp.json())
    .then(botList=>{
      this.setState({
        botList: botList
      })
    })
  }

  enlistBot=(selectedBot)=>{
    // console.log("Enlist this!",selectedBot)
    // remove bot from botList...nvm read directions wrong, but it works :)
    // const newBotList = []
    // this.state.botList.map(bot=>{
    //   return selectedBot === bot ? null : newBotList.push(bot)
    // })
    // this.setState({
    //   botList: newBotList
    // })
    // console.log(newBotList)

    // add bot to botArmy
    const newBotArmy = [...this.state.botArmy]
    if (!newBotArmy.includes(selectedBot)) {
      newBotArmy.push(selectedBot)
      this.setState({
        botArmy: newBotArmy
      })
    }
  }

  delistBot=(selectedBot)=>{
    // console.log("Delist this!", selectedBot)
    const updatedBotArmy = []
    this.state.botArmy.map(bot=>{
      return selectedBot === bot ? null : updatedBotArmy.push(bot)
    })
    // console.log(updatedBotArmy)
    this.setState({
      botArmy: updatedBotArmy
    })
  }


  render() {
    // console.log(this.state.botList)
    return (
      <div>
      <YourBotArmy
      botArmy={this.state.botArmy}
      delistBot={this.delistBot}
      />
      <BotCollection
      botList={this.state.botList}
      enlistBot={this.enlistBot}
      />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
