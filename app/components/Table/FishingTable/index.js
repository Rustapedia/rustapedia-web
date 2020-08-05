import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';
import removeSpace from 'utils/removeSpace';

const FishingTable = ({ currentItem }) => (
  <Table>
    {currentItem.fishing.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Catch</th>
          <th>Amount</th>
          <th>Bait Calories</th>
          <th>Bait</th>
        </tr>
        {currentItem.fishing.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(items.catch.name)}>
                {items.catch.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.catch.name}
                    src={items.catch.image.publicUrl}
                  />
                )}
                <span>{items.catch.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.amount}</td>
            <td className="tableCell center">{items.baitCalories}</td>
            <td className="tableCell center">
              Any food except
              <StyledLink to={removeSpace(items.bait.name)}>
                {items.bait.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.bait.name}
                    src={items.bait.image.publicUrl}
                  />
                )}
              </StyledLink>
            </td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.caughtBy.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Trap</th>
          <th>Amount</th>
          <th>Bait Calories</th>
          <th>Bait</th>
        </tr>
        {currentItem.caughtBy.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(items.trap.name)}>
                {items.trap.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.trap.name}
                    src={items.trap.image.publicUrl}
                  />
                )}
                <span>{items.trap.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{items.amount}</td>
            <td className="tableCell center">{items.baitCalories}</td>
            <td className="tableCell center">
              Any food except
              <StyledLink to={removeSpace(items.bait.name)}>
                {items.bait.image !== null && (
                  <Img
                    className="ingredients"
                    alt={items.bait.name}
                    src={items.bait.image.publicUrl}
                  />
                )}
              </StyledLink>
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

FishingTable.propTypes = {
  currentItem: PropTypes.object,
};

export default FishingTable;
