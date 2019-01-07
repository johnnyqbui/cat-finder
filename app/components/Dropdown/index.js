import React, { Component } from 'react';
import List from './List'
import Item from './Item'

/* eslint-disable react/prefer-stateless-function */
class Dropdown extends Component {
  state = {
    active: false
  }

  onToggleDropDown = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <List active={this.state.active}>
        {
          this.props.options.map(child =>
            <Item
              key={child.$t}
              item={child.$t}
              onClick={this.onToggleDropDown}
            />
          )
        }
      </List>
    );
  }
}

export default Dropdown;