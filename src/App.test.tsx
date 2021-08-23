import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container, getByText} = render(<App />);

  expect(getByText(/Learn/i)).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
