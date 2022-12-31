import React from 'react';
import { FaGreaterThanEqual, FaLessThanEqual } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from '../redux/countries/filter';

export default function Filter() {
  const { limit, ge } = useSelector((state) => state.countriesFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <span>Population</span>
      <button
        type="button"
        onClick={() => dispatch(filterCountries(limit, !ge))}
      >
        { ge ? <FaGreaterThanEqual /> : <FaLessThanEqual /> }
      </button>
      <input
        type="number"
        value={limit}
        min={0}
        onChange={(event) => dispatch(filterCountries(event.target.value, ge))}
      />
    </div>
  );
}
