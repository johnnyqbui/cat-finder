import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List'
import Item from './Item'
import SelectedItem from './SelectedItem'
import Container from './Container'
import SearchBar from 'components/SearchBar'
import EmptySearch from './EmptySearch';

/* eslint-disable react/prefer-stateless-function */
class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selectedItem: '',
      options: props.options
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  onOutsideClick = (event) => {
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

  onClickDropDown = () => {
    this.setState({
      active: true
    })
  }

  onSelectItem = (item) => {
    this.props.selectedItem(item)
    this.setState({
      active: false,
      selectedItem: item
    })
  }

  onChange = (event) => {
    const filteredOptions = this.props.options.filter(option => {
      const lowerCaseOption = option.toLowerCase()
      const lowerCaseInput = event.target.value.toLowerCase()
      return lowerCaseOption.indexOf(lowerCaseInput) > -1
    })

    this.setState({
      selectedItem: event.target.value,
      options: filteredOptions
    })
  }

  render() {
    return (
      <Container ref={this.setWrapperRef}>
        <SearchBar
          placeholder={this.props.placeholder}
          selectedItem={this.state.selectedItem}
          onClick={this.onClickDropDown}
          onChange={this.onChange}
        />
        {/* <SelectedItem onClick={this.onToggleDropDown}>
          {this.state.selectedItem}
        </SelectedItem> */}
        <List active={this.state.active}>
          {
            this.state.options.length > 0
            ? this.state.options.map(option =>
                <Item
                  key={option}
                  item={option}
                  onClick={this.onSelectItem}
                />
              )
            : <EmptySearch>Unable to find breed, try again</EmptySearch>

          }
        </List>
      </Container>
    );
  }
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  selectedItem: PropTypes.func
};

export default Dropdown;