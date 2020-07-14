import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';

const DamageTable = ({ currentItem }) => (
  <Table>
    {currentItem.damageInfo.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Ammunition</th>
          <th>Damage</th>
          <th>DPS</th>
          <th>Headshot</th>
          <th>Aim Cone</th>
          <th>Velocity</th>
        </tr>
        {currentItem.damageInfo.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={items.ammunition.name}>
                {items.ammunition.image !== null && (
                  <Img
                    key={items.ammunition.image.id}
                    className="ingredients"
                    alt={items.ammunition.name}
                    src={items.ammunition.image.publicUrl}
                  />
                )}
                <span>{items.ammunition.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.damage}</td>
            <td className="tableCell center">{items.dps}</td>
            <td className="tableCell center">x {items.headShot}</td>
            <td className="tableCell center">{items.aimCone}°</td>
            <td className="tableCell center">{items.velocity}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.ammoFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Weapon</th>
        </tr>
        {currentItem.ammoFor.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={items.weapon.name}>
                {items.weapon.image !== null && (
                  <Img
                    key={items.weapon.image.id}
                    className="ingredients"
                    alt={items.weapon.name}
                    src={items.weapon.image.publicUrl}
                  />
                )}
                <span>{items.weapon.name}</span>
              </StyledLink>
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

DamageTable.propTypes = {
  currentItem: PropTypes.object,
};

export default DamageTable;
