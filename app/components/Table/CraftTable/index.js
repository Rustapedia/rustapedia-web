import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import { Blueprint } from './Blueprint';

export function CraftTable({ currentItem }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Blueprint</th>
          <th>Ingredients</th>
          <th>Time</th>
          <th>Workbench Level</th>
        </tr>
        <Blueprint currentItem={currentItem} />
        {currentItem.craftInfo.requiredItemCounts.map(
          res =>
            res.item.craftInfo != null && <Blueprint currentItem={res.item} />,
        )}
      </tbody>
    </Table>
  );
}

CraftTable.propTypes = {
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
)(CraftTable);
