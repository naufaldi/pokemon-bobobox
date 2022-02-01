import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

import Filter from '@/components/homepage/Filter';

const InputComponent = () => {
  const utils = render(
    <RecoilRoot>
      <Filter />
    </RecoilRoot>
  );
  const input = utils.getByLabelText(/Search Pokemon/i) as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('it should render search input ', () => {
  const { input } = InputComponent();
  expect(input).toBeTruthy();
});

test('it should render value input ', () => {
  const { input } = InputComponent();
  userEvent.type(input, 'pikachu');
  expect(input.value).toBe('pikachu');
});
