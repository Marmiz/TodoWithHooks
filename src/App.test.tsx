import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeContext } from './ThemeContext';

test('renders the basic layout', () => {
  const { getByText, container } = render(<ThemeContext.Provider value={{theme: 'light', toggleTheme: () => null, }}>
    <App/></ThemeContext.Provider>);
  const linkElement = getByText(/theme/i);
  const inputElemet = container.querySelector('input');

  expect(linkElement).toBeInTheDocument();
  expect(inputElemet).toBeInTheDocument();
});
