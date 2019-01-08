/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Dropdown from 'components/Dropdown'
import { flattenArr } from './utils/flattenArr'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    selectedBreed: ''
  }

  componentDidMount() {
    this.props.fetchCats()
  }

  onSelectedBreed(breed) {
    const selectedBreedData = this.props.catBreeds.filter(cat => cat.name === breed)[0]
    this.setState({
      selectedBreed: selectedBreedData
    })
  }

  render() {
    const { selectedBreed } = this.state;
    const { loading, error, catBreeds } = this.props;
    const breeds = flattenArr(catBreeds, 'name');

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Home page to find cats"
          />
        </Helmet>
        <div>
          <h1>Hello!</h1>
          <h3>To Dos:</h3>
          <ul>
            <li>obtain user's location to find closest pet shelter</li>
            <li>breed</li>
            <li>personality</li>
            <li>traits, and maybe levels?</li>
            <li>cat image from the cat api</li>
          </ul>
          <div>
            <p>Select Cat Breed:</p>
            <Dropdown options={breeds} selectedItem={(item) => this.onSelectedBreed(item)}/>
          </div>
          {
            this.state.selectedBreed &&
            <div>
              <p>Name: {selectedBreed.name}</p>
              <p>Temperament: {selectedBreed.temperament}</p>
            </div>
          }

        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  catBreeds: PropTypes.array
};