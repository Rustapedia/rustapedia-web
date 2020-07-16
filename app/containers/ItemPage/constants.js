/*
 * ItemConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import gql from 'graphql-tag';
export const STATUS_CHANGED = 'STATUS_CHANGED';
export const RESET_TO_DEFAULT = 'RESET_TO_DEFAULT';
export const SET_INITIAL_STATUS = 'SET_INITIAL_STATUS';
export const GET_ITEM = gql`
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
        mainRotorHP
        tailRotorHP
      }
      itemInfo {
        id
        respawnTimer
        decay
        decayTimeOutside
        decayTimeInside
        upkeep
        speed
        capacity
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
          blueprint
          image {
            id
            publicUrl
          }
          subCategory {
            id
            name
          }
        }
        isBlueprint
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
      attireInfo {
        id
        projectile
        melee
        bite
        radiation
        cold
        explosion
        waterproof
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
        weapon {
          id
          name
        }
        ammo {
          id
          name
          image {
            id
            publicUrl
          }
        }
        text
        item {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      sam: durabilityInfo(where: { type: SAM }) {
        id
        time
        sulfurNeeded
        fuelNeeded
        quantity
        weapon {
          id
          name
        }
        ammo {
          id
          name
          image {
            id
            publicUrl
          }
        }
        text
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
        weapon {
          id
          name
        }
        ammo {
          id
          name
          image {
            id
            publicUrl
          }
        }
        text
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
        weapon {
          id
          name
        }
        ammo {
          id
          name
          image {
            id
            publicUrl
          }
        }
        text
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
        weapon {
          id
          name
        }
        ammo {
          id
          name
          image {
            id
            publicUrl
          }
        }
        text
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
      drops {
        id
        amount
        crate {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      droppedBy {
        id
        amount
        vehicle {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      collectible {
        id
        items {
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
      collected {
        id
        collectedFrom {
          id
          name
          image {
            id
            publicUrl
          }
        }
        items {
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
      yields {
        id
        resources {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
        time
        fuel {
          id
          item {
            name
            id
            image {
              id
              publicUrl
            }
          }
          count
        }
        amountPerMinute
        type
        resourcesPerHour {
          id
          item {
            id
            image {
              id
              publicUrl
            }
          }
          count
        }
      }
      extractedBy {
        id
        monument {
          id
          name
          image {
            id
            publicUrl
          }
        }
        resourcesPerHour {
          id
          item {
            id
            image {
              id
              publicUrl
            }
          }
          count
        }
        fuel {
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
        resources {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
        time
      }
      fuelFor {
        id
        object {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amountPerHour
      }
      fueledBy {
        id
        fuel {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amountPerHour
      }
      shopping {
        id
        location
        pay {
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
        receive {
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
      damageInfo {
        id
        attack
        ammunition {
          id
          name
          image {
            id
            publicUrl
          }
        }
        damage
        dps
        headShot
        aimCone
        velocity
        spread
      }
      ammoFor {
        id
        weapon {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      modsFor {
        id
        weapon {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      modsInfo {
        id
        modification {
          id
          name
          image {
            id
            publicUrl
          }
        }
        damage
        rateOfFire
        aimCone
        hipAimCone
        velocity
        recoil
        aimSway
      }
      caughtBy {
        id
        trap {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
        baitCalories
        bait {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
      fishing {
        id
        catch {
          id
          name
          image {
            id
            publicUrl
          }
        }
        amount
        baitCalories
        bait {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
    }
  }
`;
