import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ExperimentTable({ currentItem, images }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Workbench</th>
          <th>Experiment Coast</th>
        </tr>
        {currentItem.experiment.map(elems => (
          <tr key={elems.workbench}>
            <td className="tableCell">
              <Img
                className="ingredients"
                alt={elems.workbench}
                src={images[`${elems.shortName}.png`]}
              />
              {elems.workbench}
            </td>
            <td className="tableCell center">
              {Object.keys(elems.experimentCoast).map(res => (
                <span key={res}>
                  <Link key={res} to={`/${res}`}>
                    <Img
                      className="ingredients"
                      alt={res}
                      src={images[`${res}.png`]}
                    />
                  </Link>
                  {elems.experimentCoast[res]}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ExperimentTable.propTypes = {
  currentItem: PropTypes.object,
  images: PropTypes.object,
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
