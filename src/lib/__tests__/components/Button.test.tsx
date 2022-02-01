import { render, screen } from '@testing-library/react';

import Button from '@/components/common/Button';

test('it render button component', () => {
  render(<Button variant='primary'>Halo</Button>);
  screen.getByRole('button', { name: /Halo/i });
});
test('it render button variant primary component', () => {
  const { container } = render(<Button variant='primary'>Halo</Button>);
  expect(container.firstChild).toHaveClass('bg-blue-500 text-white');
});
test('it render button variant outline component', () => {
  const { container } = render(<Button variant='outline'>Halo</Button>);
  expect(container.firstChild).toHaveClass(
    'text-blue-500 border border-gray-500'
  );
});
test('it render button variant light component', () => {
  const { container } = render(<Button variant='light'>Halo</Button>);
  expect(container.firstChild).toHaveClass(
    'bg-white text-dark  border border-gray-300'
  );
});
test('it render button size small component', () => {
  const { container } = render(<Button size='small'>Halo</Button>);
  expect(container.firstChild).toHaveClass('px-2 py-1');
});
test('it render button size medium component', () => {
  const { container } = render(<Button size='medium'>Halo</Button>);
  expect(container.firstChild).toHaveClass('px-4 py-2');
});
test('it render button size large component', () => {
  const { container } = render(<Button size='large'>Halo</Button>);
  expect(container.firstChild).toHaveClass('px-8 py-3');
});
test('it render button component with type button', () => {
  const { getByText } = render(<Button type='button'>Halo</Button>);
  expect(getByText(/halo/i).closest('button')).toHaveAttribute(
    'type',
    'button'
  );
});
test('it render button component with type submit', () => {
  const { getByText } = render(<Button type='submit'>Halo</Button>);
  expect(getByText(/halo/i).closest('button')).toHaveAttribute(
    'type',
    'submit'
  );
});
test('it render tag a with href', () => {
  render(
    <Button tag='a' href='/'>
      Halo
    </Button>
  );
  screen.getByRole('link', { name: /halo/i }).hasAttribute('href');
});
test('it render button with disabled', () => {
  render(<Button disabled={true}>Halo</Button>);
  screen.getByRole('button', { name: /halo/i }).hasAttribute('disabled');
});
test('it render button with add className', () => {
  const { container } = render(<Button className='px-2 py-2'>Halo</Button>);
  expect(container.firstChild).toHaveClass('px-2 py-2');
});
