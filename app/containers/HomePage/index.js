/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import H1 from 'components/H1';
import Footer from 'components/Footer';
import P from 'components/P';
import SearchBar from 'containers/SearchBar';
import Wrapper from './Wrapper';

const HomePage = () => (
  <Wrapper>
    <H1 className="headline">Rustapedia</H1>
    <P className="logo">your pocket encyclopedia</P>
    <SearchBar />
    <Footer />
  </Wrapper>
);

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);
export default HomePage;
