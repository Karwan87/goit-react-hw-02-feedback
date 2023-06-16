import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      <button
        className={styles.btngood}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.btnneutral}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.btnbad} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
//   const handleFeedback = type => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       [type]: prevFeedback[type] + 1,
//     }));
//   };

//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = feedback;
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const { good } = feedback;
//     const total = countTotalFeedback();
//     if (total === 0) return 0;
//     return Math.round((good / total) * 100);
//   };

//   return (
//     <div className={styles.feedbackWindow}>
//       <h1 className={styles.title}>Please leave fedback</h1>

//       <div className={styles.feedbackButtons}>
//         <button
//           className={styles.btngood}
//           onClick={() => handleFeedback('good')}
//         >
//           Good
//         </button>
//         <button
//           className={styles.btnneutral}
//           onClick={() => handleFeedback('neutral')}
//         >
//           Neutral
//         </button>
//         <button className={styles.btnbad} onClick={() => handleFeedback('bad')}>
//           Bad
//         </button>
//       </div>
//       <div className={styles.statisticsContainer}>
//         <h2 className={styles.statistics}>Statistics:</h2>
//         <p className={styles.feedback}>Good: {feedback.good}</p>
//         <p className={styles.feedback}>Neutral: {feedback.neutral}</p>
//         <p className={styles.feedback}>Bad: {feedback.bad}</p>
//         <p className={styles.feedback}>Total: {countTotalFeedback()}</p>
//         <p className={styles.feedback}>
//           Positive feedback: {countPositiveFeedbackPercentage()}%
//         </p>
//       </div>
//     </div>
//   );
// };
// Feedback.propTypes = {};
// export default Feedback;
