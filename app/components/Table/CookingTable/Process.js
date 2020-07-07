import React from 'react';
import Img from 'components/Img';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from 'images/arrow.png';

const Process = ({ currentItem }) => (
  <span key={currentItem.id}>
    {currentItem.processOne != null && (
      <span key={currentItem.processOne.id}>
        {currentItem.processOne.cookingItem !== null && (
          <Link
            to={currentItem.processOne.cookingItem.name}
            key={currentItem.processOne.cookingItem.id}
          >
            {currentItem.processOne.cookingItem.image !== null && (
              <Img
                key={currentItem.processOne.cookingItem.image.id}
                className="ingredients"
                alt={currentItem.processOne.cookingItem.name}
                src={currentItem.processOne.cookingItem.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processOne.needed !== null && (
          <Link
            to={currentItem.processOne.needed.name}
            key={currentItem.processOne.needed.id}
          >
            {currentItem.processOne.needed.image !== null && (
              <Img
                key={currentItem.processOne.needed.image.id}
                className="ingredients"
                alt={currentItem.processOne.needed.name}
                src={currentItem.processOne.needed.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processOne.count !== null && (
          <span>x{currentItem.processOne.count}</span>
        )}
      </span>
    )}
    {currentItem.processTwo != null && (
      <span key={currentItem.processTwo.id}>
        <Img alt="arrow" src={arrow} className="icon arrow" />
        {currentItem.processTwo.cookingItem !== null && (
          <Link
            to={currentItem.processTwo.cookingItem.name}
            key={currentItem.processTwo.cookingItem.id}
          >
            {currentItem.processTwo.cookingItem.image !== null && (
              <Img
                key={currentItem.processTwo.cookingItem.image.id}
                className="ingredients"
                alt={currentItem.processTwo.cookingItem.name}
                src={currentItem.processTwo.cookingItem.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processTwo.needed !== null && (
          <Link
            to={currentItem.processTwo.needed.name}
            key={currentItem.processTwo.needed.id}
          >
            {currentItem.processTwo.needed.image !== null && (
              <Img
                key={currentItem.processTwo.needed.image.id}
                className="ingredients"
                alt={currentItem.processTwo.needed.name}
                src={currentItem.processTwo.needed.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processTwo.count !== null && (
          <span>x{currentItem.processTwo.count}</span>
        )}
      </span>
    )}
    {currentItem.processThree != null && (
      <span key={currentItem.processThree.id}>
        <Img alt="arrow" src={arrow} className="icon arrow" />
        {currentItem.processThree.cookingItem !== null && (
          <Link
            to={currentItem.processThree.cookingItem.name}
            key={currentItem.processThree.cookingItem.id}
          >
            {currentItem.processThree.cookingItem.image !== null && (
              <Img
                key={currentItem.processThree.cookingItem.image.id}
                className="ingredients"
                alt={currentItem.processThree.cookingItem.name}
                src={currentItem.processThree.cookingItem.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processThree.needed !== null && (
          <Link
            to={currentItem.processThree.needed.name}
            key={currentItem.processThree.needed.id}
          >
            {currentItem.processThree.needed.image !== null && (
              <Img
                key={currentItem.processThree.needed.image.id}
                className="ingredients"
                alt={currentItem.processThree.needed.name}
                src={currentItem.processThree.needed.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processThree.count !== null && (
          <span>x{currentItem.processThree.count}</span>
        )}
      </span>
    )}
    {currentItem.processFour != null && (
      <span key={currentItem.processFour.id}>
        <Img alt="arrow" src={arrow} className="icon arrow" />
        {currentItem.processFour.cookingItem !== null && (
          <Link
            to={currentItem.processFour.cookingItem.name}
            key={currentItem.processFour.cookingItem.id}
          >
            {currentItem.processFour.cookingItem.image !== null && (
              <Img
                key={currentItem.processFour.cookingItem.image.id}
                className="ingredients"
                alt={currentItem.processFour.cookingItem.name}
                src={currentItem.processFour.cookingItem.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processFour.needed !== null && (
          <Link
            to={currentItem.processFour.needed.name}
            key={currentItem.processFour.needed.id}
          >
            {currentItem.processFour.needed.image !== null && (
              <Img
                key={currentItem.processFour.needed.image.id}
                className="ingredients"
                alt={currentItem.processFour.needed.name}
                src={currentItem.processFour.needed.image.publicUrl}
              />
            )}
          </Link>
        )}
        {currentItem.processFour.count !== null && (
          <span>x{currentItem.processFour.count}</span>
        )}
      </span>
    )}
  </span>
);

Process.propTypes = {
  currentItem: PropTypes.object,
};

export default Process;
