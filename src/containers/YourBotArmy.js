import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  buildBotArmy = ()=>{
    return this.props.botArmy.map(bot=>{
      return <BotCard
      key={bot.id}
      bot={bot}
      handleBotMove={this.props.delistBot}
      />
    })
  }
  render(){
    // console.log(this.props.botArmy)
    // console.log(this.props.delistBot)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {
              this.buildBotArmy()
            }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
