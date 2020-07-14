/**
 * MainItemInfo
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ItemMainInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.identifier !== null && (
        <tr>
          <td className="tableCell">Indentifier</td>
          <td className="tableCell">{currentItem.identifier}</td>
        </tr>
      )}
      {currentItem.stackSize !== null && (
        <tr>
          <td className="tableCell">Stack Size</td>
          <td className="tableCell">x{currentItem.stackSize}</td>
        </tr>
      )}
      {currentItem.despawnTime !== null && (
        <tr>
          <td className="tableCell">Despawn Time</td>
          <td className="tableCell">{currentItem.despawnTime} min</td>
        </tr>
      )}
      {currentItem.hp !== null && (
        <tr>
          <td className="tableCell">HP</td>
          <td className="tableCell">{currentItem.hp}</td>
        </tr>
      )}
      {currentItem.stamina !== null && (
        <tr>
          <td className="tableCell">Stamina</td>
          <td className="tableCell">{currentItem.stamina}</td>
        </tr>
      )}
      {currentItem.mainRotorHP !== null && (
        <tr>
          <td className="tableCell">Main Rotor HP</td>
          <td className="tableCell">{currentItem.mainRotorHP}</td>
        </tr>
      )}
      {currentItem.tailRotorHP !== null && (
        <tr>
          <td className="tableCell">Tail Rotor HP</td>
          <td className="tableCell">{currentItem.tailRotorHP}</td>
        </tr>
      )}
    </tbody>
  </Table>
);

ItemMainInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemMainInfo;
