import React, { useState } from 'react';
import styles from './var.module.css';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

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
        <Statistics feedback={feedback} />
      </div>
    </div>
  );
};
