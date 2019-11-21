import React from 'react';
import A from 'components/A';
import mail from 'images/mail-icon.png';
import Img from 'components/Img';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <A href="mailto:vlad@htmlbook.ru">
        <Img src={mail} className="icon" />
        Feedback
      </A>
    </Wrapper>
  );
}

export default Footer;
