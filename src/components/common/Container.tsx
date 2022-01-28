import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

const Container: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsxm('mx-auto w-full max-w-screen-xl px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
