import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from '../store/reducer'
import TestRedux from '../components/TestRedux'

const renderWithRedux = (
  component,
  { store = createStore(reducer) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

 afterEach(cleanup);


it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('counter')).toHaveTextContent('0')
  })

it('increments counter through redux', () => {
    const {getByTestId} = renderWithRedux(<TestRedux />);
fireEvent.click(getByTestId('button-up'));

expect(getByTestId('counter')).toHaveTextContent(1);

})  

it('decrement counter through redux', () => {
    const {getByTestId} = renderWithRedux(<TestRedux />);

    fireEvent.click(getByTestId('button-down'));
  expect(getByTestId('counter')).toHaveTextContent(-1); 
   
});