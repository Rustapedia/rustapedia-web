import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectImages } from '../App/selectors';
import H1 from '../../components/H1';
import MainItemInfo from '../ItemMainInfo';
import ItemInfoBox from '../ItemInfoBox';
import WeaponBox from '../WeaponBox';
import FoodBox from '../FoodBox';
import reducer from './reducer';
import { lootStatusChange, craftStatusChange } from './actions';
import { makeSelectLootStatus, makeSelectCraftStatus } from './selectors';

const key = 'item';

export function ItemPage({
  currentItem,
  images,
  onCurrentLootStatusChanged,
  onCurrentCraftStatusChanged,
  lootStatus,
  craftStatus,
}) {
  useInjectReducer({ key, reducer });

  return (
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
      {currentItem.mainInfo !== undefined && (
        <MainItemInfo currentItem={currentItem.mainInfo} />
      )}
      {currentItem.infoBox !== undefined && (
        <ItemInfoBox currentItem={currentItem.infoBox} />
      )}
      {currentItem.foodBox !== undefined && (
        <FoodBox currentItem={currentItem.foodBox} />
      )}
      {currentItem.weaponBox !== undefined && (
        <WeaponBox currentItem={currentItem.weaponBox} />
      )}
      <table>
        <tbody>
          <tr>
            {currentItem.loot !== undefined && (
              <th onClick={() => onCurrentLootStatusChanged()}>Loot</th>
            )}
            {currentItem.craft !== undefined && (
              <th onClick={() => onCurrentCraftStatusChanged()}>Craft</th>
            )}
            {currentItem.experiment !== undefined && <th>Experiment</th>}
            {currentItem.research !== undefined && <th>Research</th>}
            {currentItem.repair !== undefined && <th>Repair</th>}
            {currentItem.recycle !== undefined && <th>Recycle</th>}
            {currentItem.mods !== undefined && <th>Mods</th>}
            {currentItem.damage !== undefined && <th>Damage</th>}
            {currentItem.ammoFor !== undefined && <th>Ammo For</th>}
          </tr>
        </tbody>
      </table>

      <div>{lootStatus ? <h1>Ты лох!!!</h1> : null}</div>
      <div>{craftStatus ? <h1>Ты идиот!!!</h1> : null}</div>
    </div>
  );
}

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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemPage);
