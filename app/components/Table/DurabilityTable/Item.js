import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import sulfur from 'images/sulfur.png';
import fuel from 'images/lowgradefuel.png';

const Item = ({ currentItem }) =>
  currentItem.map(item => (
    <tr key={item.id}>
      <td className="tableCell container">
        <StyledLink key={item.item.id} to={item.item.name}>
          {item.item.image !== null && (
            <Img
              key={item.item.image.id}
              className="ingredients"
              alt={item.item.name}
              src={item.item.image.publicUrl}
            />
          )}
        </StyledLink>
        <div>
          <StyledLink key={item.item.id} to={item.item.name}>
            <div>{item.item.name}</div>
          </StyledLink>
          {item.ammo !== null && (
            <StyledLink key={item.ammo.id} to={item.ammo.name}>
              <div className="small-font">{item.ammo.name}</div>
            </StyledLink>
          )}
          {item.weapon !== null && (
            <StyledLink key={item.weapon.id} to={item.weapon.name}>
              <div className="small-font">{item.weapon.name}</div>
            </StyledLink>
          )}
          {item.text !== null && <div className="small-font">{item.text}</div>}
        </div>
      </td>
      <td className="tableCell center">
        {item.ammo !== null ? (
          <span>
            {' '}
            <Link key={item.ammo.id} to={item.ammo.name}>
              <Img
                key={item.ammo.image.id}
                className="ingredients"
                alt={item.ammo.name}
                src={item.ammo.image.publicUrl}
              />
            </Link>
            <span>x{item.quantity}</span>
          </span>
        ) : (
          item.quantity
        )}
      </td>
      <td className="tableCell center">{item.time}</td>
      <td className="tableCell center">
        {item.fuelNeeded == null ? (
          '-'
        ) : (
          <div>
            <Link to="/Low%20Grade%20Fuel">
              <Img className="ingredients" src={fuel} />
            </Link>
            <span>x{item.fuelNeeded}</span>
          </div>
        )}
      </td>
      <td className="tableCell center">
        {item.sulfurNeeded == null ? (
          '-'
        ) : (
          <div>
            <Link to={sulfur}>
              <Img className="ingredients" src={sulfur} />
            </Link>
            <span>x{item.sulfurNeeded}</span>
          </div>
        )}
      </td>
    </tr>
  ));

Item.propTypes = {
  currentItem: PropTypes.array,
};

export default Item;
