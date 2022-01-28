import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

enum BadgeVariant {
  'primary',
  'dark',
  'red',
  'green',
  'yellow',
}
type BadgeProps = {
  variant?: keyof typeof BadgeVariant;
  className?: string;
};

const Badge: FC<BadgeProps> = ({ children, className, variant }) => {
  return (
    <span
      className={clsxm(
        ' mr-2 rounded px-2.5 py-0.5 text-xs font-semibold ',
        [
          variant === 'primary' && 'bg-blue-100 text-blue-800',
          variant === 'dark' && 'bg-gray-100 text-gray-800 ',
          variant === 'red' && 'bg-red-100 text-red-800',
          variant === 'green' && 'bg-green-100 text-green-800',
          variant === 'yellow' && 'bg-yellow-100 text-yellow-800',
        ],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
