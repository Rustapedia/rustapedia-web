import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from 'components/Img';
import workbenchlevel1 from 'images/workbench1.png';
import workbenchlevel2 from 'images/workbench2.png';
import workbenchlevel3 from 'images/workbench3.png';
import Blueprint from './Blueprint';

const CraftTable = ({ currentItem }) => (
  <Table>
    {currentItem.craftInfo != null && (
      <tbody>
        <tr className="center">
          <th>Blueprint</th>
          <th>
            Workbench <br /> Needed
          </th>
          <th>Ingredients</th>
          <th>
            <Link to="/WorkBenchLevel1">
              <Img
                className="ingredients"
                alt={workbenchlevel1}
                src={workbenchlevel1}
              />
            </Link>
          </th>
          <th>
            <Link to="/WorkBenchLevel2">
              <Img
                className="ingredients"
                alt={workbenchlevel2}
                src={workbenchlevel2}
              />
            </Link>
          </th>
          <th>
            <Link to="/WorkBenchLevel3">
              <Img
                className="ingredients"
                alt={workbenchlevel3}
                src={workbenchlevel3}
              />
            </Link>
          </th>
        </tr>
        <Blueprint currentItem={currentItem} key={currentItem.craftInfo.id} />
        {currentItem.craftInfo.requiredItemCounts.map(
          res =>
            res.item.craftInfo != null && (
              <Blueprint currentItem={res.item} key={res.id} />
            ),
        )}
      </tbody>
    )}
  </Table>
);

CraftTable.propTypes = {
  currentItem: PropTypes.object,
};

export default CraftTable;
