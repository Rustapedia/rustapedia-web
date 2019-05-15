import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ItemsContainer from './ItemsContainer';
import ListItem from './ListItem';
import Img from './Img';
import Wrapper from './Wrapper';

import { currentItemChange } from '../App/actions';
import { makeSelectCurrentItem, makeSelectData } from '../App/selectors';

const ItemsPage = ({ data, onCurrentItemChanged }) => (
  <ItemsContainer>
    {data.items.map(item => (
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
            src={require(`${item.img}`)}
            alt=""
          />
          <div key={item.name}>{item.name}</div>
        </ListItem>
      </Wrapper>
    ))}
  </ItemsContainer>
);

ItemsPage.propTypes = {
  data: PropTypes.object,
  onCurrentItemChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  currentItem: makeSelectCurrentItem(),
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
