import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page with both portfolio paths', () => {
  render(<App />);
  expect(screen.getAllByText(/Development/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/SOC/i).length).toBeGreaterThan(0);
});
