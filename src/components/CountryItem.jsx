import React from 'react';
import PropTypes from 'prop-types';

export default function CountryItem({
  name, statistic, flag, map, iso2,
}) {
  const style = {
    backgroundImage: `url(${map})`,
  };

  return (
    <div
      className="country-item"
      style={style}
      role="presentation"
      onClick={() => window.open(`https://en.wikipedia.org/wiki/${iso2}`)}
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
