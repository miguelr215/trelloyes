import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import STORE from './store.js';

test('renders learn react link', () => {
  const { getByText } = render(<App store={STORE}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
