import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  eachBot = () => {
    return this.props.bots.map(b=>{
      return <BotCard recruitAwol={this.props.recruits} bot={b} />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.eachBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
