import { render, screen } from '@testing-library/react';

import Section from '@/components/common/Section';

test('it shows the children element', () => {
  const testMessage = 'Test Message';
  render(<Section id='page-list'>{testMessage}</Section>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
test('it shows element can add className', () => {
  const testMessage = 'Test Message';
  render(
    <Section id='page-list' className='pt-2 pb-2'>
      {testMessage}
    </Section>
  );

  expect(screen.getByText(testMessage)).toHaveClass('pt-2 pb-2');
});
test('it shows element has id', () => {
  const testMessage = 'Test Message';
  render(
    <Section id='page-list' className='pt-2 pb-2'>
      {testMessage}
    </Section>
  );

  expect(screen.getByText(testMessage)).toHaveAttribute('id', 'page-list');
});
