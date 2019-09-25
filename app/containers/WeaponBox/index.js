/**
 * WeaponBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';

const WeaponBox = ({ currentItem }) => (
  <div>
    <table>
      <tbody>
        {currentItem.damage !== undefined && (
          <tr>
            <td>Damage</td>
            <td>{currentItem.damage}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td>Rate of Fire</td>
            <td>{currentItem.rateOfFire}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td>Aim Cone</td>
            <td>{currentItem.aimCone}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td>Capacity</td>
            <td>{currentItem.capacity}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td>Reload</td>
            <td>{currentItem.reload}</td>
          </tr>
        )}
        {currentItem.damage !== undefined && (
          <tr>
            <td>Draw</td>
            <td>{currentItem.draw}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

WeaponBox.propTypes = {
  currentItem: PropTypes.object,
};

export default WeaponBox;
