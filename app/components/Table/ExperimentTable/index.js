import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ExperimentTable({ currentItem }) {
  return (
    <Table>
      {currentItem.experiment !== null && (
        <tbody>
          <tr className="center">
            <th>Workbench</th>
            <th>Experiment Coast</th>
          </tr>
          <tr>
            <td className="tableCell">
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
            <td className="tableCell center">
              <span key={currentItem.experiment.id}>
                <Link
                  key={currentItem.experiment.experimentNeeded.id}
                  to={currentItem.experiment.experimentNeeded.name}
                >
                  {currentItem.experiment.experimentNeeded.image !== null && (
                    <Img
                      className="ingredients"
                      alt={currentItem.experiment.experimentNeeded.name}
                      src={
                        currentItem.experiment.experimentNeeded.image.publicUrl
                      }
                    />
                  )}
                </Link>
                {currentItem.experiment.experimentCost}
              </span>
            </td>
          </tr>
        </tbody>
      )}
      {currentItem.experimentation.length > 0 && (
        <tbody>
          <tr className="center">
            <th>Blueprint</th>
            <th>Category</th>
            <th>Scrap</th>
          </tr>
          {currentItem.experimentation.map(elems => (
            <tr key={elems.blueprint.id}>
              <td className="tableCell">
                <Link key={elems.blueprint.id} to={elems.name}>
                  {elems.blueprint.image !== null && (
                    <Img
                      key={elems.blueprint.id}
                      className="ingredients"
                      alt={elems.blueprint.name}
                      src={elems.blueprint.image.publicUrl}
                    />
                  )}
                  {elems.blueprint.name}
                </Link>
              </td>
              <td className="tableCell center">{elems.subCategory.name}</td>
              <td className="tableCell center">
                <span key={elems.experiment.id}>
                  <Link
                    key={elems.experiment.experimentNeeded.id}
                    to={elems.experiment.experimentNeeded.name}
                  >
                    {elems.experiment.experimentNeeded.image !== null && (
                      <Img
                        className="ingredients"
                        alt={elems.experiment.experimentNeeded.name}
                        src={elems.experiment.experimentNeeded.image.publicUrl}
                      />
                    )}
                  </Link>
                  {elems.experiment.experimentCost}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

ExperimentTable.propTypes = {
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
)(ExperimentTable);
