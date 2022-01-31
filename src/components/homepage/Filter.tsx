import React, { FC } from 'react';
import { useRecoilState } from 'recoil';

import { filterAtom } from '@/recoil/filter';

const Filter: FC = () => {
  const [value, setValue] = useRecoilState(filterAtom);
  return (
    <div className='w-full'>
      <label
        htmlFor='search-input'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        Search Pokemon
      </label>
      <input
        type='text'
        value={value}
        placeholder='Search...'
        id='search-input'
        onChange={(e) => setValue(e.target.value)}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
      />
    </div>
  );
};

export default Filter;
