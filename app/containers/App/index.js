/* eslint-disable no-debugger */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ItemsPage from 'containers/ItemsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Header from 'containers/Header';
import gql from 'graphql-tag';
import ItemPage from 'containers/ItemPage';
import { Query } from 'react-apollo';
import { makeSelectData, makeSelectCurrentItem } from './selectors';
import { currentItemChange, loadData } from './actions';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const GET_DATA = gql`
  {
    allCategories {
      name
      id
      subCategory {
        id
        name
        items {
          id
          name
          text
          blueprint
          additionalText
          image {
            publicUrl
          }
          mainInfo {
            id
            identifier
            stackSize
            despawnTime
            hp
          }
          itemInfo {
            id
            respawnTimer
            decay
            upkeep
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
        }
      }
    }
  }
`;

export function App({ onLoadData, categories, onCurrentItemChange }) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Query query={GET_DATA}>
        {({ data, loading }) => {
          if (loading && !data) {
            return null;
          }
          const allCategory = data.allCategories;
          onLoadData(allCategory);
          return null;
        }}
      </Query>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <React.Fragment>
          {categories.map(category => (
            <React.Fragment key={category.id}>
              {category.subCategory.map(subCategory => (
                <React.Fragment key={subCategory.id}>
                  <Route
                    key={subCategory.id}
                    path={`/${subCategory.name}`}
                    render={() => <ItemsPage currentCategory={subCategory} />}
                  />
                  {subCategory.items.map(item => (
                    <Route
                      key={item.id}
                      path={`/${item.name}`}
                      render={() => {
                        onCurrentItemChange(item);
                        return <ItemPage />;
                      }}
                    />
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  onLoadData: PropTypes.func,
  categories: PropTypes.array,
  onCurrentItemChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectData(),
  item: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentItemChange: item => dispatch(currentItemChange(item)),
    onLoadData: data => dispatch(loadData(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
