import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';

const RecycledFromTable = ({ currentItem }) => (
  <Table>
    {currentItem.recycledFrom.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Resources</th>
        </tr>
        {currentItem.recycledFrom.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <span key={items.item.id}>
                <StyledLink key={items.item.id} to={items.item.name}>
                  {items.item.image !== null && (
                    <Img
                      key={items.item.image.id}
                      className="ingredients"
                      alt={items.item.name}
                      src={items.item.image.publicUrl}
                    />
                  )}
                  <span>{items.item.name}</span>
                </StyledLink>
              </span>
            </td>
            <td className="tableCell center">{items.item.subCategory.name}</td>
            <td className="tableCell center">
              {items.yield.map(res => (
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
                  <span>
                    x {res.count == null ? `${res.percent}%` : res.count}
                  </span>
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

RecycledFromTable.propTypes = {
  currentItem: PropTypes.object,
};

export default RecycledFromTable;
