import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Blueprint from './Blueprint';

const CraftTable = ({ currentItem }) => (
  <Table>
    {currentItem.craftInfo != null && (
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
    )}
  </Table>
);

CraftTable.propTypes = {
  currentItem: PropTypes.object,
};

export default CraftTable;
