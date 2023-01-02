import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const jsonCountry = {
  json: () => Promise.resolve([
    {
      name: 'Japan',
      population: '380417',
      iso2: 'JP',
    },
  ]),
};

const jsonCity = {
  json: () => Promise.resolve([
    {
      name: 'Tokyo',
      population: 20417000,
      is_capital: true,
    },
    {
      name: 'Osaka',
      population: 18047000,
      is_capital: false,
    },
  ]),
};

describe('Details Page for Japan', () => {
  it('should render the Japan details page', async () => {
    window.fetch = jest.fn().mockImplementationOnce((url) => {
      if (url.includes('city')) {
        return jsonCity;
      }

      return jsonCountry;
    });

    const user = userEvent.setup();
    render(<App />);
    const japanCard = await screen.findByText('Japan');
    await user.click(japanCard);
    expect(await screen.queryByText('Tokyo')).not.toBeInTheDocument();
    expect(await screen.queryByText('Osaka')).not.toBeInTheDocument();
  });

  it('should filter with respect to the population', async () => {
    window.fetch = jest.fn().mockImplementationOnce((url) => {
      if (url.includes('city')) {
        return jsonCity;
      }

      return jsonCountry;
    });

    const user = userEvent.setup();
    render(<App />);

    const japanCard = await screen.findByText('Japan');
    await user.click(japanCard);
    const input = await screen.findByRole('spinbutton');
    await user.type(input, '20000');

    expect(await screen.findByText('Tokyo')).toBeInTheDocument();
  });
});
