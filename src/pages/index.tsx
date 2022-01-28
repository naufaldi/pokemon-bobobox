import * as React from 'react';

import Container from '@/components/common/Container';
import Grid from '@/components/common/Grid';
import Bookmark from '@/components/homepage/Bookmark';
import Filter from '@/components/homepage/Filter';
import ListCard from '@/components/homepage/ListCard';
import Pagination from '@/components/homepage/Pagination';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage({ data }: Record<string, any>) {
  console.log('data', data);
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Layout>
        <Container className='pt-24'>
          <Grid className='gap-y-6'>
            <div className='col-span-2 flex items-center justify-start'>
              <Filter />
            </div>
            <div className='col-span-2 col-end-13 flex items-center justify-end'>
              <Bookmark />
            </div>
            <ListCard results={data?.results} />
            <div className='col-span-full'>
              <Pagination />
            </div>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
