/**
 * FoodBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const FoodInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.calories !== null && (
        <tr>
          <td className="tableCell">Calories</td>
          <td className="tableCell">{currentItem.calories}</td>
        </tr>
      )}
      {currentItem.hydration !== null && (
        <tr className="tableRow">
          <td className="tableCell">Hydration</td>
          <td className="tableCell">{currentItem.hydration}</td>
        </tr>
      )}
      {currentItem.health !== null && (
        <tr>
          <td className="tableCell">Health</td>
          <td className="tableCell">{currentItem.health}</td>
        </tr>
      )}
      {currentItem.healthOverTime !== null && (
        <tr>
          <td className="tableCell">Health Over Time</td>
          <td className="tableCell">{currentItem.healthOverTime}</td>
        </tr>
      )}
    </tbody>
  </Table>
);

FoodInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default FoodInfo;
