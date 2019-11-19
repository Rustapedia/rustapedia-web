import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Img from 'components/Img';
import P from 'components/P';
import MainItemInfo from 'components/ItemMainInfo';
import ItemInfoBox from 'components/ItemInfoBox';
import WeaponBox from 'components/WeaponBox';
import FoodBox from 'components/FoodBox';
import { LootTable } from 'components/LootTable';
import { CraftTable } from 'components/CraftTable';
import { ExperimentTable } from 'components/ExperimentTable';
import { ResearchTable } from 'components/ResearchTable';
import { makeSelectImages, makeSelectCurrentItem } from '../App/selectors';
import H1 from '../../components/H1';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import {
  lootStatusChange,
  craftStatusChange,
  experimentStatusChange,
  researchStatusChange,
} from './actions';
import {
  makeSelectLootStatus,
  makeSelectCraftStatus,
  makeSelectExperimentStatus,
  makeSelectResearchStatus,
} from './selectors';
import Button from './Button';

const key = 'item';

export function ItemPage({
  currentItem,
  images,
  onCurrentLootStatusChanged,
  onCurrentCraftStatusChanged,
  onCurrentExperimentStatusChanged,
  onCurrentResearchStatusChanged,
  lootStatus,
  craftStatus,
  experimentStatus,
  researchStatus,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Wrapper>
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
      </Wrapper>
      <Wrapper>
        {currentItem.loot !== undefined && (
          <Button
            type="button"
            onClick={() => onCurrentLootStatusChanged()}
            style={
              lootStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Loot
          </Button>
        )}
        {currentItem.craft !== undefined && (
          <Button
            type="button"
            onClick={() => onCurrentCraftStatusChanged()}
            style={
              craftStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Craft
          </Button>
        )}
        {currentItem.experiment !== undefined && (
          <Button
            type="button"
            onClick={() => onCurrentExperimentStatusChanged()}
            style={
              experimentStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Experiment
          </Button>
        )}
        {currentItem.research !== undefined && (
          <Button
            type="button"
            onClick={() => onCurrentResearchStatusChanged()}
            style={
              researchStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Research
          </Button>
        )}
        {currentItem.repair !== undefined && (
          <Button type="button">Repair</Button>
        )}
        {currentItem.recycle !== undefined && (
          <Button type="button">Recycle</Button>
        )}
        {currentItem.mods !== undefined && <Button type="button">Mods</Button>}
        {currentItem.damage !== undefined && (
          <Button type="button">Damage</Button>
        )}
        {currentItem.ammoFor !== undefined && (
          <Button type="button">Ammo For</Button>
        )}
      </Wrapper>
      <Wrapper>
        {lootStatus && <LootTable currentItem={currentItem} />}
        {craftStatus && (
          <CraftTable currentItem={currentItem} images={images} />
        )}
        {experimentStatus && (
          <ExperimentTable currentItem={currentItem} images={images} />
        )}
        {researchStatus && (
          <ResearchTable currentItem={currentItem} images={images} />
        )}
      </Wrapper>
    </div>
  );
}

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
  onCurrentLootStatusChanged: PropTypes.func,
  onCurrentCraftStatusChanged: PropTypes.func,
  onCurrentExperimentStatusChanged: PropTypes.func,
  onCurrentResearchStatusChanged: PropTypes.func,
  lootStatus: PropTypes.bool,
  craftStatus: PropTypes.bool,
  experimentStatus: PropTypes.bool,
  researchStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  lootStatus: makeSelectLootStatus(),
  craftStatus: makeSelectCraftStatus(),
  researchStatus: makeSelectResearchStatus(),
  experimentStatus: makeSelectExperimentStatus(),
  currentItem: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentLootStatusChanged: lootStatus =>
      dispatch(lootStatusChange(lootStatus)),
    onCurrentCraftStatusChanged: craftStatus =>
      dispatch(craftStatusChange(craftStatus)),
    onCurrentExperimentStatusChanged: experimentStatus =>
      dispatch(experimentStatusChange(experimentStatus)),
    onCurrentResearchStatusChanged: researchStatus =>
      dispatch(researchStatusChange(researchStatus)),
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
