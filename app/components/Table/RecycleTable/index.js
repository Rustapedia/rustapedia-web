import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Table from 'components/Table/Table';
import { Link } from 'react-router-dom';
import StyledLink from 'components/StyledLink';

const RecycleTable = ({ currentItem }) => (
  <Table>
    {currentItem.recycle !== null && (
      <tbody>
        <tr className="center">
          <th>Recycle</th>
          <th>Yield</th>
        </tr>
        <tr>
          <td className="tableCell">
            <span>
              <StyledLink
                key={currentItem.recycle.recycler.id}
                to={currentItem.recycle.recycler.name}
              >
                {currentItem.recycle.recycler.image !== null && (
                  <Img
                    key={currentItem.recycle.recycler.image.id}
                    className="ingredients"
                    alt={currentItem.recycle.recycler.name}
                    src={currentItem.recycle.recycler.image.publicUrl}
                  />
                )}
                <span>{currentItem.recycle.recycler.name}</span>
              </StyledLink>
            </span>
          </td>
          <td className="tableCell center">
            {currentItem.recycle.yield.map(res => (
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
                  x {res.count == null ? `${res.percent}%` : res.count}
                </span>
              </span>
            ))}
          </td>
        </tr>
      </tbody>
    )}
    {currentItem.recycler.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Item</th>
          <th>Category</th>
          <th>Resources</th>
        </tr>
        {currentItem.recycler.map(items => (
          <tr key={items.id}>
            <td className="tableCell">
              <span key={items.item.id}>
                <StyledLink key={items.item.id} to={items.item.name}>
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
              </span>
            </td>
            <td className="tableCell center">{items.item.subCategory.name}</td>
            <td className="tableCell center">
              {items.yield.map(res => (
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
                    x{res.count == null ? `${res.percent}%` : res.count}
                  </span>
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

RecycleTable.propTypes = {
  currentItem: PropTypes.object,
};

export default RecycleTable;
