import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <BotCollection
          allBots={this.props.allBots}
          enlistBot={this.props.enlistBot}
        />
      </div>
    );
  }

}

export default BotsPage;
