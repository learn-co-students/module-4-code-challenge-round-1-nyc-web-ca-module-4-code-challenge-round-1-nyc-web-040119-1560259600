import React from "react";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log('BotCollection props', this.props);
    console.log('--------------------------');
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
