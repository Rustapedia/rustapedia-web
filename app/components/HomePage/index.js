/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import H1 from 'components/H1';
import Footer from 'components/Footer';
import Button from 'components/Button';
import Input from 'components/Input';
import P from 'components/P';
import Wrapper from './Wrapper';

export function HomePage() {
  return (
    <Wrapper>
      <H1 className="headline">Rustapedia</H1>
      <P className="logo">your pocket encyclopedia</P>
      <div>
        <Input placeholder="What are you looking for?" />
        <Button>Search</Button>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default HomePage;
