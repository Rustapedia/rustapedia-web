/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import P from 'components/P';
import { createStructuredSelector } from 'reselect';
import SearchBar from 'containers/SearchBar';
import Wrapper from './Wrapper';
import { makeSelectData } from '../App/selectors';

function HomePage({ data }) {
  return (
    <Wrapper>
      <H1 className="headline">Rustapedia</H1>
      <P className="logo">your pocket encyclopedia</P>
      <SearchBar data={data} />
      <Footer />
    </Wrapper>
  );
}

HomePage.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);
