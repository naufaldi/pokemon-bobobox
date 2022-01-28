import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

const Section: FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className }) => {
  return (
    <section className={clsxm('section w-full', className)} id={id}>
      {children}
    </section>
  );
};

export default Section;
