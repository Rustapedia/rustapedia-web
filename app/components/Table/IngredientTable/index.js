import React from 'react';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';

const IngredientTable = ({ currentItem }) => (
  <Table>
    {currentItem.ingredientFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Ingredients</th>
        </tr>
        {currentItem.ingredientFor.map(items => (
          <tr key={items.id}>
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
            <td className="tableCell center">{items.item.subCategory.name}</td>
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
                  <span>x {res.count}</span>
                </span>
              ))}
            </td>
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
