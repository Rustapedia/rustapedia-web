/**
 * ItemInfoBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ItemInfoBox = ({ currentItem }) => (
  <div>
    <Table>
      <tbody>
        {currentItem.respawnTimer !== undefined && (
          <tr>
            <td className="tableCell">Respawn Timer</td>
            <td className="tableCell">{currentItem.respawnTimer}</td>
          </tr>
        )}
        {currentItem.upkeep !== undefined && (
          <tr>
            <td className="tableCell">Upkeep</td>
            <td className="tableCell">{currentItem.upkeep}</td>
          </tr>
        )}
        {currentItem.decay !== undefined && (
          <tr>
            <td className="tableCell">Decay</td>
            <td className="tableCell">{currentItem.decay}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

ItemInfoBox.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemInfoBox;
