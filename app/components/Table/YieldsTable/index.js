import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';
import removeSpace from 'utils/removeSpace';

const YieldsTable = ({ currentItem }) => (
  <Table>
    {currentItem.yields.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Resoueces</th>
          <th>Amount</th>
          <th>Time</th>
          <th>Fuel</th>
          <th>Amount Per Minute</th>
        </tr>
        {currentItem.yields.map(items => (
          <tr key={items.id}>
            {items.resources.map(res => (
              <td className="tableCell" key={res.id}>
                <StyledLink to={removeSpace(res.name)}>
                  {res.image !== null && (
                    <Img
                      className="ingredients"
                      alt={res.name}
                      src={res.image.publicUrl}
                    />
                  )}
                  <span>{res.name}</span>
                </StyledLink>
              </td>
            ))}
            <td className="tableCell center">{items.amount}</td>
            <td className="tableCell center">{items.time}</td>
            <td className="tableCell center">
              <Link to={removeSpace(items.fuel.item.name)}>
                {items.fuel.item.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.fuel.item.name}
                    src={items.fuel.item.image.publicUrl}
                  />
                )}
              </Link>
              <span>x{items.fuel.count}</span>
            </td>
            <td className="tableCell center">{items.amountPerMinute}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.extractedBy.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Quarry</th>
          <th>Amount</th>
          <th>Fuel</th>
        </tr>
        {currentItem.extractedBy.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(items.monument.name)}>
                {items.monument.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.monument.name}
                    src={items.monument.image.publicUrl}
                  />
                )}
                <span>{items.monument.name}</span>
              </StyledLink>
            </td>
            {items.resources.map(res => (
              <td className="tableCell center" key={res.id}>
                <Link to={removeSpace(res.name)}>
                  {res.image !== null && (
                    <Img
                      className="ingredients"
                      alt={res.name}
                      src={res.image.publicUrl}
                    />
                  )}
                </Link>
                <span>
                  x{items.amount}/per{items.time}
                </span>
              </td>
            ))}
            <td className="tableCell center">
              <Link to={removeSpace(items.fuel.item.name)}>
                {items.fuel.item.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.fuel.item.name}
                    src={items.fuel.item.image.publicUrl}
                  />
                )}
              </Link>
              <span>x{items.fuel.count}</span>
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

YieldsTable.propTypes = {
  currentItem: PropTypes.object,
};

export default YieldsTable;
