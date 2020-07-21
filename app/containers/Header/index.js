import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import SearchBar from 'containers/SearchBar';
import { Menu, Dropdown } from 'semantic-ui-react';
import reducer from './reducer';
import { currentNavChange } from './actions';
import { makeSelectData } from '../App/selectors';
import { currentCategoryChange } from '../App/actions';
import { makeSelectCurrentNav } from './selectors';
import Wrapper from './Wrapper';

const key = 'header';

export function Header({
  categories,
  onCurrentNavChanged,
  onCurrentCategoryChanged,
  currentNav,
}) {
  useInjectReducer({ key, reducer });
  return (
    <Wrapper className="header">
      <Menu>
        <Menu.Item>
          <SearchBar className="header-search" data={categories} />
        </Menu.Item>
        <Menu.Item>
          <StyledLink className="block white" to="/">
            Home
          </StyledLink>
        </Menu.Item>
        {categories.map(category => (
          <Dropdown
            text={category.name}
            key={category.id}
            className="link item"
            onClick={() => onCurrentNavChanged(category)}
          >
            <Dropdown.Menu>
              {currentNav !== undefined &&
                currentNav.subCategory !== undefined &&
                currentNav.subCategory.map(subCategory => (
                  <Dropdown.Item key={subCategory.id}>
                    <StyledLink
                      className="block"
                      key={subCategory.id}
                      to={`/${subCategory.name}`}
                      onClick={() => onCurrentCategoryChanged(subCategory)}
                    >
                      {subCategory.name}
                    </StyledLink>
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </Menu>
    </Wrapper>
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
