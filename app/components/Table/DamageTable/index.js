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
          {currentItem.damageInfo[0].ammunition !== null && <th>Ammunition</th>}
          {currentItem.damageInfo[0].attack !== null && <th>Attack</th>}
          <th>Damage</th>
          <th>DPS</th>
          <th>Headshot</th>
          {currentItem.damageInfo[0].attack !== null && <th>Spread</th>}
          {currentItem.damageInfo[0].ammunition !== null && <th>Aim Cone</th>}
          <th>Velocity</th>
        </tr>
        {currentItem.damageInfo.map(items => (
          <tr key={items.id}>
            {items.ammunition !== null && (
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
            )}
            {items.attack !== null && (
              <td className="tableCell">{items.attack}</td>
            )}
            {items.damage !== null ? (
              <td className="tableCell center">{items.damage}</td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.dps !== null ? (
              <td className="tableCell center">{items.dps}</td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.headShot !== null ? (
              <td className="tableCell center">x{items.headShot}</td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.attack !== null &&
              (items.spread !== null ? (
                <td className="tableCell center">{items.spread}</td>
              ) : (
                <td className="tableCell center">-</td>
              ))}
            {items.ammunition !== null &&
              (items.aimCone !== null ? (
                <td className="tableCell center">{items.aimCone}°</td>
              ) : (
                <td className="tableCell center">-</td>
              ))}
            {items.velocity !== null ? (
              <td className="tableCell center">{items.velocity}</td>
            ) : (
              <td className="tableCell center">-</td>
            )}
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
