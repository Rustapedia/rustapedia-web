import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import { Link } from 'react-router-dom';

const IngredientTable = ({ currentItem }) => (
  <Table>
    {currentItem.ingredientFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Ingredients</th>
          <th>Category</th>
        </tr>
        {currentItem.ingredientFor.map(items => (
          <tr key={items.item.id}>
            <td className="tableCell">
              <Link key={items.item.id} to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.item.name}
              </Link>
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
                  {res.count}
                </span>
              ))}
            </td>
            <td className="tableCell center">{items.item.subCategory.name}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

IngredientTable.propTypes = {
  currentItem: PropTypes.object,
};

export default IngredientTable;
