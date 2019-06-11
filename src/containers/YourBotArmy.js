import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  displayArmy = () => {
    let army = this.props.bots.map((bot) => {
      return <BotCard name={bot['name']}
							id={bot.id}
							damage={bot['damage']}
							armor={bot['armor']}
							class={bot['bot_class']}
							addToArmy={this.props.addToArmy}
							catchphrase={bot['catchphrase']}
							url={bot['avatar_url']}
							health={bot['health']}/>
    })
    return army
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
