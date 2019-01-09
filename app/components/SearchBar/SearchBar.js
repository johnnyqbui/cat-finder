import React, { Component } from 'react';
import Input from './input';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.selectedItem || '',
      isFocused: false
    }
  }

  componentDidUpdate(prevProps) {
    (this.props.selectedItem !== prevProps.selectedItem) && (
      this.setState({
        value: this.props.selectedItem
      })
    )
  }

  onChange = (event) => {
    this.setState({value: event.target.value});
  }

  onFocus = () => {
    this.setState({isFocused: true})
  }

  onBlur = () => {
    this.setState({isFocused:false})
  }

  render() {
    return (
      <Input
        type='text'
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        focused={this.state.isFocused}
        value={this.state.value}
        onChange={this.onChange}
        {...this.props}
      />
    )
  }
}

export default SearchBar

