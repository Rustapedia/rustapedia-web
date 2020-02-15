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
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ItemsPage from 'containers/ItemsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Header from 'containers/Header';
import data from './data';
import ItemPage from '../ItemPage';
import {
  makeSelectData,
  makeSelectImages,
  makeSelectCurrentItem,
} from './selectors';
import { loadImages, currentItemChange } from './actions';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
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
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <div>
            {Object.keys(data).map(prop => (
              <div key={prop}>
                {Object.keys(data[prop]).map(category => (
                  <div key={category}>
                    <Route
                      key={category}
                      path={`/${category}`}
                      render={() => (
                        <ItemsPage currentCategory={data[prop][category]} />
                      )}
                    />
                    {data[prop][category].map(item => (
                      <Route
                        key={item.name}
                        path={`/${item.shortName}`}
                        render={() => {
                          this.props.onCurrentItemChange(item);
                          return <ItemPage />;
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  onLoadImages: PropTypes.func,
  onCurrentItemChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  images: makeSelectImages(),
  item: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadImages: images => dispatch(loadImages(images)),
    onCurrentItemChange: item => dispatch(currentItemChange(item)),
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
