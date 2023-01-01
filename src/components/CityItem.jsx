import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

export default function CityItem({ name, statistic, isCapital }) {
  return (
    <li>
      <span>{name}</span>
      <span>{statistic}</span>
      {isCapital && <AiFillStar />}
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
