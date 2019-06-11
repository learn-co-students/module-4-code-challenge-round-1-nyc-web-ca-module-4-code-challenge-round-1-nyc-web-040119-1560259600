import React from "react";

// let coo = 'asd'


class BotCard extends React.Component {
  // state = {
  //   myBots: []
  // }

  // coo = () => {
  //   this.props.myBots.includes(bot) ?
  //   console.log('bot is already part of your army') :
  //   this.props.addBot(bot)
  // }

  render() {


    const { bot } = this.props;

    let botType;

    switch (bot.bot_class) {
      case "Assault":
        botType = <i className="icon military" />;
        break;
      case "Defender":
        botType = <i className="icon shield" />;
        break;
      case "Support":
        botType = <i className="icon ambulance" />;
        break;
      default:
        botType = <div />;
    }

    return (
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={() => this.props.myBots.includes(bot) ?
              console.log('bot is already part of your army') :
              this.props.addBot(bot) }
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>

            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }

};


//it errors when I click on the bot
// army I made a ternary operator to
// try and make it so it didnt, and
// then instead of console logging as
// an else, I was going to remove the bot from myBots array
//which granted would also remove the bot if you clicked the original
//icon but would also remove it if you clicked on it in the myArmy bar


export default BotCard;
