import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBots = () => {
    return this.props.army.map(bot => {
      return <BotCard
        key={bot.id}
        bot={bot}
        handleClick={this.props.removeBot}
        />
    })
  }

  render(){
    console.log('Your Bot Army Props', this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
