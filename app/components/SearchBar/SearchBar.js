import React, { Component } from 'react';
import Input from './input';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false
    }
  }

  handleFocus = () => {
    this.setState({isFocused: true})
  }

  handleBlur = () => {
    this.setState({isFocused:false})
  }

  render() {
    return (
      <Input
        type='text'
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        focused={this.state.isFocused}
        onChange={this.handleChange}
        {...this.props}
      />
    )
  }
}

export default SearchBar

