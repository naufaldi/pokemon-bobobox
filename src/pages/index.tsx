import * as React from 'react';

import Container from '@/components/common/Container';
import Grid from '@/components/common/Grid';
import Bookmark from '@/components/homepage/Bookmark';
import Filter from '@/components/homepage/Filter';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Layout>
        <Container className='pt-24'>
          <Grid>
            <div className='col-span-2 flex items-center justify-start'>
              <Filter />
            </div>
            <div className='col-span-2 col-end-13 flex items-center justify-end'>
              <Bookmark />
            </div>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
