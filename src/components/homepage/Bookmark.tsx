import Link from 'next/link';
import React, { FC } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';

import Button from '../common/Button';
const Bookmark: FC = () => {
  return (
    <>
      <Link href='/saved' passHref>
        <Button tag='a' variant='outline'>
          <BsFillBookmarksFill />
        </Button>
      </Link>
    </>
  );
};

export default Bookmark;
