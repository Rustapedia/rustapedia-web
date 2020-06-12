import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

const ProduceTable = ({ currentItem }) => (
  <Table>
    {currentItem.produces !== null && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Amount per Hour</th>
        </tr>
        <tr>
          <td className="tableCell">
            <Link
              to={currentItem.produces.item.name}
              key={currentItem.produces.item.id}
            >
              {currentItem.produces.item.image !== null && (
                <Img
                  key={currentItem.produces.item.image.id}
                  className="ingredients"
                  alt={currentItem.produces.item.name}
                  src={currentItem.produces.item.image.publicUrl}
                />
              )}
              {currentItem.produces.item.name}
            </Link>
          </td>
          <td className="tableCell center">{currentItem.produces.amount}</td>
        </tr>
      </tbody>
    )}
    {currentItem.productOf !== null && (
      <tbody>
        <tr className="center">
          <th>Animal</th>
          <th>Amount per Hour</th>
        </tr>
        <tr>
          <td className="tableCell">
            <Link
              to={currentItem.productOf.animal.name}
              key={currentItem.productOf.animal.id}
            >
              {currentItem.productOf.animal.image !== null && (
                <Img
                  key={currentItem.productOf.animal.image.id}
                  className="ingredients"
                  alt={currentItem.productOf.animal.name}
                  src={currentItem.productOf.animal.image.publicUrl}
                />
              )}
              {currentItem.productOf.animal.name}
            </Link>
          </td>
          <td className="tableCell center">{currentItem.productOf.amount}</td>
        </tr>
      </tbody>
    )}
  </Table>
);

ProduceTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ProduceTable;
