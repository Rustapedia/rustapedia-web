import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';
import arrow from 'images/arrow.png';
import removeSpace from 'utils/removeSpace';

const ShoppingTable = ({ currentItem }) => (
  <Table>
    {currentItem.shopping.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Location</th>
          <th>Order</th>
        </tr>
        {currentItem.shopping.map(elems => (
          <tr key={elems.id}>
            <td className="tableCell" style={{ padding: '0 10px' }}>
              {elems.location}
            </td>
            <td className="tableCell center">
              <span>
                <Link to={removeSpace(elems.pay.item.name)}>
                  {elems.pay.item.image !== null && (
                    <Img
                      className="ingredients"
                      alt={elems.pay.item.name}
                      src={elems.pay.item.image.publicUrl}
                    />
                  )}
                </Link>
                <span>x{elems.pay.count}</span>
              </span>
              <Img alt="arrow" src={arrow} className="icon arrow" />
              <span>
                <Link to={removeSpace(elems.receive.item.name)}>
                  {elems.receive.item.image !== null && (
                    <Img
                      className="ingredients"
                      alt={elems.receive.item.name}
                      src={elems.receive.item.image.publicUrl}
                    />
                  )}
                </Link>
                <span>x{elems.receive.count}</span>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

ShoppingTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ShoppingTable;
