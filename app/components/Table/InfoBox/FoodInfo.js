/**
 * FoodBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import calories from 'images/calories.png';
import hydration from 'images/hydration.png';
import health from 'images/health.png';
import healthOverTime from 'images/healthOverTime.png';
import Table from './Table';

const FoodInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.calories !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="calories" src={calories} />
            Calories
          </td>
          <td className="tableCell">
            {currentItem.calories > 0
              ? `+${currentItem.calories}`
              : currentItem.calories}
          </td>
        </tr>
      )}
      {currentItem.hydration !== null && (
        <tr className="tableRow">
          <td className="tableCell">
            <Img className="infoIcon" alt="hydration" src={hydration} />
            Hydration
          </td>
          <td className="tableCell">
            {currentItem.hydration > 0
              ? `+${currentItem.hydration}`
              : currentItem.hydration}
          </td>
        </tr>
      )}
      {currentItem.health !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="health" src={health} />
            Health
          </td>
          <td className="tableCell">
            {currentItem.health > 0
              ? `+${currentItem.health}`
              : currentItem.health}
          </td>
        </tr>
      )}
      {currentItem.healthOverTime !== null && (
        <tr>
          <td className="tableCell">
            <Img
              className="infoIcon"
              alt="healthOverTime"
              src={healthOverTime}
            />
            Health Over Time
          </td>
          <td className="tableCell">
            {currentItem.healthOverTime > 0
              ? `+${currentItem.healthOverTime}`
              : currentItem.healthOverTime}
          </td>
        </tr>
      )}
    </tbody>
  </Table>
);

FoodInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default FoodInfo;
