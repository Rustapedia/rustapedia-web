import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectImages } from '../App/selectors';
import H1 from '../../components/H1';

const ItemPage = ({ currentItem, images }) => (
  <div>
    <div>
      <H1>{currentItem.name}</H1>
      <div>{currentItem.text}</div>
    </div>
    <div>
      <img
        alt={currentItem.name}
        src={images[`${currentItem.shortName}.png`]}
      />
      {currentItem.HP !== undefined && (
        <table>
          <tbody>
            <tr>
              <th>HP</th>
              <th>{currentItem.HP}</th>
            </tr>
          </tbody>
        </table>
      )}
    </div>
    <div>
      <table>
        <tbody>
          <tr>
            <td>Damage</td>
            <td>{currentItem.damage}</td>
          </tr>
          <tr>
            <td>Rate of Fire</td>
            <td>{currentItem.rateOfFire}</td>
          </tr>
          <tr>
            <td>Aim Cone</td>
            <td>{currentItem.aimCone}</td>
          </tr>
          <tr>
            <td>Capacity</td>
            <td>{currentItem.capacity}</td>
          </tr>
          <tr>
            <td>Reload</td>
            <td>{currentItem.reload}</td>
          </tr>
          <tr>
            <td>Draw</td>
            <td>{currentItem.draw}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      {currentItem.loot !== undefined && (
        <table>
          <tbody>
            <tr>
              <th>Container</th>
              <th>Condition</th>
              <th>Amount</th>
              <th>Chance</th>
            </tr>
            {currentItem.loot.map(elems => (
              <tr key={elems.container}>
                <td>{elems.container}</td>
                <td>{elems.condition}</td>
                <td>{elems.amount}</td>
                <td>{elems.chance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ItemPage);
