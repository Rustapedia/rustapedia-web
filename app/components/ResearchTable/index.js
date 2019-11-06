import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

export function ResearchTable({ currentItem, images }) {
  return (
    <Table>
      <tbody>
        <tr className="center">
          <th>Research Table</th>
          <th>Researching</th>
        </tr>
        {currentItem.research.map(elems => (
          <tr key={elems.research}>
            <td className="tableCell">
              <Img
                className="ingredients"
                alt={elems.ResearchTable}
                src={images[`${elems.shortName}.png`]}
              />
              {elems.researchTable}
            </td>
            <td className="tableCell center">
              {Object.keys(elems.researching).map(res => (
                <span key={res}>
                  <Link key={res} to={`/${res}`}>
                    <Img
                      className="ingredients"
                      alt={res}
                      src={images[`${res}.png`]}
                    />
                  </Link>
                  {elems.researching[res]}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ResearchTable.propTypes = {
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
)(ResearchTable);
