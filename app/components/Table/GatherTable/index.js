/* eslint-disable no-debugger */
import React from 'react';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import { Link } from 'react-router-dom';

function GatherTable({ currentItem }) {
  const toolArray = [];
  if (currentItem.gatheredFrom && currentItem.gatheredFrom.length > 0) {
    for (let i = 0; i < currentItem.gatheredFrom.length; i += 1) {
      const items = currentItem.gatheredFrom[i];
      if (items) {
        for (let j = 0; j < items.gatheringInfo.length; j += 1) {
          const item = items.gatheringInfo[j];
          if (!toolArray.some(el => el.id === item.tool.id)) {
            toolArray.push(item.tool);
          }
        }
      }
    }
  }

  return (
    <Table>
      {currentItem.gatheringInfo.length > 0 && (
        <tbody>
          <tr className="center">
            <th>Tool</th>
            <th>Resources</th>
            <th>Time</th>
            <th>Condition Loss</th>
          </tr>
          {currentItem.gatheringInfo.map(items => (
            <tr key={items.id}>
              <td className="tableCell">
                <StyledLink to={items.tool.name} key={items.tool.id}>
                  {items.tool.image !== null && (
                    <Img
                      key={items.tool.image.id}
                      className="ingredients"
                      alt={items.tool.name}
                      src={items.tool.image.publicUrl}
                    />
                  )}
                  <span>{items.tool.name}</span>
                </StyledLink>
              </td>
              <td className="tableCell center">
                {items.result.map(res => (
                  <span key={res.id}>
                    <Link to={res.item.name} key={res.item.id}>
                      {res.item.image !== null && (
                        <Img
                          key={res.item.image.id}
                          className="ingredients"
                          alt={res.item.name}
                          src={res.item.image.publicUrl}
                        />
                      )}
                    </Link>
                    <span>
                      x {res.count !== null && res.count}
                      {res.range !== null && res.range}
                      {res.percent !== null && `${res.percent}%`}
                    </span>
                  </span>
                ))}
              </td>
              <td className="tableCell center">{items.time}</td>
              <td className="tableCell center">
                {items.conditionLoss !== null ? `${items.conditionLoss}%` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      )}
      {currentItem.gather.length > 0 && (
        <tbody>
          <tr className="center">
            <th>Item</th>
            <th>Resources</th>
            <th>Time</th>
            <th>Condition Loss</th>
          </tr>
          {currentItem.gather.map(items => (
            <tr key={items.id}>
              <td className="tableCell">
                <StyledLink key={items.fromItem.id} to={items.fromItem.name}>
                  {items.fromItem.image !== null && (
                    <Img
                      key={items.fromItem.image.id}
                      className="ingredients"
                      alt={items.fromItem.name}
                      src={items.fromItem.image.publicUrl}
                    />
                  )}
                  <span>{items.fromItem.name}</span>
                </StyledLink>
              </td>
              <td className="tableCell center">
                {items.result.map(res => (
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
                    <span>
                      x {res.count !== null && res.count}
                      {res.range !== null && res.range}
                      {res.percent !== null && `${res.percent}%`}
                    </span>
                  </span>
                ))}
              </td>
              <td className="tableCell center">{items.time}</td>
              <td className="tableCell center">
                {items.conditionLoss !== null ? `${items.conditionLoss}%` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      )}
      {currentItem.gatheredFrom.length > 0 && (
        <tbody>
          <tr className="center">
            <th>Item</th>
            {toolArray.map(items => (
              <th key={items.id}>
                <Link to={items.name}>
                  {items.image !== null && (
                    <Img
                      key={items.image.id}
                      className="ingredients"
                      alt={items.name}
                      src={items.image.publicUrl}
                    />
                  )}
                </Link>
              </th>
            ))}
          </tr>
          {currentItem.gatheredFrom.map(items => (
            <tr key={items.id}>
              <td className="tableCell">
                <StyledLink to={items.name}>
                  {items.image !== null && (
                    <Img
                      key={items.image.id}
                      className="ingredients"
                      alt={items.name}
                      src={items.image.publicUrl}
                    />
                  )}
                  <span>{items.name}</span>
                </StyledLink>
              </td>
              {toolArray.map(tool => {
                const itemFound = items.gatheringInfo.find(
                  el => el.tool.id === tool.id,
                );
                return itemFound !== undefined ? (
                  <td className="tableCell center" key={itemFound.tool.id}>
                    {itemFound.result.map(res => (
                      <tr key={res.id}>
                        <Link to={res.item.name}>
                          {res.item.image !== null && (
                            <Img
                              key={res.item.image.id}
                              className="ingredients"
                              alt={res.item.name}
                              src={res.item.image.publicUrl}
                            />
                          )}
                        </Link>
                        x{res.count !== null && res.count}
                        {res.range !== null && res.range}
                        {res.percent !== null && `${res.percent}%`}
                      </tr>
                    ))}
                  </td>
                ) : (
                  <td className="tableCell center" key={tool.id}>
                    -
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

GatherTable.propTypes = {
  currentItem: PropTypes.object,
};

export default GatherTable;
