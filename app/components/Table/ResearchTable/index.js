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
            <span>
              <StyledLink to={currentItem.research.researchTool.name}>
                {currentItem.research.researchTool.image !== null && (
                  <Img
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
              className="ingredients"
              alt={currentItem.name}
              src={currentItem.image.publicUrl}
            />
            <Link to={currentItem.research.researchNeeded.item.name}>
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
                <StyledLink to={item.name}>
                  {item.image !== null && (
                    <Img
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
                <span>
                  <Link to={elems.researchNeeded.item.name}>
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
