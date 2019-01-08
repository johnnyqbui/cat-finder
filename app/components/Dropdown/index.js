import React, { Component } from 'react';
import List from './List'
import Item from './Item'
import SelectedItem from './SelectedItem'
import Container from './Container'

/* eslint-disable react/prefer-stateless-function */
class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selectedItem: 'Select Breed'
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleOutsideClick = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        active: false
      })
    }
  }

  onToggleDropDown = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  onSelectItem = (item) => {
    this.props.selectedItem(item)
    this.setState({
      active: false,
      selectedItem: item
    })
  }

  render() {
    return (
      <Container ref={this.setWrapperRef}>
        <SelectedItem onClick={this.onToggleDropDown}>
          {this.state.selectedItem}
        </SelectedItem>
        <List active={this.state.active}>
          {
            this.props.options.map(child =>
              <Item
                key={child}
                item={child}
                onClick={this.onSelectItem}
              />
            )
          }
        </List>
      </Container>
    );
  }
}

export default Dropdown;