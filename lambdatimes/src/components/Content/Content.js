import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
        tabs:tabData,
        cards:cardData,
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {
  
  const filteredCards = this.state.cards.filter(card=> {
    if (this.state.selected === "all") {
      return true;
    } else {
      return card.tab == this.state.selected;
    }
  }
);

return filteredCards;
}


render() {
  // Destructure state
  const { tabs, selected } = this.state;
  return (
    <div className="content-container">
      {/* 
        Add 2 props to the Tabs component, 
        `selectedTab` that includes the currently selected tab
        and `selectTabHandler` that includes the function to change the selected tab
      */}
      <Tabs tabs={this.state.tabs} />
      <Tabs
        tabs={tabs}
        selectedTab={selected}
        selectTabHandler={this.changeSelected}
      />
    
      <Cards cards={this.filterCards()} />
    </div>
  );
}
}