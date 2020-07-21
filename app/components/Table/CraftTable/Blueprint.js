import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import blueprint from 'images/blueprint.png';

const Blueprint = ({ currentItem }) => (
  <tr>
    <td className="tableCell">
      <StyledLink key={currentItem.id} to={currentItem.name}>
        {currentItem.image !== null && (
          <Img
            style={{
              background: `url(${blueprint})`,
              backgroundSize: 'cover',
            }}
            key={currentItem.image.id}
            className="ingredients"
            alt={currentItem.craftInfo.blueprint}
            src={currentItem.image.publicUrl}
          />
        )}
        {currentItem.craftInfo.amount !== null &&
          `x${currentItem.craftInfo.amount}`}
        <span>{currentItem.blueprint}</span>
      </StyledLink>
    </td>
    <td className="tableCell center">
      {currentItem.craftInfo.requiredItemCounts.map(res => (
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
    <td className="tableCell center">{currentItem.craftInfo.time}</td>
    <td className="tableCell center">
      {currentItem.craftInfo.workBench !== null ? (
        <StyledLink
          key={currentItem.craftInfo.workBench.id}
          to={currentItem.craftInfo.workBench.name}
        >
          {currentItem.craftInfo.workBench.image !== null && (
            <Img
              key={currentItem.craftInfo.workBench.id}
              className="ingredients"
              alt={currentItem.craftInfo.workBench.name}
              src={currentItem.craftInfo.workBench.image.publicUrl}
            />
          )}
          <span>{currentItem.craftInfo.workBench.name}</span>
        </StyledLink>
      ) : (
        '-'
      )}
    </td>
  </tr>
);

Blueprint.propTypes = {
  currentItem: PropTypes.object,
};

export default Blueprint;
