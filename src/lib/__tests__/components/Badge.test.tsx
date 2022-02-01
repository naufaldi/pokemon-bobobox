import { render, screen } from '@testing-library/react';

import Badge from '@/components/common/Badge';

test('shows the children ', () => {
  const testMessage = 'Test Message';
  render(<Badge variant='primary'>{testMessage}</Badge>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test('variant change to primary', () => {
  const { container } = render(<Badge variant='primary'>Test Message</Badge>);
  expect(container.firstChild).toHaveClass('bg-blue-100 text-blue-800');
});
test('variant change to dark', () => {
  const { container } = render(<Badge variant='dark'>Test Message</Badge>);
  expect(container.firstChild).toHaveClass('bg-gray-100 text-gray-800');
});
test('variant change to red', () => {
  const { container } = render(<Badge variant='red'>Test Message</Badge>);
  expect(container.firstChild).toHaveClass('bg-red-100 text-red-800');
});
test('variant change to green', () => {
  const { container } = render(<Badge variant='green'>Test Message</Badge>);
  expect(container.firstChild).toHaveClass('bg-green-100 text-green-800');
});
test('variant change to yellow', () => {
  const { container } = render(<Badge variant='yellow'>Test Message</Badge>);
  expect(container.firstChild).toHaveClass('bg-yellow-100 text-yellow-800');
});
test('adding className', () => {
  const { container } = render(
    <Badge variant='yellow' className='halo'>
      Test Message
    </Badge>
  );
  expect(container.firstChild).toHaveClass('halo');
});
