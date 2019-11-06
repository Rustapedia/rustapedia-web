import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function CraftTable({ currentItem, images }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Blueprint</th>
          <th>Ingredients</th>
          <th>Time</th>
          <th>Workbench Level</th>
        </tr>
        {currentItem.craft.map(elems => (
          <tr key={elems.blueprint}>
            <td className="tableCell">{elems.blueprint}</td>
            <td className="tableCell center">
              {Object.keys(elems.ingredients).map(res => (
                <span key={res}>
                  <Link key={res} to={`/${res}`}>
                    <Img
                      className="ingredients"
                      alt={res}
                      src={images[`${res}.png`]}
                    />
                  </Link>
                  {elems.ingredients[res]}
                </span>
              ))}
            </td>
            <td className="tableCell center">{elems.time}</td>
            <td className="tableCell center">{elems.workBenchLevel}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

CraftTable.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
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
)(CraftTable);
