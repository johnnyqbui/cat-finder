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
    this.setState({
      selectedBreed: breed
    })
  }

  render() {
    const { selectedBreed } = this.state;
    const { loading, error, catBreeds } = this.props;
    const breeds = flattenArr(catBreeds, 'name');

    const filteredSelectedBreed = this.props.catBreeds.filter(cat => cat.name === selectedBreed)[0]

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
              options={breeds}
              selectedItem={(item) => this.onSelectedBreed(item)}
            />
          </div>
          {
            filteredSelectedBreed &&
            <div>
              <p>Name: {filteredSelectedBreed.name}</p>
              <p>Temperament: {filteredSelectedBreed.temperament}</p>
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