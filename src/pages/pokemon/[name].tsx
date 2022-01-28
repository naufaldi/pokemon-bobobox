import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/layout/Layout';

const Name: NextPage = () => {
  return (
    <Layout>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed alias
        molestiae quisquam corrupti, quos consequatur doloribus tenetur quasi a
        dolore esse minus adipisci beatae consequuntur nisi, iusto iste sint
        vel.
      </div>
    </Layout>
  );
};

export default Name;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
