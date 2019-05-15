import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentItem } from '../App/selectors';

const ItemPage = ({ currentItem }) => <div>rivet {currentItem.name}</div>;

ItemPage.propTypes = {
  currentItem: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentItem: makeSelectCurrentItem(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ItemPage);
