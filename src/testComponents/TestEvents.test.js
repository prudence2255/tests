import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TestEvents from '../components/TestEvents';

afterEach(cleanup);

test('should reduce by 1', () => {
    const {getByTestId} = render(<TestEvents />);

    fireEvent.click(getByTestId('button-down'));
    
    expect(getByTestId('counter')).toHaveTextContent(-1);
});

test('should increment by 1', () => {
    const {getByTestId} = render(<TestEvents />);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent(1);
});

