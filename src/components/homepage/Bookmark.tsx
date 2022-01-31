import Link from 'next/link';
import React, { FC } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';

import Button from '../common/Button';
const Bookmark: FC = () => {
  return (
    <>
      <Link href='/saved' passHref>
        <Button
          tag='a'
          variant='outline'
          className='text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white'
        >
          <BsFillBookmarksFill />
        </Button>
      </Link>
    </>
  );
};

export default Bookmark;
