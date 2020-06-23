import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

const FuelTable = ({ currentItem }) => (
  <Table>
    {currentItem.fueledBy.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Fuel</th>
          <th>Consumption per Hour</th>
        </tr>
        {currentItem.fueledBy.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link to={items.fuel.name}>
                {items.fuel.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.fuel.name}
                    src={items.fuel.image.publicUrl}
                  />
                )}
                {items.fuel.name}
              </Link>
            </td>
            <td className="tableCell center">{items.amountPerHour}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.fuelFor.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Source</th>
          <th>Consumption per Hour</th>
        </tr>
        {currentItem.fuelFor.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link to={items.object.name}>
                {items.object.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.object.name}
                    src={items.object.image.publicUrl}
                  />
                )}
                {items.object.name}
              </Link>
            </td>
            <td className="tableCell center">{items.amountPerHour}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

FuelTable.propTypes = {
  currentItem: PropTypes.object,
};

export default FuelTable;
