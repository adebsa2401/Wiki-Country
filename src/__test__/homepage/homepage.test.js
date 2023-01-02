import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Homepage', () => {
  it('should render the homepage', async () => {
    const json = {
      json: () => Promise.resolve([
        {
          name: 'Afghanistan',
          population: '38041754',
          iso2: 'AF',
        },
        {
          name: 'Albania',
          population: '2854191',
          iso2: 'AL',
        },
        {
          name: 'Algeria',
          population: '43053054',
          iso2: 'DZ',
        },
      ]),
    };

    window.fetch = jest.fn().mockImplementationOnce(() => json);
    render(<App />);
    await waitFor(() => expect(screen.getByText('Afghanistan')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Albania')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Algeria')).toBeInTheDocument());
  });

  it('should filter with respect to the population', async () => {
    const json = {
      json: () => Promise.resolve([
        {
          name: 'Afghanistan',
          population: '38041',
          iso2: 'AF',
        },
        {
          name: 'Albania',
          population: '2854',
          iso2: 'AL',
        },
        {
          name: 'Algeria',
          population: '43053',
          iso2: 'DZ',
        },
      ]),
    };

    window.fetch = jest.fn().mockImplementationOnce(() => json);
    const user = userEvent.setup();
    render(<App />);

    const input = await screen.findByRole('spinbutton');
    await user.type(input, '30000');

    expect(await screen.findByText('Afghanistan')).toBeInTheDocument();
    expect(await screen.findByText('Algeria')).toBeInTheDocument();
  });
});
