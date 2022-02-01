import React, { FC } from 'react';

import { StatsProps } from '@/type/Type';

const Status: FC<{ stats: StatsProps[] }> = ({ stats }) => {
  return (
    <div className='flex w-11/12 flex-col space-y-2 sm:w-8/12'>
      <h4 className='mb-4'>Status Pokemon</h4>
      {stats?.map((item: StatsProps, index: number) => {
        return (
          <div className='flex w-full' key={index}>
            <p className='w-10/12 font-bold capitalize sm:w-6/12'>
              {item.stat.name}:
            </p>
            <p className=''>{item.base_stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Status;
