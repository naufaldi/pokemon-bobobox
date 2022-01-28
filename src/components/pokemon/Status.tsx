import React, { FC } from 'react';

import { StatsProps } from '@/type/Type';

const Status: FC<{ stats: StatsProps[] }> = ({ stats }) => {
  return (
    <div className='flex w-8/12 flex-col space-y-2'>
      <h4 className='mb-4'>Status Pokemon</h4>
      {stats?.map((item: StatsProps, index: number) => {
        return (
          <div className='flex w-full' key={index}>
            <p className='w-6/12 font-bold capitalize'>{item.stat.name}:</p>
            <p className=''>{item.base_stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Status;
