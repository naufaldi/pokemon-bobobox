import React, { FC } from 'react';

const Filter: FC = () => {
  return (
    <div className='w-full'>
      <label
        htmlFor='base-input'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        Search Pokemon
      </label>
      <input
        type='text'
        id='base-input'
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
      />
    </div>
  );
};

export default Filter;
