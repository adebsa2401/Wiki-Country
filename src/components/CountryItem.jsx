import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/CountryItem.css';

export default function CountryItem({
  name, statistic, flag, map, iso2, index,
}) {
  const navigate = useNavigate();
  const style = {
    backgroundImage: `url(${map})`,
  };

  const darkStyle = [1, 2].includes((index % 4) % 3);

  return (
    <div
      className={`country-item ${darkStyle ? 'country-item-dark' : ''}`}
      style={style}
      role="presentation"
      onClick={() => navigate(`/countries/${iso2}/cities`)}
    >
      <div className="country-item-header">
        <img className="country-flag" crossOrigin="anonymous" src={flag} alt={`${name} flag`} />
        <span className="country-name">{name}</span>
      </div>
      <span className="country-statistic">{statistic}</span>
    </div>
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
