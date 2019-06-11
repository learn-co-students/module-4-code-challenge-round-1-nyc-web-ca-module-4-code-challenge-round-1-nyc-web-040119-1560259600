import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard
        key={bot.id}
        bot={bot}
        handleClick={this.props.addBot}
        />
    })
  }

  render(){
    console.log('Bot Collection', this.props)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBots()}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
