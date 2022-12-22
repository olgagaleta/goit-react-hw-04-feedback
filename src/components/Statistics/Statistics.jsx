import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li key="good" className={s.item}>
        Good: <span>{good}</span>
      </li>
      <li key="neutral" className={s.item}>
        Neutral: <span>{neutral}</span>
      </li>
      <li key="bad" className={s.item}>
        Bad: <span>{bad}</span>
      </li>
      <li key="total" className={s.item}>
        Total: <span>{total()}</span>
      </li>
      <li key="feedback" className={s.item}>
        Positive feedback:
        <span> {positivePercentage()}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
