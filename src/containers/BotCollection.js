import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  buildBots = ()=>{
      return this.props.botList.map(bot=>{
        return <BotCard
        handleBotMove={this.props.enlistBot}
        key={bot.id}
        bot={bot}/>
      })
  }

  render(){
    // console.log(this.props.botList)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

    		  {/*...and here..*/
            this.buildBots()
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
