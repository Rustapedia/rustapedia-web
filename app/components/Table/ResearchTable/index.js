import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';
import arrow from 'images/arrow.png';
import blueprint from 'images/blueprint.png';

const ResearchTable = ({ currentItem }) => (
  <Table>
    {currentItem.research !== null && (
      <tbody>
        <tr className="center">
          <th>Tool</th>
          <th>Research Coast</th>
        </tr>
        <tr>
          <td className="tableCell">
            <span key={currentItem.research.id}>
              <StyledLink
                key={currentItem.research.researchTool.id}
                to={currentItem.research.researchTool.name}
              >
                {currentItem.research.researchTool.image !== null && (
                  <Img
                    key={currentItem.research.researchTool.id}
                    className="ingredients"
                    alt={currentItem.research.researchTool.name}
                    src={currentItem.research.researchTool.image.publicUrl}
                  />
                )}
                <span>{currentItem.research.researchTool.name}</span>
              </StyledLink>
            </span>
          </td>
          <td className="tableCell center">
            <Img
              key={currentItem.id}
              className="ingredients"
              alt={currentItem.name}
              src={currentItem.image.publicUrl}
            />
            <Link
              key={currentItem.research.researchNeeded.id}
              to={currentItem.research.researchNeeded.item.name}
            >
              {currentItem.research.researchNeeded.item.image !== null && (
                <Img
                  className="ingredients"
                  alt={currentItem.research.researchNeeded.item.name}
                  src={currentItem.research.researchNeeded.item.image.publicUrl}
                />
              )}
            </Link>
            <span>x{currentItem.research.researchNeeded.count}</span>
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
    {currentItem.researches.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Scrap</th>
        </tr>
        {currentItem.researches.map(elems =>
          elems.item.map(item => (
            <tr key={item.id}>
              <td className="tableCell">
                <StyledLink key={item.id} to={item.name}>
                  {item.image !== null && (
                    <Img
                      key={item.id}
                      className="ingredients"
                      alt={item.name}
                      src={item.image.publicUrl}
                    />
                  )}
                  <span>{item.name}</span>
                </StyledLink>
              </td>
              <td className="tableCell center">{item.subCategory.name}</td>
              <td className="tableCell center">
                <span key={elems.researchNeeded.item.id}>
                  <Link
                    key={elems.researchNeeded.item.id}
                    to={elems.researchNeeded.item.name}
                  >
                    {elems.researchNeeded.item.image !== null && (
                      <Img
                        className="ingredients"
                        alt={elems.researchNeeded.item.name}
                        src={elems.researchNeeded.item.image.publicUrl}
                      />
                    )}
                  </Link>
                  <span>x{elems.researchNeeded.count}</span>
                </span>
              </td>
            </tr>
          )),
        )}
      </tbody>
    )}
  </Table>
);

ResearchTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ResearchTable;
