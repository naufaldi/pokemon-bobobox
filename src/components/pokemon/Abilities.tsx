import React, { FC } from 'react';

import { AbilityProps } from '@/type/Type';

const Abilities: FC<{ ability: AbilityProps[] }> = ({ ability }) => {
  return (
    <div className='flex w-11/12 flex-col space-y-2 sm:w-8/12'>
      <h4 className='mb-4'>Abilities Pokemon</h4>
      {ability?.map((item: AbilityProps, index: number) => {
        return (
          <div className='flex w-full' key={index}>
            <p className='w-10/12 font-bold capitalize sm:w-6/12'>
              {item.ability.name}:
            </p>
            <p className='capitalize'>
              {item.is_hidden ? 'hidden' : 'visible'}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Abilities;
