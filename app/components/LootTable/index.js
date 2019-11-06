import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

export function LootTable({ currentItem }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Container</th>
          <th>Condition</th>
          <th>Amount</th>
          <th>Chance</th>
        </tr>
        {currentItem.loot.map(elems => (
          <tr key={elems.container}>
            <td className="tableCell">
              <Link to={`/${elems.shortName}`}>{elems.container}</Link>
            </td>
            <td className="tableCell center">{elems.condition}</td>
            <td className="tableCell center">{elems.amount}</td>
            <td className="tableCell center">{elems.chance}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

LootTable.propTypes = {
  currentItem: PropTypes.object,
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
)(LootTable);
