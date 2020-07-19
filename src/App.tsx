import React, { useState } from 'react';

import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions } from './helpers/API';
import { QuestionState, Difficulty, AnswerObject } from './helpers/types';

import './App.css';

const TOTAL_QUESTIONS = 2;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setNumber(0);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(score + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQuestion)
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {
        gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          (
            <button className="start" onClick={startTrivia}>Start</button>
          ) : null
      }
      {
        !gameOver ? <p className="score">Score: {score} </p> : null
      }
      {
        loading && <p>Loading Questions...</p>
      }
      {
        !loading && !gameOver &&
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      }
      {
        !gameOver && !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ?
          (
            <button className="next" onClick={nextQuestion}>Next Question</button>
          ) : null
      }
    </div>
  );
}

export default App;
