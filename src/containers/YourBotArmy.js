import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  eachBot = () => {
    return this.props.bots.map(b=>{
      return <BotCard recruitAwol={this.props.awol} bot={b} />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.eachBot()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
