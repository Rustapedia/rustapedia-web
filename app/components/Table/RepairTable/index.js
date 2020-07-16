import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';

const RepairTable = ({ currentItem }) => (
  <Table>
    {currentItem.repair.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Tool</th>
          <th>Max Repair Coast</th>
          <th>Condition Loss</th>
          <th>Blueprint Required</th>
        </tr>
        {currentItem.repair.map(item => (
          <tr key={item.id}>
            <td className="tableCell">
              <span key={item.tool.id}>
                <StyledLink key={item.tool.id} to={item.tool.name}>
                  {item.tool.image !== null && (
                    <Img
                      key={item.tool.image.id}
                      className="ingredients"
                      alt={item.tool.name}
                      src={item.tool.image.publicUrl}
                    />
                  )}
                  <span>{item.tool.name}</span>
                </StyledLink>
              </span>
            </td>
            <td className="tableCell center">
              {item.repairCoast.map(res => (
                <span key={res.id}>
                  <Link key={res.item.id} to={res.item.name}>
                    {res.item.image !== null && (
                      <Img
                        key={res.item.image.id}
                        className="ingredients"
                        alt={res.item.name}
                        src={res.item.image.publicUrl}
                      />
                    )}
                  </Link>
                  <span>x{res.count}</span>
                </span>
              ))}
            </td>
            {item.condition !== null ? (
              <td className="tableCell center">{item.condition}</td>
            ) : (
              <td className="tableCell center">-</td>
            )}
            <td className="tableCell center">{item.blueprintRequired}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.repairs.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Max Repair Coast</th>
          <th>Condition Loss</th>
          <th>Blueprint Required</th>
        </tr>
        {currentItem.repairs.map(tool => (
          <tr key={tool.id}>
            <td className="tableCell">
              <span key={tool.item.id}>
                <StyledLink key={tool.item.id} to={tool.item.name}>
                  {tool.item.image !== null && (
                    <Img
                      key={tool.item.image.id}
                      className="ingredients"
                      alt={tool.item.name}
                      src={tool.item.image.publicUrl}
                    />
                  )}
                  <span>{tool.item.name}</span>
                </StyledLink>
              </span>
            </td>
            <td className="tableCell center">
              {tool.repairCoast.map(res => (
                <span key={res.id}>
                  <Link key={res.item.id} to={res.item.name}>
                    {res.item.image !== null && (
                      <Img
                        key={res.item.image.id}
                        className="ingredients"
                        alt={res.item.name}
                        src={res.item.image.publicUrl}
                      />
                    )}
                  </Link>
                  <span>x{res.count}</span>
                </span>
              ))}
            </td>
            <td className="tableCell center">{tool.condition}</td>
            <td className="tableCell center">{tool.blueprintRequired}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

RepairTable.propTypes = {
  currentItem: PropTypes.object,
};

export default RepairTable;
