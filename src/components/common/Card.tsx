import React, { FC, useEffect, useState } from 'react';

import Badge, { BadgeVariant } from './Badge';
import NextImage from '../NextImage';

const Card: FC<{ name: string; url: string }> = ({ name, url }) => {
  const badgeRandom = ['primary', 'dark', 'red', 'green', 'yellow'];
  const [data, setData] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}`);
      const data = await result.json();
      setData(data);
      setImageUrl(data?.sprites?.other?.['official-artwork']?.front_default);
    };

    fetchData();
  }, [name, url]);
  return (
    <div className='flex flex-col rounded-round transition-all hover:opacity-75 hover:shadow-md'>
      <div className=' origin-center rotate-2  rounded-round border  border-orange-300 bg-orange-100 p-8'>
        <div className='h-52 w-full origin-center -rotate-2'>
          <NextImage
            src={imageUrl ? imageUrl : '/image/pokemon.png'}
            alt={name}
            width={500}
            height={500}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      <div className='mt-4 flex flex-col px-4 pb-2'>
        <h6 className='mx-auto uppercase'>{name}</h6>
        <div className='justify-betwen mt-3 flex space-x-2 px-4'>
          {data?.abilities?.slice(0, 4).map((item: any, index: number) => (
            <Badge key={index} variant={badgeRandom[index] as BadgeVariant}>
              {item.ability.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
