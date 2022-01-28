import { useRouter } from 'next/router';
import React, { FC } from 'react';

import Button from '../common/Button';

const Pagination: FC<{ page: number }> = ({ page }) => {
  // const [page, setPage] = useRecoilState(paginationAtom);
  const router = useRouter();
  // const handleClickPrev = () => {
  //   setPage(page - 20);
  // };
  // const handleClickNext = () => {
  //   setPage(page + 20);
  // };
  console.log('page', page);
  return (
    <div className='mt-12 flex w-full items-center justify-between'>
      <Button
        variant='primary'
        onClick={() => router.push(`?page=${page - 21}`)}
      >
        Previous
      </Button>
      <Button
        variant='primary'
        onClick={() => router.push(`?page=${page + 21}`)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
