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
    <main className='flex w-full flex-col pt-16'>{children}</main>
    <Footer />
  </>
);

export default Layout;
