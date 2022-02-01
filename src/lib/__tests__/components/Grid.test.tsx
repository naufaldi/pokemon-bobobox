import { render, screen } from '@testing-library/react';

import Grid from '@/components/common/Grid';

test('it shows the children element', () => {
  const testMessage = 'Test Message';
  render(<Grid>{testMessage}</Grid>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
test('it shows element can add className', () => {
  const testMessage = 'Test Message';
  render(<Grid className='pt-2 pb-2'>{testMessage}</Grid>);

  expect(screen.getByText(testMessage)).toHaveClass('pt-2 pb-2');
});
