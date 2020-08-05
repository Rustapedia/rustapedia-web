import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Img from 'components/Img';
import removeSpace from 'utils/removeSpace';
import ItemsContainer from './ItemsContainer';
import ListItem from './ListItem';
import Wrapper from './Wrapper';

function ItemsPage({ currentCategory }) {
  return (
    <ItemsContainer>
      {currentCategory.items.map(items => (
        <Wrapper key={`wrapper:${items.id}`}>
          <ListItem
            key={items.id}
            // href={item.name}
            to={`/${removeSpace(items.name)}`}
          >
            {items.image !== null && (
              <Img
                className="small"
                key={`img:${items.id}`}
                // eslint-disable-next-line global-require
                alt={items.name}
                src={items.image.publicUrl}
              />
            )}
            <span key={items.name}>{items.name}</span>
          </ListItem>
        </Wrapper>
      ))}
    </ItemsContainer>
  );
}

ItemsPage.propTypes = {
  currentCategory: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({});

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
