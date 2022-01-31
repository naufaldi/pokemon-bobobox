import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className='flex w-full flex-grow flex-col pt-16 pb-12'>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
