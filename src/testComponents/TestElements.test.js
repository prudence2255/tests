import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from '../components/TestElements';

afterEach(cleanup);

 test('should equal 0', () => {
const {getByTestId} = render(<TestElements />);

expect(getByTestId('counter')).toHaveTextContent(0);
 });

 test('should not be disabled', () => {
const {getByTestId} = render(<TestElements />);

expect(getByTestId('button-up')).not.toBeDisabled();
 });

 test('should be disabled', () => {
const {getByTestId} = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled();
 });