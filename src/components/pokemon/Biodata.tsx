import React, { FC } from 'react';

import NextImage from '../NextImage';

type BiodataProps = {
  experience: number;
  height: number;
  species: string;
  weight: number;
};

const Biodata: FC<BiodataProps> = ({ experience, height, species, weight }) => {
  return (
    <div className='grid w-full grid-cols-12 gap-6 '>
      <div className='col-span-8 rounded-lg border border-orange-200'>
        <div className='block h-80 w-full origin-center -rotate-2'>
          <NextImage
            src='/images/pokemon.png'
            alt='pokemon'
            width={500}
            height={500}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='col-span-4 flex flex-col space-y-2'>
        <h4 className='mb-4'>Biodata</h4>
        <div className='flex w-full'>
          <p className='w-6/12 font-bold'>Weight:</p>
          <p className=''>{weight}</p>
        </div>
        <div className='flex w-full'>
          <p className='w-6/12 font-bold'>Height:</p>
          <p className=''>{height}</p>
        </div>
        <div className='flex w-full'>
          <p className='w-6/12 font-bold'>Species:</p>
          <p className='capitalize'>{species}</p>
        </div>
        <div className='flex w-full'>
          <p className='w-6/12 font-bold'>Base Experience:</p>
          <p className=''>{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
