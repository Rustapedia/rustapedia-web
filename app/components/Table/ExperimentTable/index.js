import React from 'react';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import StyledLink from 'components/StyledLink';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import blueprint from 'images/blueprint.png';
import arrow from 'images/arrow.png';

const ExperimentTable = ({ currentItem }) => (
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
              <StyledLink
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
                <span>{currentItem.experiment.workBench.name}</span>
              </StyledLink>
            </span>
          </td>
          <td className="tableCell center">
            <Link
              key={currentItem.experiment.experimentNeeded.id}
              to={currentItem.experiment.experimentNeeded.item.name}
            >
              {currentItem.experiment.experimentNeeded.item.image !== null && (
                <Img
                  className="ingredients"
                  alt={currentItem.experiment.experimentNeeded.item.name}
                  src={
                    currentItem.experiment.experimentNeeded.item.image.publicUrl
                  }
                />
              )}
            </Link>
            <span>x{currentItem.experiment.experimentNeeded.count}</span>
            <Img alt="arrow" src={arrow} className="icon arrow" />
            <Img
              style={{
                background: `url(${blueprint})`,
                backgroundSize: 'cover',
              }}
              key={currentItem.id}
              className="ingredients"
              alt={currentItem.name}
              src={currentItem.image.publicUrl}
            />
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
        {currentItem.experimentation.map(elems =>
          elems.item.map(item => (
            <tr key={item.id}>
              <td className="tableCell">
                <StyledLink key={item.id} to={item.name}>
                  {item.image !== null && (
                    <Img
                      style={{
                        background: `url(${blueprint})`,
                        backgroundSize: 'cover',
                      }}
                      key={item.id}
                      className="ingredients"
                      alt={item.name}
                      src={item.image.publicUrl}
                    />
                  )}
                  <span>{item.blueprint}</span>
                </StyledLink>
              </td>
              <td className="tableCell center">{item.subCategory.name}</td>
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
                  <span>x{elems.experimentNeeded.count}</span>
                </span>
              </td>
            </tr>
          )),
        )}
      </tbody>
    )}
  </Table>
);

ExperimentTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ExperimentTable;
