import React from 'react';
import { FaGreaterThanEqual, FaLessThanEqual } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from '../redux/countries/filter';
import '../styles/Filter.css';

export default function Filter() {
  const { limit, ge } = useSelector((state) => state.countriesFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <span>Population</span>
      <button
        className="filter-sign-button"
        type="button"
        onClick={() => dispatch(filterCountries(limit, !ge))}
      >
        { ge ? <FaGreaterThanEqual /> : <FaLessThanEqual /> }
      </button>
      <input
        className="filter-input"
        type="number"
        value={limit / 1000}
        min={0}
        onChange={(event) => dispatch(filterCountries(event.target.value * 1000, ge))}
      />
      <span>000</span>
    </div>
  );
}
