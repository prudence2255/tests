import {render, fireEvent, waitFor, cleanup} from '@testing-library/react';
import TestAsync from '../components/TestAsync';


afterEach(cleanup);

test('should increment by 1 after 0.5s', async() => {
    const {getByTestId, getByText} = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'));

    const value = await waitFor(() => getByText('1'));
    expect(value).toHaveTextContent('1');
    
});