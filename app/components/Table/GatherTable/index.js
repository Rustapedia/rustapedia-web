import React from 'react';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GatherTable = ({ currentItem }) => (
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
              <Link to={items.tool.name} key={items.tool.id}>
                {items.tool.image !== null && (
                  <Img
                    key={items.tool.image.id}
                    className="ingredients"
                    alt={items.tool.name}
                    src={items.tool.image.publicUrl}
                  />
                )}
                {items.tool.name}
              </Link>
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
                  {res.count}
                </span>
              ))}
            </td>
            <td className="tableCell center">{items.time}</td>
            <td className="tableCell center">{items.conditionLoss}%</td>
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
              <Link key={items.fromItem.id} to={items.fromItem.name}>
                {items.fromItem.image !== null && (
                  <Img
                    key={items.fromItem.image.id}
                    className="ingredients"
                    alt={items.fromItem.name}
                    src={items.fromItem.image.publicUrl}
                  />
                )}
                {items.fromItem.name}
              </Link>
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
                  {res.count}
                </span>
              ))}
            </td>
            <td className="tableCell center">{items.time}</td>
            <td className="tableCell center">{items.conditionLoss}%</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.gatheredFrom.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          {currentItem.gatheredFrom.map(items =>
            items.gatheringInfo.map(item => (
              <th key={item.tool.id}>
                <Link to={item.tool.name}>
                  {item.tool.image !== null && (
                    <Img
                      key={item.tool.image.id}
                      className="ingredients"
                      alt={item.tool.name}
                      src={item.tool.image.publicUrl}
                    />
                  )}
                </Link>
              </th>
            )),
          )}
        </tr>
        {currentItem.gatheredFrom.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link to={items.name}>
                {items.image !== null && (
                  <Img
                    key={items.image.id}
                    className="ingredients"
                    alt={items.name}
                    src={items.image.publicUrl}
                  />
                )}
                {items.name}
              </Link>
            </td>
            {items.gatheringInfo.map(item => (
              <td className="tableCell center" key={item.id}>
                {item.result.map(res => (
                  <span key={res.id}>
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
                    {res.count}
                  </span>
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

GatherTable.propTypes = {
  currentItem: PropTypes.object,
};

export default GatherTable;
