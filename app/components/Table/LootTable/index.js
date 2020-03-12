import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

const LootTable = ({ currentItem }) => (
  <Table>
    <tbody>
      <tr className="center">
        <th>Container</th>
        <th>Condition</th>
        <th>Amount</th>
        <th>Chance</th>
      </tr>
      {currentItem.lootInfo.map(elems => (
        <tr key={elems.container.id}>
          <td className="tableCell">
            <Link to={elems.container.name}>{elems.container.name}</Link>
          </td>
          <td className="tableCell center">{elems.condition}</td>
          <td className="tableCell center">{elems.count}</td>
          <td className="tableCell center">{elems.chance}%</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

LootTable.propTypes = {
  currentItem: PropTypes.object,
};

export default LootTable;
