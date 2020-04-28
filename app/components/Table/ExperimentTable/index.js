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
              <span key={currentItem.experiment.id}>
                <Link
                  key={currentItem.experiment.workBench.id}
                  to={currentItem.experiment.workBench.name}
                >
                  {currentItem.experiment.workBench.image !== null && (
                    <Img
                      key={currentItem.experiment.workBench.id}
                      className="ingredients"
                      alt={currentItem.experiment.workBench.name}
                      src={currentItem.experiment.workBench.image.publicUrl}
                    />
                  )}
                  {currentItem.experiment.workBench.name}
                </Link>
              </span>
            </td>
            <td className="tableCell center">
              <Link
                key={currentItem.experiment.experimentNeeded.id}
                to={currentItem.experiment.experimentNeeded.item.name}
              >
                {currentItem.experiment.experimentNeeded.item.image !==
                  null && (
                  <Img
                    className="ingredients"
                    alt={currentItem.experiment.experimentNeeded.item.name}
                    src={
                      currentItem.experiment.experimentNeeded.item.image
                        .publicUrl
                    }
                  />
                )}
              </Link>
              {currentItem.experiment.experimentNeeded.count}
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
            <tr key={elems.id}>
              <td className="tableCell">
                <Link key={elems.item.id} to={elems.item.name}>
                  {elems.item.image !== null && (
                    <Img
                      key={elems.item.id}
                      className="ingredients"
                      alt={elems.item.name}
                      src={elems.item.image.publicUrl}
                    />
                  )}
                  {elems.item.blueprint}
                </Link>
              </td>
              <td className="tableCell center">
                {elems.item.subCategory.name}
              </td>
              <td className="tableCell center">
                <span key={elems.experimentNeeded.item.id}>
                  <Link
                    key={elems.experimentNeeded.item.id}
                    to={elems.experimentNeeded.item.name}
                  >
                    {elems.experimentNeeded.item.image !== null && (
                      <Img
                        className="ingredients"
                        alt={elems.experimentNeeded.item.name}
                        src={elems.experimentNeeded.item.image.publicUrl}
                      />
                    )}
                  </Link>
                  {elems.experimentNeeded.count}
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
