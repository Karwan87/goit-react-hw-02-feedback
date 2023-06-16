import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div>
      <p className={styles.statistics}>Good: {good}</p>
      <p className={styles.statistics}>Neutral: {neutral}</p>
      <p className={styles.statistics}>Bad: {bad}</p>
      <p className={styles.statistics}>Total: {total}</p>
      <p className={styles.statistics}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
