import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import LocaleToggle from 'containers/LocaleToggle';
import ChapterNav from './ChapterNav';
import GlobalNav from './GlobalNav';
import Wrapper from './Wrapper';
import StyledLink from './StyledLink';
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
    <div style={{ zIndex: '2' }}>
      <GlobalNav>
        <Wrapper>
          <StyledLink to="/">Home</StyledLink>
          {categories.map(category => (
            <StyledLink
              to="#"
              key={category.id}
              onClick={() => onCurrentNavChanged(category)}
            >
              {category.name}
            </StyledLink>
          ))}
          <section>
            <LocaleToggle />
          </section>
        </Wrapper>
      </GlobalNav>
      <ChapterNav>
        <Wrapper>
          {currentNav !== undefined &&
            currentNav.subCategory !== undefined &&
            currentNav.subCategory.map(subCategory => (
              <StyledLink
                key={subCategory.id}
                to={`/${subCategory.name}`}
                onClick={() =>
                  onCurrentCategoryChanged(currentNav[subCategory])
                }
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
