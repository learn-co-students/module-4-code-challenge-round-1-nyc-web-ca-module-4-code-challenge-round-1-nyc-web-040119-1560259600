import React from "react";
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.showBot ? (<BotSpecs
          bot={this.props.clickedBot}
          handleEnlist={this.props.enlist}

          />
       ) : (
         <BotCollection
          allBots={this.props.allBots}
          deetBot={this.props.deetBot}
        />)
      }
      </div>
    );
  }

}

export default BotsPage;
