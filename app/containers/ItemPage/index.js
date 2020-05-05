import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Img from 'components/Img';
import P from 'components/P';
import MainItemInfo from 'components/Table/ItemMainInfo';
import ItemInfo from 'components/Table/InfoBox/ItemInfo';
import FoodInfo from 'components/Table/InfoBox/FoodInfo';
import WeaponInfo from 'components/Table/InfoBox/WeaponInfo';
import ResearchTable from 'components/Table/ResearchTable';
import LootTable from 'components/Table/LootTable';
import CraftTable from 'components/Table/CraftTable';
import RepairTable from 'components/Table/RepairTable';
import RecycleTable from 'components/Table/RecycleTable';
import ExperimentTable from 'components/Table/ExperimentTable';
import IngredientTable from 'components/Table/IngredientTable';
import DurabilityTable from 'components/Table/DurabilityTable';
import { makeSelectCurrentItem } from '../App/selectors';
import H1 from '../../components/H1';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import ItemContainer from './ItemContainer';

import {
  lootStatusChange,
  craftStatusChange,
  experimentStatusChange,
  researchStatusChange,
  recycleStatusChange,
  repairStatusChange,
  durabilityStatusChange,
  ingredientStatusChange,
} from './actions';
import {
  makeSelectLootStatus,
  makeSelectCraftStatus,
  makeSelectExperimentStatus,
  makeSelectResearchStatus,
  makeSelectRepairStatus,
  makeSelectRecycleStatus,
  makeSelectDurabilityStatus,
  makeSelectIngredientStatus,
} from './selectors';
import Button from './Button';

const key = 'item';

export function ItemPage({
  currentItem,
  onCurrentLootStatusChanged,
  onCurrentCraftStatusChanged,
  onCurrentExperimentStatusChanged,
  onCurrentResearchStatusChanged,
  onCurrentRepairStatusChanged,
  onCurrentRecycleStatusChanged,
  onCurrentDurabilityStatusChanged,
  onCurrentIngredientStatusChanged,
  lootStatus,
  durabilityStatus,
  craftStatus,
  experimentStatus,
  ingredientStatus,
  researchStatus,
  repairStatus,
  recycleStatus,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <ItemContainer>
      <Wrapper>
        <div>
          {currentItem.image !== null && (
            <div className="center">
              <Img alt={currentItem.name} src={currentItem.image.publicUrl} />
            </div>
          )}
          {currentItem.mainInfo !== null && (
            <MainItemInfo currentItem={currentItem.mainInfo} />
          )}
          {currentItem.itemInfo !== null && (
            <ItemInfo currentItem={currentItem.itemInfo} />
          )}
          {currentItem.foodInfo !== null && (
            <FoodInfo currentItem={currentItem.foodInfo} />
          )}
          {currentItem.weaponInfo !== null && (
            <WeaponInfo currentItem={currentItem.weaponInfo} />
          )}
        </div>
        <div>
          <H1>{currentItem.name}</H1>
          <P>{currentItem.text}</P>
          <P>
            {currentItem.additionalText !== null && currentItem.additionalText}
          </P>
        </div>
      </Wrapper>
      <Wrapper>
        {currentItem.lootInfo.length > 0 && (
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
        {currentItem.loot.length > 0 && (
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
        {currentItem.craftInfo !== null && (
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
        {currentItem.ingredientFor.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentIngredientStatusChanged()}
            style={
              ingredientStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Ingredient for
          </Button>
        )}
        {currentItem.usedForCraft.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentCraftStatusChanged()}
            style={
              craftStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Used for craft
          </Button>
        )}
        {currentItem.experimentation.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentExperimentStatusChanged()}
            style={
              experimentStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Experimentation
          </Button>
        )}
        {currentItem.experiment !== null && (
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
        {currentItem.research !== null && (
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
        {currentItem.researches.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentResearchStatusChanged()}
            style={
              researchStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Researches
          </Button>
        )}
        {currentItem.repair.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentRepairStatusChanged()}
            style={
              repairStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Repair
          </Button>
        )}
        {currentItem.repairs.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentRepairStatusChanged()}
            style={
              repairStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Repairs
          </Button>
        )}
        {currentItem.recycle !== null && (
          <Button
            type="button"
            onClick={() => onCurrentRecycleStatusChanged()}
            style={
              recycleStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Recycle
          </Button>
        )}
        {currentItem.recycler.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentRecycleStatusChanged()}
            style={
              recycleStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Recycle
          </Button>
        )}
        {currentItem.explosive.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentDurabilityStatusChanged()}
            style={
              durabilityStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Durability
          </Button>
        )}
      </Wrapper>
      <Wrapper>
        {lootStatus && <LootTable currentItem={currentItem} />}
        {craftStatus && <CraftTable currentItem={currentItem} />}
        {experimentStatus && <ExperimentTable currentItem={currentItem} />}
        {researchStatus && <ResearchTable currentItem={currentItem} />}
        {repairStatus && <RepairTable currentItem={currentItem} />}
        {recycleStatus && <RecycleTable currentItem={currentItem} />}
        {durabilityStatus && <DurabilityTable currentItem={currentItem} />}
        {ingredientStatus && <IngredientTable currentItem={currentItem} />}
      </Wrapper>
    </ItemContainer>
  );
}

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  onCurrentLootStatusChanged: PropTypes.func,
  onCurrentCraftStatusChanged: PropTypes.func,
  onCurrentExperimentStatusChanged: PropTypes.func,
  onCurrentResearchStatusChanged: PropTypes.func,
  onCurrentRepairStatusChanged: PropTypes.func,
  onCurrentRecycleStatusChanged: PropTypes.func,
  onCurrentDurabilityStatusChanged: PropTypes.func,
  onCurrentIngredientStatusChanged: PropTypes.func,
  lootStatus: PropTypes.bool,
  craftStatus: PropTypes.bool,
  experimentStatus: PropTypes.bool,
  researchStatus: PropTypes.bool,
  repairStatus: PropTypes.bool,
  recycleStatus: PropTypes.bool,
  durabilityStatus: PropTypes.bool,
  ingredientStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  lootStatus: makeSelectLootStatus(),
  ingredientStatus: makeSelectIngredientStatus(),
  craftStatus: makeSelectCraftStatus(),
  researchStatus: makeSelectResearchStatus(),
  experimentStatus: makeSelectExperimentStatus(),
  repairStatus: makeSelectRepairStatus(),
  recycleStatus: makeSelectRecycleStatus(),
  currentItem: makeSelectCurrentItem(),
  durabilityStatus: makeSelectDurabilityStatus(),
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
    onCurrentRepairStatusChanged: repairStatus =>
      dispatch(repairStatusChange(repairStatus)),
    onCurrentRecycleStatusChanged: recycleStatus =>
      dispatch(recycleStatusChange(recycleStatus)),
    onCurrentDurabilityStatusChanged: durabilityStatus =>
      dispatch(durabilityStatusChange(durabilityStatus)),
    onCurrentIngredientStatusChanged: ingredientStatus =>
      dispatch(ingredientStatusChange(ingredientStatus)),
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
