import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import Header from '../components/Header';
import CityItem from '../components/CityItem';
import { loadCities } from '../redux/cities/cities';

export default function DetailsPage() {
  const { country } = useParams();
  const [cities, { limit, ge }] = useSelector(
    (state) => [state.cities[country], state.citiesFilter],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCities(country));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities.length]);

  return (
    <div>
      <Header title="Population/Cities" />
      <main>
        <Filter />
        <div className="cities-list">
          {cities
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
