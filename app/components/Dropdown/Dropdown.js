import React, { Component } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
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
      options: props.options,
      value: ''
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

  handleToggleDropDown = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  handleClickDropDown = () => {
    this.setState({
      active: true
    })
  }

  handleSelectItem = (item) => {
    this.props.selectedItem(item)
    this.setState({
      active: false,
      selectedItem: item,
      value: item
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  filter = memoize(
    (options, value) => options.filter(option => {
      const lowerCaseOption = option.toLowerCase()
      const lowerCaseValue = value.toLowerCase()
      return lowerCaseOption.includes(lowerCaseValue)
    })
  );

  render() {
    const filteredOptions = this.filter(this.props.options, this.state.value)

    return (
      <Container ref={this.setWrapperRef}>
        <SearchBar
          value={this.state.value}
          placeholder={this.props.placeholder}
          selectedItem={this.state.selectedItem}
          onClick={this.handleClickDropDown}
          onChange={this.handleChange}
        />
        {/* <SelectedItem onClick={this.handleToggleDropDown}>
          {this.state.selectedItem}
        </SelectedItem> */}
        <List active={this.state.active}>
          {
            filteredOptions.length > 0
            ? filteredOptions.map(option =>
                <Item
                  key={option}
                  item={option}
                  onClick={this.handleSelectItem}
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