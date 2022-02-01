import { render, screen } from '@testing-library/react';
import { FC, useState } from 'react';

import Toast from '@/components/common/Toast';

const ToastComponent: FC<{ message: string; variant: 'success' | 'error' }> = ({
  message,
  variant,
}) => {
  const [show, setShow] = useState(true);
  return (
    <Toast message={message} variant={variant} onClose={() => setShow(false)} />
  );
};

test('shows the children in toast', () => {
  const testMessage = 'Test Message';
  render(<ToastComponent message={testMessage} variant='success' />);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test('component variant change to success in toast', () => {
  const testMessage = 'Test Message';
  render(<ToastComponent message={testMessage} variant='success' />);
  expect(screen.getByTestId('toast-success')).toHaveClass(
    'bg-green-100 text-green-500'
  );
});
test(' component variant change to error in toast', () => {
  const testMessage = 'Test Message';
  render(<ToastComponent message={testMessage} variant='error' />);
  expect(screen.getByTestId('toast-error')).toHaveClass(
    'bg-red-100 text-red-500'
  );
});
