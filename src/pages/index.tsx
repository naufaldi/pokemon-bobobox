import * as React from 'react';

import Container from '@/components/common/Container';
import Grid from '@/components/common/Grid';
import Bookmark from '@/components/homepage/Bookmark';
import Filter from '@/components/homepage/Filter';
import ListCard from '@/components/homepage/ListCard';
import Pagination from '@/components/homepage/Pagination';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage({ data, page }: Record<string, any>) {
  // const page = useRecoilValue(paginationAtom);
  return (
    <>
      <Seo templateTitle='Homepage Pokemon' />

      <Layout>
        <Container className='pt-24'>
          <Grid className='gap-y-6'>
            <div className='col-span-6 flex items-center justify-start sm:col-span-2'>
              <Filter />
            </div>
            <div className='col-span-4 col-end-13 flex items-end justify-end sm:items-center'>
              <Bookmark />
            </div>
            <ListCard results={data?.results} />
            <div className='col-span-full'>
              <Pagination page={page} />
            </div>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({ query: { page = 0 } }) {
  // Fetch data from external API
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=21`
  );
  const data = await res.json();
  if (Number.isInteger(page)) {
    return { props: { data, page: page } };
  }
  if (typeof page === 'string') {
    return { props: { data, page: parseInt(page) } };
  }

  // Pass data to the page via props
}
