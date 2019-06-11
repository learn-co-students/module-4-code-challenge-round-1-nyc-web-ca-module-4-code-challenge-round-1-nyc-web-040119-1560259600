import React, { Component } from "react";
import { Search } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchInput:''
    }
  }
  getInputValue = (e) => {
    console.log(e);
  }
  render(){
    // console.log(Search);
    // console.log(this.props);
    const root = {
      backgroundColor:" #b5cc18",
      color: "#fff",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      align: "center",
    }
    const bar = {
      marginTop: "40px"

    }
    return(
      <div style={root}>
        <Search style={bar}
          onChange={(e) => this.getInputValue()}>
        </Search>
      </div>
    )
  }
}

export default SearchBar;
