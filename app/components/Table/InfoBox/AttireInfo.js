/**
 * AttireBox
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import projectile from 'images/projectile.png';
import melee from 'images/melee.png';
import bite from 'images/bite.png';
import radiation from 'images/radiation.png';
import cold from 'images/cold.png';
import explosion from 'images/explosion.png';
import waterproof from 'images/waterproof.png';
import Table from './Table';

const AttireInfo = ({ currentItem }) => (
  <Table>
    <tbody>
      {currentItem.projectile !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="projectile" src={projectile} />
            Projectile
          </td>
          <td className="tableCell">{currentItem.projectile} %</td>
        </tr>
      )}
      {currentItem.melee !== null && (
        <tr className="tableRow">
          <td className="tableCell">
            <Img className="infoIcon" alt="melee" src={melee} />
            Melee
          </td>
          <td className="tableCell">{currentItem.melee} %</td>
        </tr>
      )}
      {currentItem.bite !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="bite" src={bite} />
            Bite
          </td>
          <td className="tableCell">{currentItem.bite} %</td>
        </tr>
      )}
      {currentItem.radiation !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="radiation" src={radiation} />
            Radiation
          </td>
          <td className="tableCell">{currentItem.radiation} %</td>
        </tr>
      )}
      {currentItem.cold !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="cold" src={cold} />
            Cold
          </td>
          <td className="tableCell">{currentItem.cold} %</td>
        </tr>
      )}
      {currentItem.explosion !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon" alt="explosion" src={explosion} />
            Explosion
          </td>
          <td className="tableCell">{currentItem.explosion} %</td>
        </tr>
      )}
      {currentItem.waterproof !== null && (
        <tr>
          <td className="tableCell">
            <Img className="infoIcon water" alt="waterproof" src={waterproof} />
            Waterproof
          </td>
          <td className="tableCell">{currentItem.waterproof}</td>
        </tr>
      )}
    </tbody>
  </Table>
);

AttireInfo.propTypes = {
  currentItem: PropTypes.object,
};

export default AttireInfo;
