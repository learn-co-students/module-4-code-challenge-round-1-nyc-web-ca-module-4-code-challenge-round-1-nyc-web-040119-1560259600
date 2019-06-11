import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
// releaseBot={this.props.releaseBot}
  renderBots = () => {

    return this.props.currentBots.map( (bot) => {
      // console.dir(bot)
      return (
        <BotCard
          key={bot.id}
          bot={bot}
        />
      )
    })
  }

  render(){
    console.log(this.props)
    return (
      <div
        className="ui segment inverted olive bot-army"
        onClick={this.props.releaseBot}
        >
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
