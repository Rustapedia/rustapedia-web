/**
 * ItemInfoBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ItemInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.respawnTimer !== null && (
        <tr>
          <td className="tableCell">Respawn Timer</td>
          <td className="tableCell">{currentItem.respawnTimer} min</td>
        </tr>
      )}
      {currentItem.upkeep !== null && (
        <tr>
          <td className="tableCell">Upkeep</td>
          <td className="tableCell">{currentItem.upkeep}</td>
        </tr>
      )}
      {currentItem.decay !== null && (
        <tr>
          <td className="tableCell">Decay</td>
          <td className="tableCell">{currentItem.decay} hours</td>
        </tr>
      )}
      {currentItem.decayTimeOutside !== null && (
        <tr>
          <td className="tableCell">Decay time outside</td>
          <td className="tableCell">{currentItem.decayTimeOutside} hours</td>
        </tr>
      )}
      {currentItem.decayTimeInside !== null && (
        <tr>
          <td className="tableCell">Decay time inside</td>
          <td className="tableCell">{currentItem.decayTimeInside} hours</td>
        </tr>
      )}
      {currentItem.speed !== null && (
        <tr>
          <td className="tableCell">Speed</td>
          <td className="tableCell">{currentItem.speed} hours</td>
        </tr>
      )}
      {currentItem.capacity !== null && (
        <tr>
          <td className="tableCell">Capacity</td>
          <td className="tableCell">{currentItem.capacity} ml</td>
        </tr>
      )}
    </tbody>
  </Table>
);

ItemInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemInfo;
