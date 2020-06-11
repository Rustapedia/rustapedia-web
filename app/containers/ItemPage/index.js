import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Img from 'components/Img';
import P from 'components/P';
import gql from 'graphql-tag';
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
import { useQuery } from '@apollo/react-hooks';
import { makeSelectCurrentItem } from '../App/selectors';
import { currentItemChange } from '../App/actions';
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
  recycledStatusChange,
  usedForCraftStatusChange,
  compostableStatusChange,
  cookingStatusChange,
  gatherStatusChange,
  equipmentStatusChange,
  breedsStatusChange,
  feedingStatusChange,
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
  makeSelectRecycledStatus,
  makeSelectUsedForCraftStatus,
  makeSelectCompostableStatus,
  makeSelectCookingStatus,
  makeSelectGatherStatus,
  makeSelectEquipmentStatus,
  makeSelectBreedsStatus,
  makeSelectFeedingStatus,
} from './selectors';
import Button from './Button';

const key = 'item';
const GET_ITEM = gql`
  query findItem($id: ID!) {
    Item(where: { id: $id }) {
      id
      name
      image {
        id
        publicUrl
      }
      text
      blueprint
      additionalText
      mainInfo {
        id
        identifier
        stackSize
        despawnTime
        hp
        stamina
      }
      itemInfo {
        id
        respawnTimer
        decay
        upkeep
        speed
      }
      lootInfo {
        id
        container {
          id
          name
          image {
            id
            publicUrl
          }
        }
        condition
        count
        chance
      }
      loot {
        id
        itemToLoot {
          id
          name
          image {
            id
            publicUrl
          }
          subCategory {
            id
            name
          }
        }
        condition
        chance
        count
      }
      weaponInfo {
        id
        damage
        attackSpeed
        range
        rateOfFire
        aimCone
        capacity
        reload
        draw
        throw
        velocity
        recoil
        exposionRadius
        explosionDelay
        dugChance
      }
      foodInfo {
        id
        calories
        hydration
        health
        healthOverTime
        capacity
      }
      craftInfo {
        id
        requiredItemCounts {
          id
          item {
            id
            name
            blueprint
            image {
              id
              publicUrl
            }
            craftInfo {
              id
              requiredItemCounts {
                id
                item {
                  id
                  name
                  image {
                    id
                    publicUrl
                  }
                }
                count
              }
              time
              workBench {
                id
                name
                image {
                  id
                  publicUrl
                }
              }
            }
          }
          count
        }
        time
        workBench {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      ingredientFor {
        id
        requiredItemCounts {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        item {
          id
          name
          subCategory {
            id
            name
          }
          image {
            id
            publicUrl
          }
          ingredientFor {
            id
            requiredItemCounts {
              id
              item {
                id
                name
                image {
                  id
                  publicUrl
                }
              }
              count
            }
            item {
              id
              name
              subCategory {
                id
                name
              }
              image {
                id
                publicUrl
              }
            }
          }
        }
      }
      usedForCraft {
        id
        time
        requiredItemCounts {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      experiment {
        id
        workBench {
          id
          name
          image {
            id
            publicUrl
          }
        }
        experimentNeeded {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      experimentation {
        id
        item {
          id
          name
          blueprint
          subCategory {
            id
            name
          }
          image {
            id
            publicUrl
          }
        }
        experimentNeeded {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      research {
        id
        researchTool {
          id
          name
          image {
            id
            publicUrl
          }
        }
        researchNeeded {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      researches {
        id
        item {
          id
          name
          subCategory {
            id
            name
          }
          image {
            id
            publicUrl
          }
        }
        researchNeeded {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      repair {
        id
        tool {
          id
          name
          image {
            id
            publicUrl
          }
        }
        repairCoast {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        condition
        blueprintRequired
      }
      repairs {
        id
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
        repairCoast {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        condition
        blueprintRequired
      }
      recycle {
        id
        yield {
          id
          count
          percent
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
        }
        recycler {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      recycledFrom {
        id
        item {
          id
          name
          subCategory {
            id
            name
          }
          image {
            id
            publicUrl
          }
        }
        yield {
          id
          count
          percent
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
        }
      }
      recycler {
        id
        yield {
          id
          count
          percent
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
        }
        item {
          id
          name
          subCategory {
            id
            name
          }
          image {
            id
            publicUrl
          }
        }
      }
      explosive: durabilityInfo(where: { type: Explosive }) {
        id
        time
        sulfurNeeded
        fuelNeeded
        quantity
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      melle: durabilityInfo(where: { type: Melle }) {
        id
        time
        sulfurNeeded
        fuelNeeded
        quantity
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      throwing: durabilityInfo(where: { type: Throwing }) {
        id
        time
        sulfurNeeded
        fuelNeeded
        quantity
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      guns: durabilityInfo(where: { type: Guns }) {
        id
        time
        sulfurNeeded
        fuelNeeded
        quantity
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      compostable {
        id
        tool {
          id
          name
          image {
            id
            publicUrl
          }
        }
        result {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        amountPerStack
      }
      composter {
        id
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
        result {
          id
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        amountPerStack
      }
      composting {
        id
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
        result {
          id
          count
        }
      }
      cookingInfo {
        id
        furnace {
          id
          name
          image {
            id
            publicUrl
          }
        }
        processOne {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processTwo {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processThree {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processFour {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      cooking {
        id
        processOne {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processTwo {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processThree {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
        processFour {
          id
          cookingItem {
            id
            name
            image {
              id
              publicUrl
            }
          }
          needed {
            id
            name
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      gather {
        id
        fromItem {
          id
          name
          image {
            id
            publicUrl
          }
        }
        result {
          id
          count
          range
          percent
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
        }
        time
        conditionLoss
      }
      gatheringInfo {
        id
        tool {
          id
          name
          image {
            id
            publicUrl
          }
        }
        result {
          id
          count
          range
          percent
          item {
            id
            name
            image {
              id
              publicUrl
            }
          }
        }
        time
        conditionLoss
      }
      gatheredFrom {
        id
        name
        image {
          id
          publicUrl
        }
        gatheringInfo {
          id
          tool {
            id
            name
            image {
              id
              publicUrl
            }
          }
          result {
            id
            count
            range
            percent
            item {
              id
              name
              image {
                id
                publicUrl
              }
            }
          }
          time
          conditionLoss
        }
      }
      equipment {
        id
        item {
          id
          name
          image {
            id
            publicUrl
          }
          itemInfo {
            speed
          }
        }
        extraSlots
        protection
      }
      equipmentFor {
        id
        animal {
          id
          name
          image {
            id
            publicUrl
          }
        }
        extraSlots
        protection
      }
      breeds {
        id
        stamina
        speed
        hp
        breed
      }
      feeding {
        id
        food {
          id
          name
          image {
            id
            publicUrl
          }
        }
        addStamina
        healing
      }
      produces {
        id
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
      }
      productOf {
        id
        animal {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
      }
    }
  }
`;
export function ItemPage({
  item,
  currentItem,
  onCurrentItemChanged,
  onCurrentLootStatusChanged,
  onCurrentCraftStatusChanged,
  onCurrentExperimentStatusChanged,
  onCurrentResearchStatusChanged,
  onCurrentRepairStatusChanged,
  onCurrentRecycleStatusChanged,
  onCurrentDurabilityStatusChanged,
  onCurrentIngredientStatusChanged,
  onCurrentRecycledStatusChanged,
  onCurrentUsedForCraftStatusChanged,
  onCurrentCompostableStatusChanged,
  onCurrentCookingStatusChanged,
  onCurrentGatherStatusChanged,
  onCurrentEquipmentStatusChanged,
  onCurrentBreedsStatusChanged,
  onCurrentFeedingStatusChanged,
  lootStatus,
  feedingStatus,
  durabilityStatus,
  craftStatus,
  experimentStatus,
  ingredientStatus,
  researchStatus,
  repairStatus,
  recycleStatus,
  recycledStatus,
  usedForCraftStatus,
  compostableStatus,
  cookingStatus,
  gatherStatus,
  equipmentStatus,
  breedsStatus,
}) {
  const [initialized, setIinitialized] = useState(false);

  useEffect(() => {
    // if (!props.fetched) {
    //   props.fetchRules();
    // }

    getItem({ id: item.id });
    setIinitialized(true);
  }, [initialized]); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  function getItem({ id }) {
    const { loading, data, error } = useQuery(GET_ITEM, {
      variables: { id },
      skip: !id,
      pollInterval: 0,
    });
    if (loading && !data) {
      return null;
    }
    if (error) return `Error! ${error}`;
    const selectItem = data.Item;
    onCurrentItemChanged(selectItem);
    return null;
  }

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <ItemContainer>
      {currentItem.lootInfo !== undefined && (
        <div>
          <Wrapper>
            <div>
              {currentItem.image !== null && (
                <div className="center">
                  <Img
                    alt={currentItem.name}
                    src={currentItem.image.publicUrl}
                  />
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
                {currentItem.additionalText !== null &&
                  currentItem.additionalText}
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
            {currentItem.usedForCraft.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentUsedForCraftStatusChanged()}
                style={
                  usedForCraftStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Used for craft
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
            {currentItem.recycledFrom.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentRecycledStatusChanged()}
                style={
                  recycledStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Recycled From
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
            {currentItem.compostable !== null && (
              <Button
                type="button"
                onClick={() => onCurrentCompostableStatusChanged()}
                style={
                  compostableStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Compostable
              </Button>
            )}
            {currentItem.composter.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentCompostableStatusChanged()}
                style={
                  compostableStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Composter
              </Button>
            )}
            {currentItem.composting.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentCompostableStatusChanged()}
                style={
                  compostableStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Composting
              </Button>
            )}
            {currentItem.cookingInfo.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentCookingStatusChanged()}
                style={
                  cookingStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Cooking
              </Button>
            )}
            {currentItem.cooking.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentCookingStatusChanged()}
                style={
                  cookingStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Cooking
              </Button>
            )}
            {currentItem.equipment.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentEquipmentStatusChanged()}
                style={
                  equipmentStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Equipment
              </Button>
            )}
            {currentItem.equipmentFor !== null && (
              <Button
                type="button"
                onClick={() => onCurrentEquipmentStatusChanged()}
                style={
                  equipmentStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Equipment For
              </Button>
            )}
            {currentItem.gather.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentGatherStatusChanged()}
                style={
                  gatherStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Gather
              </Button>
            )}
            {currentItem.gatheringInfo.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentGatherStatusChanged()}
                style={
                  gatherStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Gathering
              </Button>
            )}
            {currentItem.gatheredFrom.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentGatherStatusChanged()}
                style={
                  gatherStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Gathered From
              </Button>
            )}
            {currentItem.breeds.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentBreedsStatusChanged()}
                style={
                  breedsStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Breeds
              </Button>
            )}
            {currentItem.feeding.length > 0 && (
              <Button
                type="button"
                onClick={() => onCurrentFeedingStatusChanged()}
                style={
                  breedsStatus
                    ? { background: 'rgba(0, 0, 0, 0.1)' }
                    : { background: 'rgba(0, 0, 0, 0.2)' }
                }
              >
                Feeding
              </Button>
            )}
          </Wrapper>
        </div>
      )}
      <Wrapper>
        {lootStatus && <LootTable currentItem={currentItem} />}
        {craftStatus && <CraftTable currentItem={currentItem} />}
        {usedForCraftStatus && <UsedForCraftTable currentItem={currentItem} />}
        {experimentStatus && <ExperimentTable currentItem={currentItem} />}
        {researchStatus && <ResearchTable currentItem={currentItem} />}
        {repairStatus && <RepairTable currentItem={currentItem} />}
        {recycleStatus && <RecycleTable currentItem={currentItem} />}
        {recycledStatus && <RecycledTable currentItem={currentItem} />}
        {durabilityStatus && <DurabilityTable currentItem={currentItem} />}
        {ingredientStatus && <IngredientTable currentItem={currentItem} />}
        {compostableStatus && <CompostableTable currentItem={currentItem} />}
        {cookingStatus && <CookingTable currentItem={currentItem} />}
        {gatherStatus && <GatherTable currentItem={currentItem} />}
        {equipmentStatus && <EquipmentTable currentItem={currentItem} />}
        {breedsStatus && <BreedsTable currentItem={currentItem} />}
        {feedingStatus && <FeedingTable currentItem={currentItem} />}
      </Wrapper>
    </ItemContainer>
  );
}

ItemPage.propTypes = {
  item: PropTypes.object,
  currentItem: PropTypes.object,
  onCurrentLootStatusChanged: PropTypes.func,
  onCurrentCraftStatusChanged: PropTypes.func,
  onCurrentExperimentStatusChanged: PropTypes.func,
  onCurrentResearchStatusChanged: PropTypes.func,
  onCurrentRepairStatusChanged: PropTypes.func,
  onCurrentRecycleStatusChanged: PropTypes.func,
  onCurrentRecycledStatusChanged: PropTypes.func,
  onCurrentDurabilityStatusChanged: PropTypes.func,
  onCurrentIngredientStatusChanged: PropTypes.func,
  onCurrentUsedForCraftStatusChanged: PropTypes.func,
  onCurrentCompostableStatusChanged: PropTypes.func,
  onCurrentBreedsStatusChanged: PropTypes.func,
  onCurrentCookingStatusChanged: PropTypes.func,
  onCurrentGatherStatusChanged: PropTypes.func,
  onCurrentItemChanged: PropTypes.func,
  onCurrentEquipmentStatusChanged: PropTypes.func,
  onCurrentFeedingStatusChanged: PropTypes.func,
  lootStatus: PropTypes.bool,
  craftStatus: PropTypes.bool,
  experimentStatus: PropTypes.bool,
  researchStatus: PropTypes.bool,
  repairStatus: PropTypes.bool,
  recycleStatus: PropTypes.bool,
  recycledStatus: PropTypes.bool,
  durabilityStatus: PropTypes.bool,
  ingredientStatus: PropTypes.bool,
  usedForCraftStatus: PropTypes.bool,
  compostableStatus: PropTypes.bool,
  cookingStatus: PropTypes.bool,
  gatherStatus: PropTypes.bool,
  equipmentStatus: PropTypes.bool,
  breedsStatus: PropTypes.bool,
  feedingStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  lootStatus: makeSelectLootStatus(),
  ingredientStatus: makeSelectIngredientStatus(),
  craftStatus: makeSelectCraftStatus(),
  researchStatus: makeSelectResearchStatus(),
  experimentStatus: makeSelectExperimentStatus(),
  repairStatus: makeSelectRepairStatus(),
  recycleStatus: makeSelectRecycleStatus(),
  recycledStatus: makeSelectRecycledStatus(),
  currentItem: makeSelectCurrentItem(),
  durabilityStatus: makeSelectDurabilityStatus(),
  usedForCraftStatus: makeSelectUsedForCraftStatus(),
  compostableStatus: makeSelectCompostableStatus(),
  cookingStatus: makeSelectCookingStatus(),
  gatherStatus: makeSelectGatherStatus(),
  equipmentStatus: makeSelectEquipmentStatus(),
  breedsStatus: makeSelectBreedsStatus(),
  feedingStatus: makeSelectFeedingStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentLootStatusChanged: lootStatus =>
      dispatch(lootStatusChange(lootStatus)),
    onCurrentEquipmentStatusChanged: equipmentStatus =>
      dispatch(equipmentStatusChange(equipmentStatus)),
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
    onCurrentRecycledStatusChanged: recycledStatus =>
      dispatch(recycledStatusChange(recycledStatus)),
    onCurrentDurabilityStatusChanged: durabilityStatus =>
      dispatch(durabilityStatusChange(durabilityStatus)),
    onCurrentIngredientStatusChanged: ingredientStatus =>
      dispatch(ingredientStatusChange(ingredientStatus)),
    onCurrentUsedForCraftStatusChanged: usedForCraftStatus =>
      dispatch(usedForCraftStatusChange(usedForCraftStatus)),
    onCurrentCompostableStatusChanged: compostableStatus =>
      dispatch(compostableStatusChange(compostableStatus)),
    onCurrentCookingStatusChanged: cookingStatus =>
      dispatch(cookingStatusChange(cookingStatus)),
    onCurrentGatherStatusChanged: gatherStatus =>
      dispatch(gatherStatusChange(gatherStatus)),
    onCurrentBreedsStatusChanged: breedsStatus =>
      dispatch(breedsStatusChange(breedsStatus)),
    onCurrentFeedingStatusChanged: feedingStatus =>
      dispatch(feedingStatusChange(feedingStatus)),
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
