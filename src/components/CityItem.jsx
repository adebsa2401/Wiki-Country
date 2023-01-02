import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

export default function CityItem({ name, statistic, isCapital }) {
  return (
    <li className="city-item">
      <span className="city-name">{name}</span>
      {isCapital && <AiFillStar style={{ color: 'yellow' }} />}
      <span>{new Intl.NumberFormat().format(statistic)}</span>
    </li>
  );
}

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistic: PropTypes.number.isRequired,
  isCapital: PropTypes.bool,
};

CityItem.defaultProps = {
  isCapital: false,
};
