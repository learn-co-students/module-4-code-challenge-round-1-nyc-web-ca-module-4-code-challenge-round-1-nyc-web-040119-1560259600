import React, { Fragment } from "react";
import { Search, Dropdown } from 'semantic-ui-react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {
  state = {
    bots: [],
    botsSearch: [],
    myBots: [],
    currBotSpecs: null,
    searchOptions: [
      {key: "Name", text: "Name", value: "Name"},
      {key: "Health", text: "Health", value: "Health"},
      {key: "Damage", text: "Damage", value: "Damage"},
      {key: "Armor", text: "Armor", value: "Armor"}
    ],
    searchBy: ""
  }


  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(bots => this.setState({bots}))
  }


  addToMyBots = e => {
    const addBotId = parseInt(e.currentTarget.closest(".has-bot-id").id, 10) // FIND ID OF CLICKED BOT
    const findBotInMyBots = this.state.myBots.find(bot => bot.id === addBotId)
    this.stopLookingAtBotSpecs()


    if (!findBotInMyBots) { // IF BOT IS NOT IN myBots, ADD TO myBots
      const findBotInBots = this.state.bots.find(bot => bot.id === addBotId)
      this.setState({myBots: [...this.state.myBots, findBotInBots]})
    }
  }


  removeFromMyBots = e => {
    // FIND ID OF CLICKED BOT AND FILTER ONLY THOSE BOTS WHOSE ID != CLICKED BOT ID
    const rmvBotId = parseInt(e.currentTarget.id, 10)
    const myBotsCopy = this.state.myBots.filter(bot => bot.id !== rmvBotId)
    this.setState({myBots: myBotsCopy})
  }


  showBotSpecs = e => {
    const showBotId = parseInt(e.currentTarget.id, 10)
    const findBotInBots = this.state.bots.find(bot => bot.id === showBotId)

    this.setState({currBotSpecs: findBotInBots})
  }


  stopLookingAtBotSpecs = () => {
    this.setState({currBotSpecs: null})
  }


  handleDropdownChange = e => {
    const searchBy = e.target.innerText.toLowerCase()
    this.setState({searchBy})
  }


  handleSearchChange = e => {
    const searchInput = e.target.value

    if (searchInput === "") {
      // IF SEARCH BAR EMPTY //////////
      this.setState({botsSearch: []})
    } else if (this.state.searchBy === "name") {
      // SEARCH BY NAME //////////
      const botsSearch = this.state.bots.filter(bot => {
        return bot.name.toLowerCase().includes(searchInput.toLowerCase())
      })

      this.setState({botsSearch})
    } else {
      // SEARCH BY STAT //////////
      const botsSearch = this.state.bots.filter(bot => {
        return bot[this.state.searchBy] === parseInt(searchInput, 10)
      })

      this.setState({botsSearch})
    }
  }


  render() {
    console.log("App state: ", this.state)

    return (
      <div>
        <YourBotArmy
          bots={this.state.myBots}
          removeFromMyBots={this.removeFromMyBots} />
        {
          this.state.currBotSpecs ?
          (
            <BotSpecs
              bot={this.state.currBotSpecs}
              handleClickGoBack={this.stopLookingAtBotSpecs}
              handleClickEnlist={this.addToMyBots} />
          ) : (
            <Fragment>
              <Dropdown
                style={{display: "inline"}}
                placeholder='Search by'
                fluid
                selection
                onChange={this.handleDropdownChange}
                options={this.state.searchOptions} />
              <Search
                style={{display: "inline"}}
                showNoResults={false}
                onSearchChange={this.handleSearchChange} />
              <br/>
              <br/>
              <BotCollection
                bots={this.state.botsSearch.length === 0 ? this.state.bots : this.state.botsSearch}
                addToMyBots={this.addToMyBots}
                showBotSpecs={this.showBotSpecs} />
            </Fragment>
          )
        }
      </div>
    );
  }

}

export default BotsPage;
