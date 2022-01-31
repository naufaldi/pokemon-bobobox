import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { filterAtom } from '@/recoil/filter';
import { PokemonProps } from '@/type/Type';

import Card from './Card';

type ListCardProps = {
  results: PokemonProps[];
};

const ListCard: FC<ListCardProps> = ({ results }) => {
  const searchName = useRecoilValue(filterAtom);
  return (
    <>
      {results
        ?.filter((filterName) => filterName.name.includes(searchName))
        .map((result: PokemonProps) => (
          <div className='col-span-4' key={result.name}>
            <Card url={result.url} name={result.name} />
          </div>
        ))}
    </>
  );
};

export default ListCard;
