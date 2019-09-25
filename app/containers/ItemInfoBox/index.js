/**
 * ItemInfoBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';

const ItemInfoBox = ({ currentItem }) => (
  <div>
    <table>
      <tbody>
        {currentItem.respawnTimer !== undefined && (
          <tr>
            <td>Respawn Timer</td>
            <td>{currentItem.respawnTimer}</td>
          </tr>
        )}
        {currentItem.upkeep !== undefined && (
          <tr>
            <td>Upkeep</td>
            <td>{currentItem.upkeep}</td>
          </tr>
        )}
        {currentItem.decay !== undefined && (
          <tr>
            <td>Decay</td>
            <td>{currentItem.decay}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

ItemInfoBox.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemInfoBox;
