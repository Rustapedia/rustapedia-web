import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Img from 'components/Img';
import ItemsContainer from './ItemsContainer';
import ListItem from './ListItem';
import Wrapper from './Wrapper';
import { makeSelectImages } from '../App/selectors';

function ItemsPage({ currentCategory, images }) {
  return (
    <ItemsContainer>
      {currentCategory.map(item => (
        <Wrapper key={`wrapper:${item.id}`}>
          <ListItem
            key={item.id}
            // href={item.name}
            to={`/${item.shortName}`}
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
}

ItemsPage.propTypes = {
  currentCategory: PropTypes.array,
  images: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
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
)(ItemsPage);
