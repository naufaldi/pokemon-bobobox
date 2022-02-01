import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { savedAtom } from '@/recoil/saved';
import { PokemonDetailsProps, PokemonTypesProps } from '@/type/Type';

import Badge, { BadgeVariant } from '../common/Badge';
import Button from '../common/Button';
import Toast from '../common/Toast';
import NextImage from '../NextImage';

const Card: FC<{ name: string; url: string }> = ({ name, url }) => {
  const router = useRouter();
  const pathName = router.pathname;
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
    //  cant add if data already exist
    if (saved.find((item) => item.name === name)) {
      setShowToast(true);
      return;
    }

    setSaved([
      ...saved,
      {
        name,
        url,
      },
    ]);
    setShowToast(true);
  };
  const handleRemove = () => {
    const newSaved = saved.filter((item) => item.name !== name);
    setSaved(newSaved);
  };
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);
  // console.log('router', pathName);
  return (
    <>
      {showToast && (
        <div className='fixed top-28 left-[20%] z-20 sm:top-16  sm:left-[50%]'>
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
            {/* cek if pathname saved, then change to remove from bookmark */}
            {pathName === '/saved' ? (
              <Button
                className='border-none p-0 text-red-500 hover:bg-transparent hover:text-red-700'
                variant='light'
                onClick={handleRemove}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </Button>
            ) : (
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
            )}
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
