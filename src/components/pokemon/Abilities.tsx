import React, { FC } from 'react';

const Abilities: FC = () => {
  return (
    <div className='flex w-8/12 flex-col space-y-2'>
      <h4 className='mb-4'>Abilities Pokemon</h4>
      <div className='flex w-full'>
        <p className='w-6/12 font-bold'>Weight:</p>
        <p className=''>120</p>
      </div>
    </div>
  );
};

export default Abilities;
