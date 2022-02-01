import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import HomePage from '@/pages';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));
test('it should render homepage', () => {
  const { baseElement } = render(
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  );
  expect(baseElement).toBeTruthy();
});
