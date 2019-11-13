/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import H1 from 'components/H1';
import Wrapper from './Wrapper';

export function HomePage() {
  return (
    <Wrapper>
      <H1 className="headline">Rustapedia</H1>
      <p>your pocket encyclopedia</p>
      <div>
        <input placeholder="What are you looking for?" />
        <button type="button">Search</button>
      </div>
    </Wrapper>
  );
}

export default HomePage;
