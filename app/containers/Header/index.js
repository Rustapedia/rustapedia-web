import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
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
    <div>
      <nav>
        <Link to="/">Home</Link>
        {Object.keys(data).map(prop => (
          <div key={prop}>
            <button
              key={prop}
              type="button"
              onClick={() => onCurrentNavChanged(data[prop])}
            >
              {prop}
            </button>
          </div>
        ))}
      </nav>
      {currentNav !== undefined &&
        Object.keys(currentNav).map(category => (
          <Link
            key={category}
            to={`/${category}`}
            onClick={() => onCurrentCategoryChanged(currentNav[category])}
          >
            {category}
          </Link>
        ))}
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
