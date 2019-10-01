import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { makeSelectShowSubMenu } from './selectors';
import reducer from './reducer';
import { showSubMenuStatus, currentNavChange } from './actions';
import { makeSelectData } from '../App/selectors';
import { currentCategoryChange } from '../App/actions';

const key = 'header';

export function Header({
  data,
  onCurrentNavChanged,
  onCurrentCategoryChanged,
}) {
  useInjectReducer({ key, reducer });
  return (
    <nav>
      {Object.keys(data).map(nav => (
        <div key={nav}>
          <button
            key={nav}
            type="button"
            onClick={() => onCurrentNavChanged(data[nav])}
          >
            {nav}
          </button>
          <div key={data[nav]}>
            {Object.keys(data[nav]).map(category => (
              <Link
                key={category}
                to={`/${category}`}
                onClick={() => onCurrentCategoryChanged(data[nav][category])}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

Header.propTypes = {
  data: PropTypes.object,
  onCurrentCategoryChanged: PropTypes.func,
  onCurrentNavChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  showSubMenu: makeSelectShowSubMenu(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentCategoryChanged: category =>
      dispatch(currentCategoryChange(category)),
    onCurrentShowSubMenu: showSubMenu =>
      dispatch(showSubMenuStatus(showSubMenu)),
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
