/*
 * HomePage Index
 *
 * This is to inject reducer and saga
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './modules/reducer';
import saga from './modules/saga';

import { mapStateToProps, mapDispatchToProps } from './container'
import HomePage from './HomePage';

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);