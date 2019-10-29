/**
 * WeaponBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const WeaponBox = ({ currentItem }) => (
  <div>
    <Table>
      <tbody>
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Damage</td>
            <td className="tableCell">{currentItem.damage}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Rate of Fire</td>
            <td className="tableCell">{currentItem.rateOfFire}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Aim Cone</td>
            <td className="tableCell">{currentItem.aimCone}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Capacity</td>
            <td className="tableCell">{currentItem.capacity}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Reload</td>
            <td className="tableCell">{currentItem.reload}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td className="tableCell">Draw</td>
            <td className="tableCell">{currentItem.draw}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

WeaponBox.propTypes = {
  currentItem: PropTypes.object,
};

export default WeaponBox;
