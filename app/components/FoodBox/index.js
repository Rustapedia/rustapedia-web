/**
 * FoodBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const FoodBox = ({ currentItem }) => (
  <div>
    <Table>
      <tbody>
        {currentItem.calories !== undefined && (
          <tr>
            <td className="tableCell">Calories</td>
            <td className="tableCell">{currentItem.calories}</td>
          </tr>
        )}
        {currentItem.hydration !== undefined && (
          <tr className="tableRow">
            <td className="tableCell">Hydration</td>
            <td className="tableCell">{currentItem.hydration}</td>
          </tr>
        )}
        {currentItem.health !== undefined && (
          <tr>
            <td className="tableCell">Health</td>
            <td className="tableCell">{currentItem.health}</td>
          </tr>
        )}
        {currentItem.healthOverTime !== undefined && (
          <tr>
            <td className="tableCell">Health Over Time</td>
            <td className="tableCell">{currentItem.healthOverTime}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

FoodBox.propTypes = {
  currentItem: PropTypes.object,
};

export default FoodBox;
