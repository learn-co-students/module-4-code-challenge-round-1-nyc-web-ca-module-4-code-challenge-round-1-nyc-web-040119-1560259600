import React from "react";

const BotCard = props => {
   // const { bot } = props;
   //wasn't too familiar with destructing

  let botType;

  switch (props.bot_class) {
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

  //have props in BotCard
  // console.log("in bot card", props)
  return (

    <div className="ui column">
      <div
        className="ui card"
        key={props.id}
        onClick={(e) => console.log("add code to connect event listener", props.addBot(e))}
      >
        <div className="image">
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
