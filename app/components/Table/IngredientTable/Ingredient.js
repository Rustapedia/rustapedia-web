import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import removeSpace from 'utils/removeSpace';

const Ingredient = ({ currentItem }) =>
  currentItem.map(items => (
    <tr key={items.id}>
      <td className="tableCell">
        <StyledLink key={items.item.id} to={removeSpace(items.item.name)}>
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
            <Link key={res.item.id} to={removeSpace(res.item.name)}>
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
  ));

Ingredient.propTypes = {
  currentItem: PropTypes.object,
};

export default Ingredient;
