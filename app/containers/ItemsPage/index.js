import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ItemsContainer from './ItemsContainer';
import ListItem from './ListItem';
import Wrapper from './Wrapper';
import Img from './Img';

import { currentItemChange, currentCategoryChange } from '../App/actions';
import {
  makeSelectCurrentItem,
  makeSelectCurrentCategory,
  makeSelectImages,
} from '../App/selectors';

const ItemsPage = ({ currentCategory, onCurrentItemChanged, images }) => (
  <ItemsContainer>
    {currentCategory.map(item => (
      <Wrapper key={`wrapper:${item.id}`}>
        <ListItem
          key={item.id}
          // href={item.name}
          onClick={() => onCurrentItemChanged(item)}
          to={`/${item.name}`}
        >
          <Img
            key={`img:${item.id}`}
            // eslint-disable-next-line global-require
            src={images[`${item.img}.png`]}
            alt={item.name}
          />
          <div key={item.name}>{item.name}</div>
        </ListItem>
      </Wrapper>
    ))}
  </ItemsContainer>
);

ItemsPage.propTypes = {
  currentCategory: PropTypes.array,
  onCurrentItemChanged: PropTypes.func,
  images: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentItems: makeSelectCurrentCategory(),
  currentItem: makeSelectCurrentItem(),
  images: makeSelectImages(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentItemChanged: item => dispatch(currentItemChange(item)),
    onCurrentItemsChanged: category =>
      dispatch(currentCategoryChange(category)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemsPage);
