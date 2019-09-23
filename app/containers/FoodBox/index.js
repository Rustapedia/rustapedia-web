/**
 * FoodBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';

const FoodBox = ({ currentItem }) => (
  <div>
    <table>
      <tbody>
        {currentItem.calories !== undefined && (
          <tr>
            <td>Calories</td>
            <td>{currentItem.calories}</td>
          </tr>
        )}
        {currentItem.hydration !== undefined && (
          <tr>
            <td>Hydration</td>
            <td>{currentItem.hydration}</td>
          </tr>
        )}
        {currentItem.health !== undefined && (
          <tr>
            <td>Health</td>
            <td>{currentItem.health}</td>
          </tr>
        )}
        {currentItem.healthOverTime !== undefined && (
          <tr>
            <td>Health Over Time</td>
            <td>{currentItem.healthOverTime}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

FoodBox.propTypes = {
  currentItem: PropTypes.object,
};

export default FoodBox;
