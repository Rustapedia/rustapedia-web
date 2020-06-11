import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

const FeedingTable = ({ currentItem }) => (
  <Table>
    {currentItem.feeding.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Food</th>
          <th>Adds Stamina</th>
          <th>Healing</th>
        </tr>
        {currentItem.feeding.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link to={items.food.name} key={items.food.id}>
                {items.food.image !== null && (
                  <Img
                    key={items.food.image.id}
                    className="ingredients"
                    alt={items.food.name}
                    src={items.food.image.publicUrl}
                  />
                )}
                {items.food.name}
              </Link>
            </td>
            <td className="tableCell center">{items.addStamina}</td>
            <td className="tableCell center">
              {items.healing !== null ? items.healing : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

FeedingTable.propTypes = {
  currentItem: PropTypes.object,
};

export default FeedingTable;
