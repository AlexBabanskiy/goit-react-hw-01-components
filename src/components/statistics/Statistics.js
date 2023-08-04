import PropTypes from 'prop-types';
import { UlSection } from './Statistics.styled';

export const Statistics = function ({ title, stats }) {
  return (
    <UlSection>
      {title && <h2 className="title-statistics">{title}</h2>}

      <ul className="statistic-list">
        {stats.map(stat => (
          <li key={stat.id} className="statistic-item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </UlSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
