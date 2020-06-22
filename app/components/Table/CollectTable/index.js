import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

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
              <Link to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.image.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.item.name}
              </Link>
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
            <Link to={currentItem.collected.collectedFrom.name}>
              {currentItem.collected.collectedFrom.name}
            </Link>
          </td>
          <td className="tableCell center">
            {currentItem.collected.items.map(items => (
              <Link to={items.item.name} key={items.id}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.image.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.count}
              </Link>
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
