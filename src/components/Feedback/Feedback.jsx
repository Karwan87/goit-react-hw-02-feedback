import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div className={styles.feedbackWindow}>
      <h1 className={styles.title}>Please leave fedback</h1>

      <div className={styles.feedbackButtons}>
        <button
          className={styles.btngood}
          onClick={() => handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.btnneutral}
          onClick={() => handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button className={styles.btnbad} onClick={() => handleFeedback('bad')}>
          Bad
        </button>
      </div>
      <div className={styles.statisticsContainer}>
        <h2 className={styles.statistics}>Statistics:</h2>
        <p className={styles.feedback}>Good: {feedback.good}</p>
        <p className={styles.feedback}>Neutral: {feedback.neutral}</p>
        <p className={styles.feedback}>Bad: {feedback.bad}</p>
      </div>
    </div>
  );
};
Feedback.propTypes = {};
export default Feedback;
