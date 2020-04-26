import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import { Blueprint } from './Blueprint';

export function CraftTable({ currentItem }) {
  return (
    <Table>
      {currentItem.craftInfo != null && (
        <tbody>
          <tr className="center">
            <th>Blueprint</th>
            <th>Ingredients</th>
            <th>Time</th>
            <th>Workbench Level</th>
          </tr>
          <Blueprint currentItem={currentItem} />
          {currentItem.craftInfo.requiredItemCounts.map(
            res =>
              res.item.craftInfo != null && (
                <Blueprint currentItem={res.item} />
              ),
          )}
        </tbody>
      )}
      {currentItem.usedForCraft.length > 0 && (
        <tbody>
          <tr className="center">
            <th>Item</th>
            <th>Ingredients</th>
            <th>Time</th>
          </tr>
          {currentItem.usedForCraft.map(items => (
            <tr key={items.item.id}>
              <td className="tableCell">
                <Link key={items.item.id} to={items.item.name}>
                  {items.item.image !== null && (
                    <Img
                      className="ingredients"
                      alt={items.item.name}
                      src={items.item.image.publicUrl}
                    />
                  )}
                  {items.item.name}
                </Link>
              </td>
              <td className="tableCell center">
                {items.requiredItemCounts.map(res => (
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
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

CraftTable.propTypes = {
  currentItem: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CraftTable);
