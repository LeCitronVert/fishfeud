import { useState } from 'react'
import './App.css'
import Form from '../components/Form';
import Answers from '../components/Answers';
import Reward from '../components/Reward';
import rawAnswersData from './assets/answers.json';
import Score from '../components/Score';

import Swal from "sweetalert2/src/sweetalert2.js"
import withReactContent from 'sweetalert2-react-content'

import "@sweetalert2/theme-dark/dark.css";
import AllClear from '../components/AllClear';

import bestiesUrl from '/besties.png';

const toastStyle = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const getRandomSuccessMessage = () => {
  const successMessages = [
    'yay :)',
    'yippers !!',
    'goojob !!!',
    'woawn :o',
    'so cool ...',
    'hihi',
    'nice >:)',
  ];

  return successMessages[Math.floor(Math.random() * successMessages.length)];
};

const getRandomFailureMessage = () => {
  const failureMessages = [
    'naur :(',
    'oh boy.',
    'not really poazkpoazkdp',
    'nahhhh',
    'not quite.',
    'it would seem that this answer is incorrect, birthday boy',
    'o',
  ];

  return failureMessages[Math.floor(Math.random() * failureMessages.length)];
};

const resetSearchInput = () => {
  document.querySelector('[name="search"]').value = '';
};

function App() {
  const goalScore = 20000;
  const [answersData, setAnswersData] = useState(rawAnswersData);
  const [isRewardUnlocked, setRewardUnlocked] = useState(false);
  // Too lazy to calculate it myself lmao
  const maxScore = rawAnswersData.reduce((cumul, current,) => Number(cumul) + Number(current.score), 0);

  if (isRewardUnlocked) {
    return (
      <main>
        <img src={bestiesUrl} />

        <p>
          You can now head to discord and read the spoilered message. Well played ! :)
        </p>
      </main>
    );
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const searchValue = (document.querySelector('[name="search"]')?.value || '')
      .trim()
      .toLowerCase()
    ;

    if (
      window.aftercheck
      && window.aftercheck.condition.trim().toLowerCase() === searchValue
    ) {
      withReactContent(Swal).fire({
        title: '>:[',
        html: `<strong>${window.aftercheck.message}</strong>`,
    });

      resetSearchInput();
      return;
    }
    delete window.aftercheck;

    let updatedAnswersData = Array.from(answersData)
    
    let hasFoundNewAnswer = false;
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
        hasFoundNewAnswer = true;
      }

      return answer;
    });

    resetSearchInput();
    setAnswersData(updatedAnswersData);
    toastStyle.fire({
      icon: hasFoundNewAnswer ? "success" : "error",
      title: hasFoundNewAnswer ? getRandomSuccessMessage() : getRandomFailureMessage(),
    });
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
      <Reward currentScore={currentScore} goalScore={goalScore} onButtonClicked={() => {setRewardUnlocked(true)}} />
      <AllClear currentScore={currentScore} maxScore={maxScore} />
    </main>
  )
}

export default App
