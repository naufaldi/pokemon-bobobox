import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Button from '@/components/common/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <Button tag='a' className='mt-4 md:text-lg' href='/'>
              Back to Home
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
