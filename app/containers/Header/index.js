import React, { memo } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { makeSelectData } from '../App/selectors';
import { currentCategoryChange } from '../App/actions';

const Header = ({ onCurrentCategoryChanged, data }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <NavDropdown title="Items" id="collasible-nav-dropdown">
          {Object.keys(data).map(category => (
            <div key={category}>
              <Link
                to={`/${category}`}
                onClick={() => onCurrentCategoryChanged(data[category])}
              >
                {category}
              </Link>
            </div>
          ))}
        </NavDropdown>
        <NavDropdown
          href="#environment"
          title="Environment"
          id="collasible-nav-dropdown"
        />
        <NavDropdown href="#tools" title="Tools" id="collasible-nav-dropdown" />
        <NavDropdown
          href="#community"
          title="Community"
          id="collasible-nav-dropdown"
        />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  data: PropTypes.object,
  onCurrentCategoryChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentCategoryChanged: category =>
      dispatch(currentCategoryChange(category)),
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
