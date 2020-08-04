import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import workbenchlevel1 from 'images/workbench1.png';
import workbenchlevel2 from 'images/workbench2.png';
import workbenchlevel3 from 'images/workbench3.png';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';

const UsedForCraftTable = ({ currentItem }) => (
  <Table>
    {currentItem.usedForCraft.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>
            Workbench
            <br />
            Needed
          </th>
          <th>Ingredients</th>
          <th>
            <Link to="/Work%20Bench%20Level%201">
              <Img
                className="ingredients"
                alt={workbenchlevel1}
                src={workbenchlevel1}
              />
            </Link>
          </th>
          <th>
            <Link to="/Work%20Bench%20Level%202">
              <Img
                className="ingredients"
                alt={workbenchlevel2}
                src={workbenchlevel2}
              />
            </Link>
          </th>
          <th>
            <Link to="/Work%20Bench%20Level%203">
              <Img
                className="ingredients"
                alt={workbenchlevel3}
                src={workbenchlevel3}
              />
            </Link>
          </th>
        </tr>
        {currentItem.usedForCraft.map(items => (
          <tr key={items.item.id}>
            <td className="tableCell">
              <StyledLink key={items.item.id} to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                <span>{items.item.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.workBenchNeeded}</td>
            <td className="tableCell center">
              {items.requiredItemCounts.map(res => (
                <span key={res.id}>
                  <Link key={res.item.id} to={res.item.name}>
                    {res.item.image !== null && (
                      <Img
                        key={res.item.image.id}
                        className="ingredients"
                        alt={res.item.name}
                        src={res.item.image.publicUrl}
                      />
                    )}
                  </Link>
                  <span>x{res.count}</span>
                </span>
              ))}
            </td>
            <td className="tableCell center">
              {items.time1 !== null ? items.time1 : '-'}
            </td>
            <td className="tableCell center">
              {items.time2 !== null ? items.time2 : '-'}
            </td>
            <td className="tableCell center">
              {items.time3 !== null ? items.time3 : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

UsedForCraftTable.propTypes = {
  currentItem: PropTypes.object,
};

export default UsedForCraftTable;
