import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import SearchBar from 'containers/SearchBar';
import ChapterNav from './ChapterNav';
import GlobalNav from './GlobalNav';
import Wrapper from './Wrapper';
import reducer from './reducer';
import { currentNavChange } from './actions';
import { makeSelectData } from '../App/selectors';
import { currentCategoryChange } from '../App/actions';
import { makeSelectCurrentNav } from './selectors';

const key = 'header';

export function Header({
  categories,
  onCurrentNavChanged,
  onCurrentCategoryChanged,
  currentNav,
}) {
  useInjectReducer({ key, reducer });
  return (
    <div style={{ zIndex: '2', marginBottom: '30px' }}>
      <GlobalNav>
        <Wrapper>
          <StyledLink className="block" to="/">
            Home
          </StyledLink>
          {categories.map(category => (
            <StyledLink
              className="block"
              to="#"
              key={category.id}
              onClick={() => onCurrentNavChanged(category)}
            >
              {category.name}
            </StyledLink>
          ))}
          <span>
            <SearchBar className="header-search" data={categories} />
          </span>
        </Wrapper>
      </GlobalNav>
      <ChapterNav
        className={
          currentNav !== undefined &&
          currentNav.subCategory !== undefined &&
          'visible'
        }
      >
        <Wrapper>
          {currentNav !== undefined &&
            currentNav.subCategory !== undefined &&
            currentNav.subCategory.map(subCategory => (
              <StyledLink
                className="block"
                key={subCategory.id}
                to={`/${subCategory.name}`}
                onClick={() => onCurrentCategoryChanged(subCategory)}
              >
                {subCategory.name}
              </StyledLink>
            ))}
        </Wrapper>
      </ChapterNav>
    </div>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  onCurrentCategoryChanged: PropTypes.func,
  onCurrentNavChanged: PropTypes.func,
  currentNav: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectData(),
  currentNav: makeSelectCurrentNav(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentCategoryChanged: category =>
      dispatch(currentCategoryChange(category)),
    onCurrentNavChanged: nav => dispatch(currentNavChange(nav)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
