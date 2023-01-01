import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Header from '../components/Header';
import CountryItem from '../components/CountryItem';
import { loadCountries } from '../redux/countries/countries';
import '../styles/HomePage.css';

export default function HomePage() {
  const [countries, { limit, ge }] = useSelector(
    (state) => [state.countries, state.countriesFilter],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.length]);

  return (
    <div>
      <Header title={`Population/Countries (${countries.length})`} />
      <main>
        <Filter />
        <div className="countries-grid">
          {countries
            .filter((country) => {
              if (ge) {
                return country.population >= limit;
              }
              return country.population <= limit;
            })
            .map((country, index) => (
              <CountryItem
                key={country.name}
                index={index}
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
