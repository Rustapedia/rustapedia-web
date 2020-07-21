/**
 * WeaponBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const WeaponInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.damage !== null && (
        <tr>
          <td className="tableCell">Damage</td>
          <td className="tableCell">{currentItem.damage}</td>
        </tr>
      )}
      {currentItem.rateOfFire !== null && (
        <tr>
          <td className="tableCell">Rate of Fire</td>
          <td className="tableCell">{currentItem.rateOfFire} RPM</td>
        </tr>
      )}
      {currentItem.aimCone !== null && (
        <tr>
          <td className="tableCell">Aim Cone</td>
          <td className="tableCell">{currentItem.aimCone}°</td>
        </tr>
      )}
      {currentItem.aimConePercent !== null && (
        <tr>
          <td className="tableCell">Aim Cone</td>
          <td className="tableCell">{currentItem.aimConePercent}%</td>
        </tr>
      )}
      {currentItem.capacity !== null && (
        <tr>
          <td className="tableCell">Capacity</td>
          <td className="tableCell">{currentItem.capacity}</td>
        </tr>
      )}
      {currentItem.reload !== null && (
        <tr>
          <td className="tableCell">Reload</td>
          <td className="tableCell">{currentItem.reload} sec</td>
        </tr>
      )}
      {currentItem.draw !== null && (
        <tr>
          <td className="tableCell">Draw</td>
          <td className="tableCell">{currentItem.draw} sec</td>
        </tr>
      )}
      {currentItem.throw !== null && (
        <tr>
          <td className="tableCell">Throw</td>
          <td className="tableCell">{currentItem.throw}</td>
        </tr>
      )}
      {currentItem.range !== null && (
        <tr>
          <td className="tableCell">Range</td>
          <td className="tableCell">{currentItem.range} m</td>
        </tr>
      )}
      {currentItem.recoil !== null && (
        <tr>
          <td className="tableCell">Recoil</td>
          <td className="tableCell">{currentItem.recoil}</td>
        </tr>
      )}
      {currentItem.recoilPercent !== null && (
        <tr>
          <td className="tableCell">Recoil</td>
          <td className="tableCell">{currentItem.recoilPercent}%</td>
        </tr>
      )}
      {currentItem.attackSpeed !== null && (
        <tr>
          <td className="tableCell">Attack Speed</td>
          <td className="tableCell">{currentItem.attackSpeed} HPM</td>
        </tr>
      )}
      {currentItem.exposionRadius !== null && (
        <tr>
          <td className="tableCell">Exposion Radius</td>
          <td className="tableCell">{currentItem.exposionRadius} m</td>
        </tr>
      )}
      {currentItem.explosionDelay !== null && (
        <tr>
          <td className="tableCell">Explosion Delay</td>
          <td className="tableCell">{currentItem.explosionDelay}</td>
        </tr>
      )}
      {currentItem.dugChance !== null && (
        <tr>
          <td className="tableCell">Dug Chance</td>
          <td className="tableCell">{currentItem.dugChance} %</td>
        </tr>
      )}
    </tbody>
  </Table>
);

WeaponInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default WeaponInfo;
