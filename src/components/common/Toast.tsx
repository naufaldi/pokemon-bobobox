import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

type ToastProps = {
  message: string;
  variant: 'success' | 'error';
  onClose: () => void;
};

const Toast: FC<ToastProps> = ({ message, onClose, variant }) => {
  return (
    <div
      id={`toast-${variant}`}
      className='mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow '
      role='alert'
      onClick={onClose}
    >
      <div
        className={clsxm(
          'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ',
          variant === 'success' && 'bg-green-100 text-green-500 ',
          variant === 'error' && 'bg-red-100 text-red-500 '
        )}
      >
        <svg
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          ></path>
        </svg>
      </div>
      <div className='ml-3 text-sm font-normal uppercase'>{message}</div>
      <button
        type='button'
        className='-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 '
        data-collapse-toggle={[
          variant === 'success' && 'toast-success',
          variant === 'error' && 'toast-error',
        ]}
        aria-label='Close'
      >
        <span className='sr-only'>Close</span>
        <svg
          className='h-5 w-5'
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
    </div>
  );
};

export default Toast;
