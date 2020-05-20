import React from 'react';
import Table from 'components/Table/Table';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CompostableTable = ({ currentItem }) => (
  <Table>
    {currentItem.compostable != null && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Composting</th>
          <th>Amount per Stack</th>
        </tr>
        <tr key={currentItem.compostable.id}>
          <td className="tableCell">
            <Link
              key={currentItem.compostable.tool.id}
              to={currentItem.compostable.tool.name}
            >
              {currentItem.compostable.tool.image !== null && (
                <Img
                  key={currentItem.compostable.tool.image.id}
                  className="ingredients"
                  alt={currentItem.compostable.tool.name}
                  src={currentItem.compostable.tool.image.publicUrl}
                />
              )}
              {currentItem.compostable.tool.name}
            </Link>
          </td>
          <td className="tableCell center">
            <Link
              key={currentItem.compostable.result.item.id}
              to={currentItem.compostable.result.item.name}
            >
              {currentItem.compostable.result.item.image !== null && (
                <Img
                  key={currentItem.compostable.result.item.image.id}
                  className="ingredients"
                  alt={currentItem.compostable.result.item.name}
                  src={currentItem.compostable.result.item.image.publicUrl}
                />
              )}
            </Link>
            {currentItem.compostable.result.count}
          </td>
          <td className="tableCell center">
            {currentItem.compostable.amountPerStack}
          </td>
        </tr>
      </tbody>
    )}
    {currentItem.composter.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Result</th>
          <th>Amount per Stack</th>
        </tr>
        {currentItem.composter.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link key={items.item.id} to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.item.name}
              </Link>
            </td>
            <td className="tableCell center">
              <Link key={items.result.item.id} to={items.result.item.name}>
                {items.result.item.image !== null && (
                  <Img
                    key={items.result.item.image.id}
                    className="ingredients"
                    alt={items.result.item.name}
                    src={items.result.item.image.publicUrl}
                  />
                )}
              </Link>
              {items.result.count}
            </td>
            <td className="tableCell center">{items.amountPerStack}</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.composting.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Amount</th>
        </tr>
        {currentItem.composting.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <Link key={items.item.id} to={items.item.name}>
                {items.item.image !== null && (
                  <Img
                    key={items.item.id}
                    className="ingredients"
                    alt={items.item.name}
                    src={items.item.image.publicUrl}
                  />
                )}
                {items.item.name}
              </Link>
            </td>
            <td className="tableCell center">{items.result.count}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

CompostableTable.propTypes = {
  currentItem: PropTypes.object,
};

export default CompostableTable;
