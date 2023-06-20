import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalVotes = good + neutral + bad;
  const positivePercentage = totalVotes > 0 ? (good / totalVotes) * 100 : 0;

  const handleCount = (e) => {
    const idBtn = e.target.id;
    if (idBtn == "Good") {
      setGood( good + 1);
    } else if (idBtn == "Neutral") {
      setNeutral(neutral + 1);
    } else if (idBtn == "Bad") {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions text="Good" handleClick={handleCount} />
        <FeedbackOptions text="Neutral" handleClick={handleCount} />
        <FeedbackOptions text="Bad" handleClick={handleCount} />
      </Section>
      <Section title="Statistics">
        {totalVotes > 0 ? (
          <>
            <Statistics statistic="Good" value={good}></Statistics>
            <Statistics statistic="Neutral" value={neutral}></Statistics>
            <Statistics statistic="Bad" value={bad}></Statistics>
            <Statistics statistic="Total" value={totalVotes}></Statistics>
            <Statistics
              statistic="Positive feedback"
              value={`${positivePercentage.toFixed()}%`}
            ></Statistics>
          </>
        ) : (
          <h4>There is no feedback</h4>
        )}
      </Section>
    </>
  );
}

export default App;
