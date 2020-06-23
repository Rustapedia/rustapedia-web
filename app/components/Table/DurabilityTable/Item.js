import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ currentItem }) =>
  currentItem.map(item => (
    <tr key={item.id}>
      <td className="tableCell">
        <Link key={item.item.id} to={item.item.name}>
          {item.item.image !== null && (
            <Img
              key={item.item.image.id}
              className="ingredients"
              alt={item.item.name}
              src={item.item.image.publicUrl}
            />
          )}
          {item.item.name}
        </Link>
        {item.ammo !== null && <p>{item.ammo.name}</p>}
      </td>
      <td className="tableCell center">
        {item.ammo !== null ? (
          <Link key={item.ammo.id} to={item.ammo.name}>
            <Img
              key={item.ammo.image.id}
              className="ingredients"
              alt={item.ammo.name}
              src={item.ammo.image.publicUrl}
            />
            {item.quantity}
          </Link>
        ) : (
          item.quantity
        )}
      </td>
      <td className="tableCell center">{item.time}</td>
      <td className="tableCell center">
        {item.fuelNeeded == null ? '-' : item.fuelNeeded}
      </td>
      <td className="tableCell center">
        {item.sulfurNeeded == null ? '-' : item.sulfurNeeded}
      </td>
    </tr>
  ));

Item.propTypes = {
  currentItem: PropTypes.array,
};

export default Item;
