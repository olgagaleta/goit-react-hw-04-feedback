import React from 'react';
import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeavFeedback = nameKey =>
    this.setState(prevState => ({ [nameKey]: prevState[nameKey] + 1 }));

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const showStatistic = () => {
      if (this.countTotalFeedback() === 0) {
        return <Notification message="There is no feedback" />;
      } else {
        return (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        );
      }
    };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeavFeedback} />
        </Section>
        <Section title="Statistics">{showStatistic()}</Section>
      </>
    );
  }
}

export default App;
