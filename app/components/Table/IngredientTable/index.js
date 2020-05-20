import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Item from './Item';

const IngredientTable = ({ currentItem }) => (
  <Table>
    {currentItem.ingredientFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Ingredients</th>
        </tr>
        <Item currentItem={currentItem} />
        {currentItem.ingredientFor.map(
          items =>
            items.item.ingredientFor !== null && (
              <Item currentItem={items.item} />
            ),
        )}
      </tbody>
    )}
  </Table>
);

IngredientTable.propTypes = {
  currentItem: PropTypes.object,
};

export default IngredientTable;
