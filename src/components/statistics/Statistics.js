import PropTypes from 'prop-types';
import { UlSection } from './Statistics.styled';

export const Statistics = function ({ title, stats }) {
  const isTitle = title ? <h2 className="title-statistics">{title}</h2> : '';
  return (
    <UlSection>
      {isTitle}

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
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
