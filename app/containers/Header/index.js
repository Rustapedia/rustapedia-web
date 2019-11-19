import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
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
  data,
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
          {Object.keys(data).map(prop => (
            <StyledLink
              to="#"
              key={prop}
              onClick={() => onCurrentNavChanged(data[prop])}
            >
              {prop}
            </StyledLink>
          ))}
        </Wrapper>
      </GlobalNav>
      <ChapterNav>
        <Wrapper>
          {currentNav !== undefined &&
            Object.keys(currentNav).map(category => (
              <StyledLink
                key={category}
                to={`/${category}`}
                onClick={() => onCurrentCategoryChanged(currentNav[category])}
              >
                {category}
              </StyledLink>
            ))}
        </Wrapper>
      </ChapterNav>
    </div>
  );
}

Header.propTypes = {
  data: PropTypes.object,
  onCurrentCategoryChanged: PropTypes.func,
  onCurrentNavChanged: PropTypes.func,
  currentNav: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
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
