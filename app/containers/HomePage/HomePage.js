/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Dropdown from 'components/Dropdown'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    const { loading, error, catBreeds } = this.props;

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
          <Dropdown options={catBreeds}/>
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