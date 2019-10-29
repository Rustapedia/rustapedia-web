import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Img from 'components/Img';
import ItemsContainer from './ItemsContainer';
import ListItem from './ListItem';
import Wrapper from './Wrapper';
import { currentItemChange } from '../App/actions';
import { makeSelectImages } from '../App/selectors';

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
            className="small"
            key={`img:${item.id}`}
            // eslint-disable-next-line global-require
            src={images[`${item.shortName}.png`]}
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
  images: makeSelectImages(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentItemChanged: item => dispatch(currentItemChange(item)),
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
