import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Header from '../components/Header';
import CountryItem from '../components/CountryItem';
import { loadCountries } from '../redux/countries/countries';
import '../styles/HomePage.css';

export default function HomePage() {
  const [countries, { limit, ge }] = useSelector(
    (state) => [state.countries, state.itemsFilter],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.length]);

  const filteredCountries = countries.filter((country) => {
    if (ge) {
      return country.population >= limit;
    }
    return country.population <= limit;
  });

  const worldPopulation = countries.reduce((acc, country) => acc + country.population, 0);

  return (
    <div className="home-content">
      <Header title={`Population/Countries (${filteredCountries.length})`} />
      <main>
        <Filter />
        <div className="headline">
          <h2 className="world-name">World wide countries</h2>
          <span className="world-statistic">{new Intl.NumberFormat().format(worldPopulation)}</span>
        </div>
        <div className="countries-grid">
          {filteredCountries.map((country, index) => (
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
