import React, { FC } from 'react';

import { PokemonProps } from '@/type/Type';

import Card from '../common/Card';

type ListCardProps = {
  results: PokemonProps[];
};

const ListCard: FC<ListCardProps> = ({ results }) => {
  return (
    <>
      {results?.map((item, index) => {
        return (
          <div className='col-span-4' key={index}>
            <Card name={item.name} url={item.url} />
          </div>
        );
      })}
    </>
  );
};

export default ListCard;
