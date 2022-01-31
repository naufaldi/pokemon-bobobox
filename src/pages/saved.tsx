import * as React from 'react';
import { useRecoilState } from 'recoil';

import Breadcumb from '@/components/common/Breadcumb';
import Container from '@/components/common/Container';
import Grid from '@/components/common/Grid';
import Filter from '@/components/homepage/Filter';
import ListCard from '@/components/homepage/ListCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { savedAtom } from '@/recoil/saved';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function Saved({ initialRecoilState }: Record<string, any>) {
  const [saved, setSaved] = useRecoilState(savedAtom);
  // const page = useRecoilValue(paginationAtom);
  React.useEffect(() => {
    if (saved.length === 0) {
      setSaved(initialRecoilState);
    }
  }, []);
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Layout>
        <Container className='pt-24'>
          <Grid className='gap-y-6'>
            <div className='col-span-4'>
              <Breadcumb />
            </div>
            <div className='col-span-full flex items-center justify-start'>
              <div className='w-full max-w-xs'>
                <Filter />
              </div>
            </div>
            <ListCard results={saved} />
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const initialRecoilState = [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ];

  console.log('Created initial Recoil state:', initialRecoilState);

  return {
    props: { initialRecoilState },
  };
}
