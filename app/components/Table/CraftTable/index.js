import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function CraftTable({ currentItem }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Blueprint</th>
          <th>Ingredients</th>
          <th>Time</th>
          <th>Workbench Level</th>
        </tr>
        {currentItem.craft.map(elems => (
          <tr key={elems.id}>
            <td className="tableCell">
              {currentItem.blueprint.image !== null && (
                <Img
                  key={currentItem.blueprint.id}
                  className="ingredients"
                  alt={currentItem.blueprint.name}
                  src={currentItem.blueprint.image.publicUrl}
                />
              )}
              {currentItem.blueprint.name}
            </td>
            <td className="tableCell center">
              {elems.requiredItemCounts.map(res => (
                <span key={res.id}>
                  <Link key={res.item.id} to={res.item.name}>
                    {res.item.image !== null && (
                      <Img
                        key={res.item.id}
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
            <td className="tableCell center">{elems.time}</td>
            <td className="tableCell center">
              <Link
                key={currentItem.workBench.id}
                to={currentItem.workBench.name}
              >
                {currentItem.workBench.image !== null && (
                  <Img
                    key={currentItem.workBench.id}
                    className="ingredients"
                    alt={currentItem.workBench.name}
                    src={currentItem.workBench.image.publicUrl}
                  />
                )}
                {currentItem.workBench.name}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

CraftTable.propTypes = {
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
)(CraftTable);
