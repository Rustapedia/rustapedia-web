/* eslint-disable no-debugger */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import ItemsPage from 'containers/ItemsPage';
import NotFoundPage from 'containers/NotFoundPage';
import HomePage from 'containers/HomePage';
import Header from 'containers/Header';
import ItemPage from 'containers/ItemPage';
import { useQuery } from '@apollo/react-hooks';
import LoadingIndicator from 'components/LoadingIndicator';
import removeSpace from 'utils/removeSpace';
import { GET_DATA } from './constants';
import { makeSelectData } from './selectors';
import { loadData } from './actions';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  width: 100%;
  flex-direction: column;
  .ui.search > .results {
    max-height: 35vh;
    overflow-y: auto;
  }
  button {
    outline: none;
  }
  .white-space-nowrap {
    white-space: nowrap;
  }
`;

function App({ onLoadData, categories }) {
  const [initialized, setIinitialized] = useState(false);
  const { loading, error, data } = useQuery(GET_DATA, { initialized });
  useEffect(() => {
    if (!loading && !!data) {
      setIinitialized(true);
      const allCategory = data.allCategories;
      onLoadData(allCategory);
    }
  }, [data, loading]);
  if (error) return `Error! ${error}`;
  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <React.Fragment>
          {categories.map(category => (
            <React.Fragment key={category.id}>
              {category.subCategory.map(subCategory => (
                <React.Fragment key={subCategory.id}>
                  <Route
                    key={subCategory.id}
                    path={`/${removeSpace(subCategory.name)}`}
                    render={() => (
                      <ItemsPage
                        currentCategory={subCategory}
                        currentNav={category}
                      />
                    )}
                  />
                  {subCategory.items.map(item => (
                    <Route
                      key={item.id}
                      path={`/${removeSpace(item.name)}`}
                      render={() => <ItemPage item={item} />}
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
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectData(),
});

export function mapDispatchToProps(dispatch) {
  return {
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
