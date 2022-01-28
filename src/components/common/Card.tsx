import React, { FC } from 'react';

import Badge from './Badge';
import NextImage from '../NextImage';

const Card: FC = () => {
  return (
    <div className='flex origin-center rotate-2 flex-col rounded-sm border border-orange-300'>
      <div className='h-14 w-full'>
        <NextImage
          src='/images/pokemon.png'
          alt='Pokemon'
          width={500}
          height={500}
          layout='fill'
          objectFit='fill'
        />
      </div>
      <div className='flex flex-col'>
        <h6>Pokemon Dragonoid</h6>
        <div className='justify-betwen flex space-x-2'>
          <Badge variant='primary'>overgrow</Badge>
          <Badge variant='green'>chlorophyll</Badge>
        </div>
      </div>
    </div>
  );
};

export default Card;
