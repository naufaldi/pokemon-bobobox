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
          <a href='#' className='mr-2 h-10 w-auto'>
            <NextImage
              src='/logo/pokemon-logo.png'
              alt='logo pokemon'
              width={120}
              height={40}
              layout='responsive'
              objectFit='fill'
            />
          </a>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
            <ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#'
                  className='block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
