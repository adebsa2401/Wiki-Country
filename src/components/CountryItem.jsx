import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/CountryItem.css';

export default function CountryItem({
  name, statistic, flag, map, iso2, index,
}) {
  const navigate = useNavigate();

  const darkStyle = [1, 2].includes((index % 4) % 3);

  return (
    <>
      <style>
        {`#country-item-${iso2}::before {
          background-image: url(${map});
        }`}
      </style>
      <div
        id={`country-item-${iso2}`}
        className={`country-item ${darkStyle ? 'country-item-dark' : ''}`}
        role="presentation"
        onClick={() => navigate(`/countries/${iso2}/cities`, {
          state: {
            name, statistic, map, flag,
          },
        })}
      >
        <div className="country-item-header">
          <img className="country-flag" crossOrigin="anonymous" src={flag} alt={`${name} flag`} />
          <span className="country-name">{name}</span>
        </div>
        <span className="country-statistic">{new Intl.NumberFormat().format(statistic)}</span>
      </div>
    </>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistic: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  iso2: PropTypes.string.isRequired,
  index: PropTypes.number,
};

CountryItem.defaultProps = {
  index: 0,
};
