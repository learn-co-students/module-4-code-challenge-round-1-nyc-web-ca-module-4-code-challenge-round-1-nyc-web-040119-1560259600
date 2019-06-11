import React from "react";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log('YourBotArmy props', this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
