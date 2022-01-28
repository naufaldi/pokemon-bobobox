import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

const Grid: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsxm('grid grid-cols-12 gap-x-6', className)}>
      {children}
    </div>
  );
};

export default Grid;
