import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import blueprint from 'images/blueprint.png';
import removeSpace from 'utils/removeSpace';

const Blueprint = ({ currentItem }) => (
  <tr>
    <td className="tableCell container">
      <StyledLink key={currentItem.id} to={removeSpace(currentItem.name)}>
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
      </StyledLink>
      <div className="marginLeft">
        <div>
          <StyledLink to={removeSpace(currentItem.name)}>
            {currentItem.blueprint}
          </StyledLink>
        </div>
        {currentItem.defaultKnow ? (
          <div className="small-font">(Know By Default)</div>
        ) : null}
      </div>
    </td>
    <td className="tableCell center">
      {currentItem.craftInfo.workBenchNeeded}
    </td>
    <td className="tableCell center">
      {currentItem.craftInfo.requiredItemCounts.map(res => (
        <span key={res.id}>
          <Link key={res.item.id} to={removeSpace(res.item.name)}>
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
    <td className="tableCell center">
      {currentItem.craftInfo.time1 !== null ? currentItem.craftInfo.time1 : '-'}
    </td>
    <td className="tableCell center">
      {currentItem.craftInfo.time2 !== null ? currentItem.craftInfo.time2 : '-'}
    </td>
    <td className="tableCell center">
      {currentItem.craftInfo.time3 !== null ? currentItem.craftInfo.time3 : '-'}
    </td>
  </tr>
);

Blueprint.propTypes = {
  currentItem: PropTypes.object,
};

export default Blueprint;
