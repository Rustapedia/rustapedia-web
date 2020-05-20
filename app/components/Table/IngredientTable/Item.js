import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ currentItem }) =>
  currentItem.ingredientFor.map(items => (
    <tr key={items.id}>
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
            {res.count}
          </span>
        ))}
      </td>
    </tr>
  ));
Item.propTypes = {
  currentItem: PropTypes.object,
};

export default Item;