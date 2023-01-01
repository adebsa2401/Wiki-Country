import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CountryItem({
  name, statistic, flag, map, iso2,
}) {
  const navigate = useNavigate();
  const style = {
    backgroundImage: `url(${map})`,
  };

  return (
    <div
      className="country-item"
      style={style}
      role="presentation"
      onClick={() => navigate(`/countries/${iso2}/cities`)}
    >
      <div>
        <img crossOrigin="anonymous" src={flag} alt={`${name} flag`} />
        <span>{name}</span>
      </div>
      <span>{statistic}</span>
    </div>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistic: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  iso2: PropTypes.string.isRequired,
};
