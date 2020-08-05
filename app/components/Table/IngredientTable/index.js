import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

const IngredientTable = ({ currentItem }) => (
  <Table>
    {currentItem.ingredientFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Ingredients</th>
        </tr>
        <Ingredient
          currentItem={currentItem.ingredientFor}
          key={currentItem.id}
        />
        {currentItem.ingredientFor.map(
          items =>
            items.item.ingredientFor.length > 0 && (
              <Ingredient
                currentItem={items.item.ingredientFor}
                key={items.item.id}
              />
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
