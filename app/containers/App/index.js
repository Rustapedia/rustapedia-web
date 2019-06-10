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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ItemsPage from 'containers/ItemsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import data from './data';
import ItemPage from '../ItemPage';
import { makeSelectData, makeSelectImages } from './selectors';
import {
  currentCategoryChange,
  currentItemChange,
  loadImages,
} from './actions';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function importAll(r) {
  const images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  componentDidMount() {
    const images = importAll(
      require.context('../../images', false, /\.(png|jpe?g|svg)$/),
    );
    this.props.onLoadImages(images);
  }

  render() {
    const { onCurrentCategoryChanged } = this.props;
    const { onCurrentItemChanged } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <div>
            {Object.keys(data).map(category => (
              <div key={category}>
                <Route
                  key={category}
                  path={`/${category}`}
                  render={() => {
                    onCurrentCategoryChanged(data[category]);
                    return <ItemsPage currentCategory={data[category]} />;
                  }}
                />
                {data[category].map(item => (
                  <Route
                    key={item.name}
                    path={`/${item.name}`}
                    render={() => {
                      onCurrentItemChanged(item);
                      return <ItemPage currentItem={item} />;
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  onCurrentCategoryChanged: PropTypes.func,
  onLoadImages: PropTypes.func,
  onCurrentItemChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  images: makeSelectImages(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentCategoryChanged: category =>
      dispatch(currentCategoryChange(category)),
    onLoadImages: images => dispatch(loadImages(images)),
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
)(App);
