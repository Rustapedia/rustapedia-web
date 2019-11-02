import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import P from 'components/P';
import { makeSelectImages, makeSelectCurrentItem } from '../App/selectors';
import H1 from '../../components/H1';
import MainItemInfo from '../ItemMainInfo';
import ItemInfoBox from '../ItemInfoBox';
import WeaponBox from '../WeaponBox';
import FoodBox from '../FoodBox';
import reducer from './reducer';
import saga from './saga';
import FlexWrapper from './FlexWrapper';
import { lootStatusChange, craftStatusChange } from './actions';
import { makeSelectLootStatus, makeSelectCraftStatus } from './selectors';
import Button from './Button';
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
  useInjectSaga({ key, saga });

  return (
    <div>
      <FlexWrapper>
        <div>
          <H1>{currentItem.name}</H1>
          <P>{currentItem.text}</P>
          <P>
            {currentItem.additionalText !== undefined &&
              currentItem.additionalText}
          </P>
          {currentItem.infoBox !== undefined && (
            <ItemInfoBox currentItem={currentItem.infoBox} />
          )}
          {currentItem.foodBox !== undefined && (
            <FoodBox currentItem={currentItem.foodBox} />
          )}
          {currentItem.weaponBox !== undefined && (
            <WeaponBox currentItem={currentItem.weaponBox} />
          )}
        </div>
        <div>
          <div className="center">
            <Img
              alt={currentItem.name}
              src={images[`${currentItem.shortName}.png`]}
            />
          </div>
          {currentItem.mainInfo !== undefined && (
            <MainItemInfo currentItem={currentItem.mainInfo} />
          )}
        </div>
      </FlexWrapper>
      <div>
        {currentItem.loot !== undefined && (
          <Button type="button" onClick={() => onCurrentLootStatusChanged()}>
            Loot
          </Button>
        )}
        {currentItem.craft !== undefined && (
          <Button type="button" onClick={() => onCurrentCraftStatusChanged()}>
            Craft
          </Button>
        )}
        {currentItem.experiment !== undefined && (
          <button type="button">Experiment</button>
        )}
        {currentItem.research !== undefined && (
          <button type="button">Research</button>
        )}
        {currentItem.repair !== undefined && (
          <button type="button">Repair</button>
        )}
        {currentItem.recycle !== undefined && (
          <button type="button">Recycle</button>
        )}
        {currentItem.mods !== undefined && <button type="button">Mods</button>}
        {currentItem.damage !== undefined && (
          <button type="button">Damage</button>
        )}
        {currentItem.ammoFor !== undefined && (
          <button type="button">Ammo For</button>
        )}

        {lootStatus && (
          <Table>
            <tbody>
              <tr className="center">
                <th>Container</th>
                <th>Condition</th>
                <th>Amount</th>
                <th>Chance</th>
              </tr>
              {currentItem.loot.map(elems => (
                <tr key={elems.container}>
                  <td className="tableCell">{elems.container}</td>
                  <td className="tableCell center">{elems.condition}</td>
                  <td className="tableCell center">{elems.amount}</td>
                  <td className="tableCell center">{elems.chance}%</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {craftStatus && (
          <Table>
            <tbody>
              <tr className="center">
                <th>Blueprint</th>
                <th>Ingredients</th>
                <th>Time</th>
                <th>Workbench Level</th>
              </tr>
              {currentItem.craft.map(elems => (
                <tr key={elems.blueprint}>
                  <td className="tableCell">{elems.blueprint}</td>
                  <td className="tableCell center">
                    {Object.keys(elems.ingredients).map(res => (
                      <span key={res}>
                        <Img
                          className="ingredients"
                          alt={res}
                          src={images[`${res}.png`]}
                        />
                        {elems.ingredients[res]}
                      </span>
                    ))}
                  </td>
                  <td className="tableCell center">{elems.time}</td>
                  <td className="tableCell center">{elems.workBenchLevel}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
  onCurrentLootStatusChanged: PropTypes.func,
  onCurrentCraftStatusChanged: PropTypes.func,
  lootStatus: PropTypes.bool,
  craftStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  lootStatus: makeSelectLootStatus(),
  craftStatus: makeSelectCraftStatus(),
  currentItem: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentLootStatusChanged: lootStatus =>
      dispatch(lootStatusChange(lootStatus)),
    onCurrentCraftStatusChanged: craftStatus =>
      dispatch(craftStatusChange(craftStatus)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemPage);
