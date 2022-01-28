import React, { FC } from 'react';

import Button from '../common/Button';

const Pagination: FC = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className='mt-12 flex w-full items-center justify-between'>
      <Button variant='primary' onClick={handleClick}>
        Previous
      </Button>
      <Button variant='primary' onClick={handleClick}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
