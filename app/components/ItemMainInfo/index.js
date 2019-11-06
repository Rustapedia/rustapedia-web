/**
 * MainItemInfo
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ItemMainInfo = ({ currentItem }) => (
  <div>
    <Table>
      <tbody>
        {currentItem.identifier !== undefined && (
          <tr>
            <td className="tableCell">Indentifier</td>
            <td className="tableCell">{currentItem.identifier}</td>
          </tr>
        )}
        {currentItem.stackSize !== undefined && (
          <tr>
            <td className="tableCell">Stack Size</td>
            <td className="tableCell">{currentItem.stackSize}</td>
          </tr>
        )}
        {currentItem.despawnTime !== undefined && (
          <tr>
            <td className="tableCell">Despawn Time</td>
            <td className="tableCell">{currentItem.despawnTime} min</td>
          </tr>
        )}
        {currentItem.HP !== undefined && (
          <tr>
            <td className="tableCell">HP</td>
            <td className="tableCell">{currentItem.HP}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

ItemMainInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemMainInfo;
