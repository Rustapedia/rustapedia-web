import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';

const DropTable = ({ currentItem }) => (
  <Table>
    <tbody>
      <tr className="center">
        <th>{currentItem.droppedBy !== null ? 'Vehicle' : 'Crate'}</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td className="tableCell">
          <Link
            to={
              currentItem.droppedBy !== null
                ? currentItem.droppedBy.vehicle.name
                : currentItem.drops.crate.name
            }
          >
            {currentItem.droppedBy !== null
              ? currentItem.droppedBy.vehicle.name
              : currentItem.drops.crate.name}
          </Link>
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
