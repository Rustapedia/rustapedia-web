import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectImages } from '../App/selectors';

const ItemPage = ({ currentItem, images }) => (
  <div>
    <img alt={currentItem.name} src={images[`${currentItem.shortName}.png`]} />
  </div>
);

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ItemPage);
