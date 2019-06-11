import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
import BotSpecs from "../components/BotSpecs.js"
class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    botList: [],
    botArmy: [],
    flipped: false,
    selectedBot: {}
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

  flipCard=(selectedBot)=>{
    this.setState({
      flipped:true,
      selectedBot:selectedBot
    })
    console.log("Flip this!", selectedBot)
    // const flippedBot = {...selectedBot, isFlipped:true}
    //
    // console.log(flippedBot)
  }

  mainMenu=()=>{
    this.setState({
      flipped:false
    })
  }

  showFlippedCard=()=>{
    return <BotSpecs key={this.state.selectedBot.id}
    enlistBot={this.enlistBot}
     bot={this.state.selectedBot}
     mainMenu={this.mainMenu}/>
  }

  render() {
    // console.log(this.state.botList)
    return (
      <div>
      <YourBotArmy
      botArmy={this.state.botArmy}
      delistBot={this.delistBot}
      />
        {this.state.flipped? this.showFlippedCard():<BotCollection
        botList={this.state.botList}
        enlistBot={this.enlistBot}
        flipCard={this.flipCard}
        />}
      </div>
    );
  }

}

export default BotsPage;
