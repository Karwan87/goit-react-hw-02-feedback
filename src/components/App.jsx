import React, { useState } from 'react';
import styles from './var.module.css';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
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
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackWindow}>
        <Section title="Please leave feedback" />
        <Feedback onLeaveFeedback={handleFeedback} />
        <Section title="Statistics" />
        {Object.values(feedback).reduce((a, b) => a + b, 0) > 0 ? (
          <Statistics feedback={feedback} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
};
