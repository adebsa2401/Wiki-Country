import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Header from '../components/Header';
import CountryItem from '../components/CountryItem';
import { loadCountries } from '../redux/countries/countries';

export default function HomePage() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Population/Countries" />
      <main>
        <Filter />
        <div className="countries-grid">
          {countries.map((country) => (
            <CountryItem
              key={country.iso2}
              name={country.name}
              statistic={country.population}
              flag={country.flag}
              map={country.map}
              iso2={country.iso2}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
