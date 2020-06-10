import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';

const BreedsTable = ({ currentItem }) => (
  <Table>
    {currentItem.breeds.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Breed</th>
          <th>Speed km/h</th>
          <th>Stamina</th>
          <th>HP</th>
        </tr>
        {currentItem.breeds.map(items => (
          <tr key={items.id}>
            <td className="tableCell">{items.breed}</td>
            <td className="tableCell center">{items.speed}</td>
            <td className="tableCell center">{items.stamina}</td>
            <td className="tableCell center">{items.hp}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

BreedsTable.propTypes = {
  currentItem: PropTypes.object,
};

export default BreedsTable;
