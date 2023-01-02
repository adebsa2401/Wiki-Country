import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import '../styles/CityItem.css';

export default function CityItem({
  name, statistic, isCapital, index,
}) {
  return (
    <li className={`city-item ${index % 2 === 0 ? 'city-item-even' : ''}`}>
      <h3 className="city-name">{name}</h3>
      {isCapital && <AiFillStar style={{ color: 'yellow', marginRight: 'auto' }} />}
      <span>{new Intl.NumberFormat().format(statistic)}</span>
    </li>
  );
}

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistic: PropTypes.number.isRequired,
  isCapital: PropTypes.bool,
  index: PropTypes.number,
};

CityItem.defaultProps = {
  isCapital: false,
  index: 0,
};
