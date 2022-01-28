import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

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
          <div className='col-span-2 flex items-center justify-start'>
            <Link passHref href='/'>
              <a className='flex items-center justify-center rounded border border-blue-500 px-6 py-2 text-blue-500 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white'>
                <BiArrowBack className='mr-2 h-4 w-4' />
                Back
              </a>
            </Link>
          </div>
          <div className='col-span-full text-center'>
            <h1 className='uppercase'>{data.name}</h1>
          </div>
          <div className='col-span-8'>
            <Biodata
              experience={data.base_experience}
              height={data.height}
              species={data.species.name}
              weight={data.weight}
              imageUrl={
                data?.sprites?.other?.['official-artwork']?.front_default ||
                data?.sprites?.other?.home?.front_default
              }
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
