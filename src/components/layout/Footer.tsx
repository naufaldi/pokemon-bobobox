import React, { FC } from 'react';

import Container from '../common/Container';

const Footer: FC = () => {
  return (
    <footer className='fixed bottom-0 right-0 left-0 z-10 bg-white'>
      <Container>
        <div className='flex items-center justify-center px-4 py-2'>
          <p>Frontend Test for Bobobox</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
