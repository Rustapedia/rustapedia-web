import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import StyledLink from 'components/StyledLink';
import removeSpace from 'utils/removeSpace';

const ProduceTable = ({ currentItem }) => (
  <Table>
    {currentItem.produces.length > 0 && (
      <tbody>
        {currentItem.name === 'Horse' ? (
          <tr className="center">
            <th>Item</th>
            <th>Amount per Hour</th>
          </tr>
        ) : (
          <tr className="center">
            <th>Item</th>
            <th>Amount</th>
          </tr>
        )}
        {currentItem.produces.map(items => (
          <tr key={items.item.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(items.item.name)}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.image.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                <span>{items.item.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.amount}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.productOf.length > 0 && (
      <tbody>
        {currentItem.name === 'Horse Dung' ? (
          <tr className="center">
            <th>Animal</th>
            <th>Amount per Hour</th>
          </tr>
        ) : (
          <tr className="center">
            <th>Item</th>
            <th>Amount</th>
          </tr>
        )}
        {currentItem.productOf.map(items => (
          <tr key={items.animal.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(items.animal.name)}>
                {items.animal.image !== null && (
                  <Img
                    key={items.animal.image.id}
                    className="ingredients"
                    alt={items.animal.name}
                    src={items.animal.image.publicUrl}
                  />
                )}
                <span>{items.animal.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.amount}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

ProduceTable.propTypes = {
  currentItem: PropTypes.object,
};

export default ProduceTable;
