import { useState } from 'react'
import './App.css'
import Form from '../components/Form';
import Answers from '../components/Answers';
import Reward from '../components/Reward';
import rawAnswersData from './assets/answers.json';
import Score from '../components/Score';

function App() {
  const goalScore = 20000;
  const [answersData, setAnswersData] = useState(rawAnswersData);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const searchValue = (document.querySelector('[name="search"]')?.value || '')
      .trim()
      .toLowerCase()
    ;

    console.log(answersData);
    let updatedAnswersData = Array.from(answersData);
    updatedAnswersData.map((answer) => {
      if (answer.found) {
        return answer;
      }

      const alternatives = Array.from(answer.alternatives || []);

      if (
        answer.found
        || answer.answer.trim().toLowerCase() === searchValue
        || alternatives.some((alternative => alternative.trim().toLowerCase() === searchValue))
      ) {
        answer.found = true;
      }

      return answer;
    });

    setAnswersData(updatedAnswersData);
  };
  
  let currentScore = 0;

  answersData.forEach((answer) => {
    if (answer.found) {
      currentScore += answer.score;
    }
  });

  return (
    <main>
      <Score score={currentScore} goalScore={goalScore} />
      <Form formSubmitHandler={formSubmitHandler} />
      <Answers answers={answersData} />
      <Reward currentScore={{currentScore}} goalScore={{goalScore}} />
    </main>
  )
}

export default App
