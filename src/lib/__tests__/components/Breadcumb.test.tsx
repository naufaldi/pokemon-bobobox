import { render, screen } from '@testing-library/react';

import Breadcumb from '@/components/common/Breadcumb';

test('show Breadcrumb component', () => {
  render(<Breadcumb homeLabel='Home' homeUrl='/' page='Saved' />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('Breadcrumb has home label', () => {
  render(<Breadcumb homeLabel='Home' homeUrl='/' page='Saved' />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
test('Breadcrumb has page label', () => {
  render(<Breadcumb homeLabel='Home' homeUrl='/' page='Saved' />);
  expect(screen.getByText(/saved/i)).toBeInTheDocument();
});
test('Breadcrumb has page label', () => {
  render(<Breadcumb homeLabel='Home' homeUrl='/' page='Saved' />);
  expect(screen.getByText(/saved/i)).toBeInTheDocument();
});
test('should navigate to / when click', () => {
  render(<Breadcumb homeLabel='Home' homeUrl='/' page='Saved' />);
  expect(screen.getByText(/home/i).closest('a')).toHaveAttribute('href', '/');
});
