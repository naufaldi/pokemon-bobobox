import { render, screen } from '@testing-library/react';

import Container from '@/components/common/Container';

test('it shows the children element', () => {
  const testMessage = 'Test Message';
  render(<Container>{testMessage}</Container>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
test('it shows element can add className', () => {
  const testMessage = 'Test Message';
  render(<Container className='pt-2 pb-2'>{testMessage}</Container>);

  expect(screen.getByText(testMessage)).toHaveClass('pt-2 pb-2');
});
