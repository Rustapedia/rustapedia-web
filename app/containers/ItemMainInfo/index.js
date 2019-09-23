/**
 * MainItemInfo
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';

const ItemMainInfo = ({ currentItem }) => (
  <div>
    <table>
      <tbody>
        {currentItem.identifier !== undefined && (
          <tr>
            <td>Indentifier</td>
            <td>{currentItem.identifier}</td>
          </tr>
        )}
        {currentItem.stackSize !== undefined && (
          <tr>
            <td>Stack Size</td>
            <td>{currentItem.stackSize}</td>
          </tr>
        )}
        {currentItem.despawnTime !== undefined && (
          <tr>
            <td>Despawn Time</td>
            <td>{currentItem.despawnTime}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

ItemMainInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default ItemMainInfo;
