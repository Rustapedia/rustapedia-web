import React from 'react';
import A from 'components/A';
import Img from 'components/Img';
import mail from 'images/mail.png';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <A href="mailto:vlad@htmlbook.ru">
        <Img src={mail} alt="mail" className="icon" />
        Feedback
      </A>
    </Wrapper>
  );
}

export default Footer;
