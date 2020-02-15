import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import StyledLink from 'containers/Header/StyledLink';
import data from 'containers/App/data';

const initialState = { isLoading: false, results: [], value: '' };

const source = _.range(0, 1).reduce(memo => {
  Object.keys(data).map(prop =>
    Object.keys(data[prop]).map(name => {
      const result = memo;
      result[name] = {
        name,
        results: data[prop][name],
      };
      return result;
    }),
  );
  return memo;
}, {});

const resultRenderer = ({ name, shortName }) => (
  <StyledLink to={`/${shortName}`}>{name}</StyledLink>
);

resultRenderer.propTypes = {
  name: PropTypes.string,
  shortName: PropTypes.string,
};

export default class SearchBar extends Component {
  state = initialState;

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.name);

      const filteredResults = _.reduce(
        source,
        (memo, allData, name) => {
          const results = _.filter(allData.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {},
      );

      return this.setState({
        isLoading: false,
        results: filteredResults,
      });
    }, 300);
  };

  render() {
    const { isLoading, results } = this.state;

    return (
      <Grid textAlign="center">
        <Search
          category
          aligned="left"
          loading={isLoading}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true,
          })}
          results={results}
          resultRenderer={resultRenderer}
        />
      </Grid>
    );
  }
}
