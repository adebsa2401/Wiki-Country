import React from 'react';
import PropTypes from 'prop-types';

export default function CountryItem({
  name, statistic, flagImage, mapImage,
}) {
  const style = {
    backgroundImage: mapImage,
  };

  return (
    <div
      className="country-item"
      style={style}
      onClick={null}
      onKeyDown={null}
    >
      <div>
        <img src={flagImage} alt={`${name}-flag`} />
        <span>{name}</span>
      </div>
      <span>{statistic}</span>
    </div>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistic: PropTypes.number.isRequired,
  flagImage: PropTypes.string.isRequired,
  mapImage: PropTypes.string.isRequired,
};
