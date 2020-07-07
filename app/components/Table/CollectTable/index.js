import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';

const CollectTable = ({ currentItem }) => (
  <Table>
    {currentItem.collectible !== null && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Amount</th>
        </tr>
        {currentItem.collectible.items.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={items.item.name}>
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
            </td>
            <td className="tableCell center">{items.count}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.collected !== null && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Resources</th>
        </tr>
        <tr key={currentItem.collected.id}>
          <td className="tableCell">
            <StyledLink to={currentItem.collected.collectedFrom.name}>
              {currentItem.collected.collectedFrom.image !== null && (
                <Img
                  key={currentItem.collected.collectedFrom.image.id}
                  className="ingredients"
                  alt={currentItem.collected.collectedFrom.name}
                  src={currentItem.collected.collectedFrom.image.publicUrl}
                />
              )}
              <span>{currentItem.collected.collectedFrom.name}</span>
            </StyledLink>
          </td>
          <td className="tableCell center">
            {currentItem.collected.items.map(items => (
              <span key={items.id}>
                <Link to={items.item.name}>
                  {items.item.image !== null && (
                    <Img
                      key={items.item.image.id}
                      className="ingredients"
                      alt={items.item.name}
                      src={items.item.image.publicUrl}
                    />
                  )}
                </Link>
                <span>x{items.count}</span>
              </span>
            ))}
          </td>
        </tr>
      </tbody>
    )}
  </Table>
);

CollectTable.propTypes = {
  currentItem: PropTypes.object,
};

export default CollectTable;
