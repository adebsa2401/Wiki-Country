import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import Header from '../components/Header';
import CityItem from '../components/CityItem';
import { loadCities } from '../redux/cities/cities';
import '../styles/DetailsPage.css';

export default function DetailsPage() {
  const { iso2 } = useParams();
  const { state } = useLocation();
  const country = { ...state };

  const [cities, { limit, ge }] = useSelector(
    (state) => [state.cities[iso2], state.citiesFilter],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCities(iso2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities && cities.length]);

  return (
    <div>
      <Header title={`Population/Cities (${(cities && cities.length) || 0})`} showBackButton />
      <main>
        <Filter />
        <style>
          {`#country-headline-${iso2}::before {
            background-image: url(${country.map});
          }`}
        </style>
        <div id={`country-headline-${iso2}`} className="country-headline">
          <div className="country-headline-header">
            <img className="country-flag" crossOrigin="anonymous" src={country.flag} alt={`${country.name} flag`} />
            <span className="country-name">{country.name}</span>
          </div>
          <span className="country-statistic">{new Intl.NumberFormat().format(country.statistic)}</span>
        </div>
        <div className="cities-list">
          {cities && cities
            .filter((city) => {
              if (ge) {
                return city.population >= limit;
              }
              return city.population <= limit;
            })
            .map((city) => (
              <CityItem
                key={city.name}
                name={city.name}
                statistic={city.population}
                isCapital={city.isCapital}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
