import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import Img from 'components/Img';
import StyledLink from 'components/StyledLink';

const DropTable = ({ currentItem }) => (
  <Table>
    <tbody>
      <tr className="center">
        <th>{currentItem.droppedBy !== null ? 'Vehicle' : 'Crate'}</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td className="tableCell">
          <StyledLink
            to={
              currentItem.droppedBy !== null
                ? currentItem.droppedBy.vehicle.name
                : currentItem.drops.crate.name
            }
          >
            {currentItem.droppedBy !== null && (
              <Img
                key={currentItem.droppedBy.vehicle.image.id}
                className="ingredients"
                alt={currentItem.droppedBy.vehicle.name}
                src={currentItem.droppedBy.vehicle.image.publicUrl}
              />
            )}
            {currentItem.drops !== null && (
              <Img
                key={currentItem.drops.crate.image.id}
                className="ingredients"
                alt={currentItem.drops.crate.name}
                src={currentItem.drops.crate.image.publicUrl}
              />
            )}
            <span>
              {currentItem.droppedBy !== null
                ? currentItem.droppedBy.vehicle.name
                : currentItem.drops.crate.name}
            </span>
          </StyledLink>
        </td>
        <td className="tableCell center">
          {currentItem.droppedBy !== null
            ? currentItem.droppedBy.amount
            : currentItem.drops.amount}
        </td>
      </tr>
    </tbody>
  </Table>
);

DropTable.propTypes = {
  currentItem: PropTypes.object,
};

export default DropTable;
