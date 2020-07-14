import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';

const ModsTable = ({ currentItem }) => (
  <Table>
    {currentItem.modsInfo.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Modifications</th>
          <th>Damage</th>
          <th>Rate Of Fire</th>
          <th>Aim Cone</th>
          <th>Hip Aim Cone</th>
          <th>Velocity</th>
          <th>Recoil</th>
          <th>Aim Sway</th>
        </tr>
        {currentItem.modsInfo.map(items => (
          <tr key={items.id}>
            {items.modification !== null && (
              <td className="tableCell">
                <StyledLink to={items.modification.name}>
                  {items.modification.image !== null && (
                    <Img
                      key={items.modification.image.id}
                      className="ingredients"
                      alt={items.modification.name}
                      src={items.modification.image.publicUrl}
                    />
                  )}
                  <span>{items.modification.name}</span>
                </StyledLink>
              </td>
            )}
            {items.damage !== null ? (
              <td className="tableCell center">
                {items.damage > 0 ? `+${items.damage}` : `${items.damage}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.rateOfFire !== null ? (
              <td className="tableCell center">
                {items.rateOfFire > 0
                  ? `+${items.rateOfFire}`
                  : `${items.rateOfFire}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.aimCone !== null ? (
              <td className="tableCell center">
                {items.aimCone > 0 ? `+${items.aimCone}` : `${items.aimCone}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.hipAimCone !== null ? (
              <td className="tableCell center">
                {items.hipAimCone > 0
                  ? `+${items.hipAimCone}`
                  : `${items.hipAimCone}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.velocity !== null ? (
              <td className="tableCell center">
                {items.velocity > 0
                  ? `+${items.velocity}`
                  : `${items.velocity}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.recoil !== null ? (
              <td className="tableCell center">
                {items.recoil > 0 ? `+${items.recoil}` : `${items.recoil}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            {items.aimSway !== null ? (
              <td className="tableCell center">
                {items.aimSway > 0 ? `+${items.aimSway}` : `${items.vaimSway}%`}
              </td>
            ) : (
              <td className="tableCell center">-</td>
            )}
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.modsFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Weapon</th>
        </tr>
        {currentItem.modsFor.map(items => (
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

ModsTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ModsTable;
