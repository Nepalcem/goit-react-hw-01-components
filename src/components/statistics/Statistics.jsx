import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  UploadStatList,
  UploadItem,
} from './Statistics.styled';
import getRandomHexColor from 'utils/randomHex';

const Statistics = ({ title = '', stats }) => {
  return (
    <StatisticsContainer>
      {title.length > 0 && <h2 className="title">{title}</h2>}

      <UploadStatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <UploadItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
            </UploadItem>
          );
        })}
      </UploadStatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
