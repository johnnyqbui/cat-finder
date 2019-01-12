/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import memoize from 'memoize-one';
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
    const filteredSelectedBreed = this.props.catBreeds.filter(cat => cat.name === breed)[0]
    this.props.fetchCatImage(filteredSelectedBreed.id)
    this.setState({
      selectedBreed: filteredSelectedBreed
    })
  }

  filter = memoize(
    (catBreeds, selectedBreed) => catBreeds.filter(cat => {
      return cat.name === selectedBreed.name
    })
  );

  render() {
    const { selectedBreed } = this.state;
    const { loading, error, catBreeds } = this.props;
    const breedNames = flattenArr(catBreeds, 'name');

    const filteredSelectedBreed = this.filter(this.props.catBreeds, selectedBreed)[0]
    console.log(this.props)
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
            <Dropdown
              placeholder={'Search breeds'}
              options={breedNames}
              selectedItem={(item) => this.onSelectedBreed(item)}
            />
          </div>
          {
            filteredSelectedBreed &&
            <div>
              <p>Name: {filteredSelectedBreed.name}</p>
              <p>Temperament: {filteredSelectedBreed.temperament}</p>
              <p>Origin: {filteredSelectedBreed.origin}</p>
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