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
      </td>
      <td className="tableCell center">{item.quantity}</td>
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
