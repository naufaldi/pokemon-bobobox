import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import Container from '@/components/common/Container';
import Grid from '@/components/common/Grid';
import Layout from '@/components/layout/Layout';
import Abilities from '@/components/pokemon/Abilities';
import Biodata from '@/components/pokemon/Biodata';
import Status from '@/components/pokemon/Status';

import { PokemonDetailsProps } from '@/type/Type';

const Name: NextPage<{ data: PokemonDetailsProps }> = ({ data }) => {
  // console.log('data detail', data.stats);
  return (
    <Layout>
      <Container className='pt-24'>
        <Grid className='gap-y-6'>
          <div className='col-span-full text-center'>
            <h1 className='uppercase'>{data.name}</h1>
          </div>
          <div className='col-span-8'>
            <Biodata
              experience={data.base_experience}
              height={data.height}
              species={data.species.name}
              weight={data.weight}
            />
          </div>
          <div className='col-span-6'>
            <Status stats={data.stats} />
          </div>
          <div className='col-span-6'>
            <Abilities ability={data.abilities} />
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Name;

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context?.params?.name}`
  );
  const data = await res.json();
  // const data = 'makan nasi';

  // Pass data to the page via props
  // console.log('context', context?.query.name);
  return { props: { data } };
};
