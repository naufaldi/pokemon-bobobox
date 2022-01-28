import React, { FC } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';

import Button from '../common/Button';
const Bookmark: FC = () => {
  return (
    <>
      <Button variant='outline'>
        <BsFillBookmarksFill />
      </Button>
    </>
  );
};

export default Bookmark;
