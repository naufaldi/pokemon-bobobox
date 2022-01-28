import React, { FC } from 'react';

import Container from '../common/Container';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className='flex items-center justify-center px-4 py-6'>
          <p>Frontend Test for Bobobox</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
