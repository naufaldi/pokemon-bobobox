import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { savedAtom } from '@/recoil/saved';
import { PokemonDetailsProps, PokemonTypesProps } from '@/type/Type';

import Badge, { BadgeVariant } from '../common/Badge';
import Button from '../common/Button';
import Toast from '../common/Toast';
import NextImage from '../NextImage';

const Card: FC<{ name: string; url: string }> = ({ name, url }) => {
  const badgeRandom = ['primary', 'dark', 'red', 'green', 'yellow'];
  const [data, setData] = useState<PokemonDetailsProps>();
  const [saved, setSaved] = useRecoilState(savedAtom);
  const [imageUrl, setImageUrl] = useState<string>();
  const [showToast, setShowToast] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}`);
      const data = await result.json();
      setData(data);
      setImageUrl(
        data?.sprites?.other?.['official-artwork']?.front_default ||
          data?.sprites?.other?.home?.front_default
      );
    };

    fetchData();
  }, [name, url]);
  const handleSaved = () => {
    setSaved([
      ...saved,
      {
        name,
        url,
      },
    ]);
    setShowToast(true);
  };
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);
  console.log('saved', saved);
  return (
    <>
      {showToast && (
        <div className='fixed top-16 left-[50%]  z-20'>
          <Toast
            variant='success'
            onClose={() => setShowToast(!showToast)}
            message={`${name} has been saved`}
          />
        </div>
      )}
      <div className='flex flex-col rounded-round transition-all hover:opacity-75 hover:shadow-md'>
        <div className='relative origin-center rotate-2  rounded-round border  border-orange-300 bg-orange-100 p-8'>
          <div className='absolute top-5 right-10'>
            <h4>{data?.id}</h4>
          </div>
          <Link href={`/pokemon/${name}`} as={`/pokemon/${name}`}>
            <a className=' block h-52 w-full origin-center -rotate-2'>
              <NextImage
                src={imageUrl ? imageUrl : '/images/pokemon.png'}
                alt={name}
                width={500}
                height={500}
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
        </div>

        <div className='relative mt-4 flex flex-col px-4 pb-2'>
          <div className='flex justify-between'>
            <h6 className='mx-auto uppercase'>{name}</h6>
            <Button
              className='border-none p-0 hover:bg-transparent hover:text-blue-500'
              variant='light'
              onClick={handleSaved}
            >
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                />
              </svg>
            </Button>
          </div>
          <div className='justify-betwen mt-3 flex space-x-2 px-4'>
            {data?.types
              ?.slice(0, 4)
              .map((item: PokemonTypesProps, index: number) => (
                <Badge key={index} variant={badgeRandom[index] as BadgeVariant}>
                  {item.type.name}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
