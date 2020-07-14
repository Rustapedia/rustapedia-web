import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Img from 'components/Img';
import { Search, Grid } from 'semantic-ui-react';
import StyledLink from 'components/StyledLink';
import Wrapper from './Wrapper';

const initialState = { isLoading: false, results: [], value: '' };

const resultRenderer = ({ title, image }) => (
  <StyledLink className="block" to={`/${title}`}>
    {image !== null && <Img className="ingredients" alt={title} src={image} />}
    <span>{title}</span>
  </StyledLink>
);
resultRenderer.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
};

export default class SearchBar extends Component {
  state = initialState;

  handleResultSelect = () => this.setState({ value: '' });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    const source = _.range(0, 1).reduce(memo => {
      this.props.data.map(category =>
        category.subCategory.map(subCategory => {
          const result = memo;
          result[subCategory.name] = {
            name: subCategory.name,
            results: subCategory.items.map(item => ({
              title: item.name,
              image: item.image !== null ? item.image.publicUrl : null,
            })),
          };
          return result;
        }),
      );
      return memo;
    }, {});
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);
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
    const { isLoading, results, value } = this.state;

    return (
      <Wrapper>
        <Grid textAlign="center">
          <Search
            category
            aligned="left"
            loading={isLoading}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            onResultSelect={this.handleResultSelect}
            results={results}
            resultRenderer={resultRenderer}
            value={value}
            {...this.props}
          />
        </Grid>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  data: PropTypes.array,
};

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);
