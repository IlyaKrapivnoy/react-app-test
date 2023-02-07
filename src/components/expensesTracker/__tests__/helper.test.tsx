import Header from '../Header';
import { render } from '@testing-library/react';

test('renders header correctly', () => {
    const view = render(<Header />);
    expect(view).toMatchSnapshot();
});
