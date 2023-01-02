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
    (state) => [state.cities[iso2], state.itemsFilter],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCities(iso2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities && cities.length]);

  const filteredCities = cities && cities.filter((city) => {
    if (ge) {
      return city.population >= limit;
    }
    return city.population <= limit;
  });

  return (
    <div className="details-content">
      <Header title={`Population/Cities (${(filteredCities && filteredCities.length) || 0})`} showBackButton />
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
            <h2 className="country-name">{country.name}</h2>
          </div>
          <span className="country-statistic">{new Intl.NumberFormat().format(country.statistic)}</span>
        </div>
        <ul className="cities-list">
          {filteredCities && filteredCities.map((city, index) => (
            <CityItem
              key={city.name}
              index={index}
              name={city.name}
              statistic={city.population}
              isCapital={city.isCapital}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
