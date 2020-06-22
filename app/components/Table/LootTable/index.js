import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

const LootTable = ({ currentItem }) => (
  <Table>
    {currentItem.loot.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Items</th>
          <th>Category</th>
          <th>Condition</th>
          <th>Amount</th>
          <th>Chance</th>
        </tr>
        {currentItem.loot.map(elems => (
          <tr key={elems.id}>
            <td className="tableCell">
              <Link to={elems.itemToLoot.name}>
                {elems.itemToLoot.image !== null && (
                  <Img
                    className="ingredients"
                    alt={elems.itemToLoot.name}
                    src={elems.itemToLoot.image.publicUrl}
                  />
                )}
                {elems.isBlueprint
                  ? elems.itemToLoot.blueprint
                  : elems.itemToLoot.name}
              </Link>
            </td>
            <td className="tableCell center">
              {elems.itemToLoot.subCategory.name}
            </td>
            <td className="tableCell center">{elems.condition}</td>
            <td className="tableCell center">{elems.count}</td>
            <td className="tableCell center">{elems.chance}%</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.lootInfo.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Container</th>
          <th>Condition</th>
          <th>Amount</th>
          <th>Chance</th>
        </tr>
        {currentItem.lootInfo.map(elems => (
          <tr key={elems.container.id}>
            <td className="tableCell">
              <Link to={elems.container.name}>
                {elems.container.image !== null && (
                  <Img
                    className="ingredients"
                    alt={elems.container.name}
                    src={elems.container.image.publicUrl}
                  />
                )}
                {elems.container.name}
              </Link>
            </td>
            <td className="tableCell center">{elems.condition}</td>
            <td className="tableCell center">{elems.count}</td>
            <td className="tableCell center">{elems.chance}%</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

LootTable.propTypes = {
  currentItem: PropTypes.object,
};

export default LootTable;
