import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  myBotCards = () => {
    return this.props.myBots.map(bot=>{
      return <BotCard bot={bot} key={bot.id} id={bot.id} addOrRemoveBotFromArmy={this.props.addOrRemoveBotFromArmy}/>
    })
  }

  render(){
    console.log('YourBotArmy props', this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.myBotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
