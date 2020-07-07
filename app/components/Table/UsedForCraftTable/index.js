import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';

const UsedForCraftTable = ({ currentItem }) => (
  <Table>
    {currentItem.usedForCraft.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Ingredients</th>
          <th>Time</th>
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
            <td className="tableCell center">{items.time}</td>
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
