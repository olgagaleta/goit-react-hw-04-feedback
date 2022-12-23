import { useState } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  const options = Object.keys(feedback);

  const onLeavFeedback = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good / countTotalFeedback()) * 100);

    return percent;
  };

  const showStatistic = () => {
    if (countTotalFeedback() === 0) {
      return <Notification message="There is no feedback" />;
    } else {
      return (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      );
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeavFeedback} />
      </Section>
      <Section title="Statistics">{showStatistic()}</Section>
    </>
  );
}
