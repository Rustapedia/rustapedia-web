import React from 'react';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';
import removeSpace from 'utils/removeSpace';
import Process from './Process';

const CookingTable = ({ currentItem }) => (
  <Table>
    {currentItem.cookingInfo.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Furnace</th>
          <th>Process</th>
        </tr>
        {currentItem.cookingInfo.map(items =>
          items.furnace.map(item => (
            <tr key={item.id}>
              <td key={item.id} className="tableCell">
                <StyledLink to={removeSpace(item.name)}>
                  {item.image !== null && (
                    <Img
                      key={item.image.id}
                      className="ingredients"
                      alt={item.name}
                      src={item.image.publicUrl}
                    />
                  )}
                  <span>{item.name}</span>
                </StyledLink>
              </td>
              <td className="tableCell center" key={items.id}>
                <Process currentItem={items} />
              </td>
            </tr>
          )),
        )}
      </tbody>
    )}
    {currentItem.cooking.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Process</th>
        </tr>
        {currentItem.cooking.map(items => (
          <tr key={items.id}>
            <td className="tableCell center" key={items.id}>
              <Process currentItem={items} />
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

CookingTable.propTypes = {
  currentItem: PropTypes.object,
};

export default CookingTable;
