import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Blueprint({ currentItem }) {
  return (
    <tr key={currentItem.craftInfo.id}>
      <td className="tableCell">
        <Link key={currentItem.id} to={currentItem.name}>
          {currentItem.image !== null && (
            <Img
              key={currentItem.image.id}
              className="ingredients"
              alt={currentItem.craftInfo.blueprint}
              src={currentItem.image.publicUrl}
            />
          )}
          {currentItem.blueprint}
        </Link>
      </td>
      <td className="tableCell center">
        {currentItem.craftInfo.requiredItemCounts.map(res => (
          <span key={res.id}>
            <Link key={res.item.id} to={res.item.name}>
              {res.item.image !== null && (
                <Img
                  key={res.item.image.id}
                  className="ingredients"
                  alt={res.item.name}
                  src={res.item.image.publicUrl}
                />
              )}
            </Link>
            {res.count}
          </span>
        ))}
      </td>
      <td className="tableCell center">{currentItem.craftInfo.time}</td>
      <td className="tableCell center">
        <Link
          key={currentItem.craftInfo.workBench.id}
          to={currentItem.craftInfo.workBench.name}
        >
          {currentItem.craftInfo.workBench.image !== null && (
            <Img
              key={currentItem.craftInfo.workBench.id}
              className="ingredients"
              alt={currentItem.craftInfo.workBench.name}
              src={currentItem.craftInfo.workBench.image.publicUrl}
            />
          )}
          {currentItem.craftInfo.workBench.name}
        </Link>
      </td>
    </tr>
  );
}

Blueprint.propTypes = {
  currentItem: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Blueprint);
