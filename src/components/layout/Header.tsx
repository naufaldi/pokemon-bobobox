import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '../NextImage';

const Header: FC = () => {
  const [onTop, setOnTop] = useState<boolean>(true);
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <header
      className={clsxm(
        'fixed inset-x-0 top-0 z-10 w-full bg-white transition-all',
        onTop ? '' : 'shadow'
      )}
    >
      <nav className='mx-auto w-full max-w-screen-xl rounded border-gray-200 px-2 py-2.5 dark:bg-gray-800 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <Link href='/'>
            <a className='relative mr-2 h-10 w-auto'>
              <NextImage
                src='/logo/pokemon-logo.png'
                alt='logo pokemon'
                width={120}
                height={40}
                layout='fill'
                objectFit='fill'
              />
            </a>
          </Link>

          <div className='block w-6/12 md:w-auto' id='mobile-menu'>
            <ul className='mt-4 flex flex-row space-x-4 sm:space-x-0 md:mt-0 md:space-x-8 md:text-sm md:font-medium'>
              <li>
                <Link passHref href='/'>
                  <a
                    className='text-md block rounded  py-2 pr-4 pl-3 font-bold  text-blue-700 hover:text-blue-400 dark:text-white md:bg-transparent md:p-0'
                    aria-current='page'
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link passHref href='/saved'>
                  <a
                    className='text-md block rounded  py-2 pr-4 pl-3 font-bold  text-blue-700 hover:text-blue-400 dark:text-white md:bg-transparent md:p-0'
                    aria-current='page'
                  >
                    Saved
                  </a>
                </Link>
              </li>
              <li>
                <Link passHref href='https://pokeapi.co/api/v2/pokemon/'>
                  <a
                    target='_blank'
                    className='text-md block rounded  py-2 pr-4 pl-3 font-bold  text-blue-700 hover:text-blue-400 dark:text-white md:bg-transparent md:p-0'
                    aria-current='page'
                  >
                    API
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
