import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import SearchBar from 'containers/SearchBar';
import { Menu, Dropdown } from 'semantic-ui-react';
import removeSpace from 'utils/removeSpace';
import reducer from './reducer';
import { currentNavChange } from './actions';
import { makeSelectData, makeSelectShowMenu } from '../App/selectors';
import { currentCategoryChange, showMenuChange } from '../App/actions';
import { makeSelectCurrentNav } from './selectors';
import Wrapper from './Wrapper';

const key = 'header';

export function Header({
  categories,
  onCurrentNavChanged,
  onCurrentCategoryChanged,
  onShowMenuChanged,
  currentNav,
  showMenu,
}) {
  useInjectReducer({ key, reducer });
  return (
    <Wrapper>
      <div
        className={
          showMenu ? 'header gray-background' : 'header gray-background'
        }
      >
        <SearchBar className="header-search flex-1" data={categories} />
        <button
          type="button"
          className="btn-menu"
          onClick={() => onShowMenuChanged()}
        >
          <span className={showMenu ? 'rotate-firstLine' : 'firstLine'} />
          <span className={showMenu ? 'rotate-secondLine' : 'secondLine '} />
          <span className={showMenu ? 'rotate-thirdLine' : 'thirdLine'} />
        </button>
        <Menu
          className={
            showMenu ? 'show hidden-menu flex-2' : 'hidden-menu flex-2'
          }
        >
          <Menu.Item>
            <StyledLink
              className="block white"
              to="/"
              onClick={() => onShowMenuChanged()}
            >
              Home
            </StyledLink>
          </Menu.Item>
          {categories.map(category => (
            <Menu.Item key={category.id}>
              <Dropdown
                text={category.name}
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
                          to={`/${removeSpace(subCategory.name)}`}
                          onClick={() => onCurrentCategoryChanged(subCategory)}
                        >
                          {subCategory.name}
                        </StyledLink>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Wrapper>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  onCurrentCategoryChanged: PropTypes.func,
  onCurrentNavChanged: PropTypes.func,
  onShowMenuChanged: PropTypes.func,
  currentNav: PropTypes.object,
  showMenu: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectData(),
  currentNav: makeSelectCurrentNav(),
  showMenu: makeSelectShowMenu(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentCategoryChanged: category =>
      dispatch(currentCategoryChange(category)),
    onCurrentNavChanged: nav => dispatch(currentNavChange(nav)),
    onShowMenuChanged: () => dispatch(showMenuChange()),
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
