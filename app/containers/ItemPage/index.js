import React, { memo, useEffect, useState } from 'react';
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
import BreedsTable from 'components/Table/BreedsTable';
import CraftTable from 'components/Table/CraftTable';
import RepairTable from 'components/Table/RepairTable';
import RecycleTable from 'components/Table/RecycleTable';
import RecycledTable from 'components/Table/RecycledTable';
import ExperimentTable from 'components/Table/ExperimentTable';
import IngredientTable from 'components/Table/IngredientTable';
import DurabilityTable from 'components/Table/DurabilityTable';
import UsedForCraftTable from 'components/Table/UsedForCraftTable';
import CompostableTable from 'components/Table/CompostableTable';
import CookingTable from 'components/Table/CookingTable';
import GatherTable from 'components/Table/GatherTable';
import FeedingTable from 'components/Table/FeedingTable';
import EquipmentTable from 'components/Table/EquipmentTable';
import ProduceTable from 'components/Table/ProduceTable';
import DropTable from 'components/Table/DropTable';
import ShoppingTable from 'components/Table/ShoppingTable';
import FuelTable from 'components/Table/FuelTable';
import CollectTable from 'components/Table/CollectTable';
import YieldsTable from 'components/Table/YieldsTable';
import DamageTable from 'components/Table/DamageTable';
import { useQuery } from '@apollo/react-hooks';
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import { makeSelectCurrentItem } from '../App/selectors';
import { currentItemChange } from '../App/actions';
import H1 from '../../components/H1';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import { statusChange } from './actions';
import { makeSelectStatus } from './selectors';
import { GET_ITEM } from './constants';

const key = 'item';
function ItemPage({
  item,
  currentItem,
  onCurrentItemChanged,
  onCurrentStatusChanged,
  display,
}) {
  const [initialized, setIinitialized] = useState(false);
  const { loading, data, error } = useQuery(GET_ITEM, {
    variables: { id: item.id },
    initialized,
  });
  useEffect(() => {
    if (!loading && !!data) {
      setIinitialized(true);
      const selectItem = data.Item;
      onCurrentItemChanged(selectItem);
    }
  }, [data, loading]);
  if (error) return `Error! ${error}`;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      {currentItem.lootInfo !== undefined && (
        <div>
          <Wrapper className="itemInfo">
            <div className="size250">
              {currentItem.image !== null && (
                <div className="center">
                  <Img
                    className="big"
                    alt={currentItem.name}
                    src={currentItem.image.publicUrl}
                  />
                </div>
              )}
              {currentItem.mainInfo !== null && (
                <MainItemInfo currentItem={currentItem.mainInfo} />
              )}
            </div>
            <div className="padding">
              <H1>{currentItem.name}</H1>
              <P>{currentItem.text}</P>
              <P>
                {currentItem.additionalText !== null &&
                  currentItem.additionalText}
              </P>
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
          </Wrapper>
          <Wrapper>
            {(currentItem.lootInfo.length > 0 ||
              currentItem.loot.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('loot')}
                className={display.loot ? 'active' : null}
              >
                Loot
              </Button>
            )}
            {currentItem.craftInfo !== null && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('craft')}
                className={display.craft ? 'active' : null}
              >
                Craft
              </Button>
            )}
            {currentItem.usedForCraft.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('usedForCraft')}
                className={display.usedForCraft ? 'active' : null}
              >
                Used for craft
              </Button>
            )}
            {currentItem.ingredientFor.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('ingredient')}
                className={display.ingredient ? 'active' : null}
              >
                Ingredient for
              </Button>
            )}
            {(currentItem.experimentation.length > 0 ||
              currentItem.experiment !== null) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('experiment')}
                className={display.experiment ? 'active' : null}
              >
                {currentItem.experimentation.length > 0
                  ? 'Experimentation'
                  : 'Experiment'}
              </Button>
            )}
            {(currentItem.research !== null ||
              currentItem.researches.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('research')}
                className={display.research ? 'active' : null}
              >
                {currentItem.research !== null ? 'Research' : 'Researches'}
              </Button>
            )}
            {(currentItem.repair.length > 0 ||
              currentItem.repairs.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('repair')}
                className={display.repair ? 'active' : null}
              >
                {currentItem.repair.length > 0 ? 'Repair' : 'Repairs'}
              </Button>
            )}
            {(currentItem.recycle !== null ||
              currentItem.recycler.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('recycle')}
                className={display.recycle ? 'active' : null}
              >
                Recycle
              </Button>
            )}
            {currentItem.recycledFrom.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('recycled')}
                className={display.recycled ? 'active' : null}
              >
                Recycled From
              </Button>
            )}
            {currentItem.explosive.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('durability')}
                className={display.durability ? 'active' : null}
              >
                Durability
              </Button>
            )}
            {(currentItem.compostable !== null ||
              currentItem.composter.length > 0 ||
              currentItem.composting.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('compostable')}
                className={display.compostable ? 'active' : null}
              >
                {currentItem.compostable !== null && 'Compostable'}
                {currentItem.composter.length > 0 && 'Composter'}
                {currentItem.composting.length > 0 && 'Composting'}
              </Button>
            )}
            {(currentItem.cookingInfo.length > 0 ||
              currentItem.cooking.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('cooking')}
                className={display.cooking ? 'active' : null}
              >
                Cooking
              </Button>
            )}
            {(currentItem.equipment.length > 0 ||
              currentItem.equipmentFor !== null) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('equipment')}
                className={display.equipment ? 'active' : null}
              >
                {currentItem.equipment.length > 0
                  ? 'Equipment'
                  : 'Equipment For'}
              </Button>
            )}
            {(currentItem.gather.length > 0 ||
              currentItem.gatheringInfo.length > 0 ||
              currentItem.gatheredFrom.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('gather')}
                className={display.gather ? 'active' : null}
              >
                {currentItem.gather.length > 0 && 'Gather'}
                {currentItem.gatheringInfo.length > 0 && 'Gathering'}
                {currentItem.gatheredFrom.length > 0 && 'Gathered From'}
              </Button>
            )}
            {currentItem.breeds.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('breeds')}
                className={display.breeds ? 'active' : null}
              >
                Breeds
              </Button>
            )}
            {currentItem.feeding.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('feeding')}
                className={display.feeding ? 'active' : null}
              >
                Feeding
              </Button>
            )}
            {(currentItem.produces !== null ||
              currentItem.productOf !== null) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('produce')}
                className={display.produce ? 'active' : null}
              >
                {currentItem.produces !== null ? 'Produces' : 'Product Of'}
              </Button>
            )}
            {(currentItem.drops !== null || currentItem.droppedBy !== null) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('drop')}
                className={display.drop ? 'active' : null}
              >
                {currentItem.drops !== null ? 'Drops' : 'Dropped By'}
              </Button>
            )}
            {(currentItem.collectible !== null ||
              currentItem.collected !== null) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('collect')}
                className={display.collect ? 'active' : null}
              >
                {currentItem.collectible !== null ? 'Collectible' : 'Collected'}
              </Button>
            )}
            {(currentItem.yields.length > 0 ||
              currentItem.extractedBy.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('yield')}
                className={display.yield ? 'active' : null}
              >
                {currentItem.yields.length > 0 ? 'Yields' : 'Extracted By'}
              </Button>
            )}
            {(currentItem.fueledBy.length > 0 ||
              currentItem.fuelFor.length > 0) && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('fuel')}
                className={display.fuel ? 'active' : null}
              >
                {currentItem.fueledBy.length > 0 ? 'Fueled By' : 'Fuel For'}
              </Button>
            )}
            {currentItem.shopping.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('shopping')}
                className={display.shopping ? 'active' : null}
              >
                {'Shopping'}
              </Button>
            )}
            {currentItem.damageInfo.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('damage')}
                className={display.damage ? 'active' : null}
              >
                {'Damage'}
              </Button>
            )}
            {currentItem.ammoFor.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentStatusChanged('damage')}
                className={display.damage ? 'active' : null}
              >
                {'Ammo For'}
              </Button>
            )}
          </Wrapper>
        </div>
      )}
      <Wrapper>
        {display.loot && <LootTable currentItem={currentItem} />}
        {display.craft && <CraftTable currentItem={currentItem} />}
        {display.usedForCraft && (
          <UsedForCraftTable currentItem={currentItem} />
        )}
        {display.experiment && <ExperimentTable currentItem={currentItem} />}
        {display.research && <ResearchTable currentItem={currentItem} />}
        {display.repair && <RepairTable currentItem={currentItem} />}
        {display.recycle && <RecycleTable currentItem={currentItem} />}
        {display.recycled && <RecycledTable currentItem={currentItem} />}
        {display.ingredient && <IngredientTable currentItem={currentItem} />}
        {display.compostable && <CompostableTable currentItem={currentItem} />}
        {display.cooking && <CookingTable currentItem={currentItem} />}
        {display.gather && <GatherTable currentItem={currentItem} />}
        {display.equipment && <EquipmentTable currentItem={currentItem} />}
        {display.breeds && <BreedsTable currentItem={currentItem} />}
        {display.feeding && <FeedingTable currentItem={currentItem} />}
        {display.durability && <DurabilityTable currentItem={currentItem} />}
        {display.produce && <ProduceTable currentItem={currentItem} />}
        {display.drop && <DropTable currentItem={currentItem} />}
        {display.collect && <CollectTable currentItem={currentItem} />}
        {display.yield && <YieldsTable currentItem={currentItem} />}
        {display.fuel && <FuelTable currentItem={currentItem} />}
        {display.shopping && <ShoppingTable currentItem={currentItem} />}
        {display.damage && <DamageTable currentItem={currentItem} />}
      </Wrapper>
    </div>
  );
}

ItemPage.propTypes = {
  onCurrentItemChanged: PropTypes.func,
  item: PropTypes.object,
  currentItem: PropTypes.object,
  onCurrentStatusChanged: PropTypes.func,
  display: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  display: makeSelectStatus(),
  currentItem: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentStatusChanged: status => dispatch(statusChange(status)),
    onCurrentItemChanged: item => dispatch(currentItemChange(item)),
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
