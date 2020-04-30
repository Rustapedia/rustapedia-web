import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

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
              <Link
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
                {currentItem.research.researchTool.name}
              </Link>
            </span>
          </td>
          <td className="tableCell center">
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
            {currentItem.research.researchNeeded.count}
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
        {currentItem.researches.map(elems => (
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
                {elems.item.name}
              </Link>
            </td>
            <td className="tableCell center">{elems.item.subCategory.name}</td>
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
                {elems.researchNeeded.count}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

ResearchTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ResearchTable;
