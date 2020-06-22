import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

const EquipmentTable = ({ currentItem }) => (
  <Table>
    {currentItem.equipment.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Speed km/h</th>
          <th>Extra Slots</th>
          <th>Protection</th>
        </tr>
        {currentItem.equipment.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link key={items.item.id} to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.item.name}
              </Link>
            </td>
            <td className="tableCell center">{items.item.itemInfo.speed}</td>
            <td className="tableCell center">
              {items.extraSlots == null ? '-' : items.extraSlots}
            </td>
            <td className="tableCell center">{items.protection}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.equipmentFor !== null && (
      <tbody>
        <tr className="center">
          <th>Animal</th>
          <th>Extra Slots</th>
          <th>Protection</th>
        </tr>
        <tr>
          <td className="tableCell">
            <Link
              key={currentItem.equipmentFor.animal.id}
              to={currentItem.equipmentFor.animal.name}
            >
              {currentItem.equipmentFor.animal.image !== null && (
                <Img
                  key={currentItem.equipmentFor.animal.id}
                  className="ingredients"
                  alt={currentItem.equipmentFor.animal.name}
                  src={currentItem.equipmentFor.animal.image.publicUrl}
                />
              )}
              {currentItem.equipmentFor.animal.name}
            </Link>
          </td>
          <td className="tableCell center">
            {currentItem.equipmentFor.extraSlots == null
              ? '-'
              : currentItem.equipmentFor.extraSlots}
          </td>
          <td className="tableCell center">
            {currentItem.equipmentFor.protection}
          </td>
        </tr>
      </tbody>
    )}
  </Table>
);

EquipmentTable.propTypes = {
  currentItem: PropTypes.object,
};

export default EquipmentTable;