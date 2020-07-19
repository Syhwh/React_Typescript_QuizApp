import React, { useState } from 'react';

import { QuestionCard } from './components/QuestionCard';
import { Animation } from './components/Animation';
import { Level } from './components/Level';
import { NumberOfQuestions } from './components/NumberOfQuestions'
import { fetchQuestions } from './helpers/API';
import { QuestionState, AnswerObject } from './helpers/types';

import { GlobalStyle, Wrapper, SettingWrapper } from './App.styles'

import './App.css';

const levels: string[] = ['easy', 'medium', 'hard']

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [level, setLevel] = useState(levels[0])
  const [totalQuestions, setTotalQuestions] = useState(10)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(
      totalQuestions,
      level
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
     totalQuestions === nextQuestion  ? setGameOver(true) : setNumber(nextQuestion)
  }
  const selectLevel = (level: string) => {
    setLevel(level)
  }

  const setNumberOfQuestions = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotalQuestions(parseInt(event.target.value))
  }

  return (
    <>
      <GlobalStyle />
      <Animation />
      <Wrapper>
        <h1>Trivia App</h1>
        <SettingWrapper>
          {
        console.log(gameOver)}
          <Level levels={levels} handleClick={selectLevel} disabled={!gameOver} />
          <NumberOfQuestions handleChange={setNumberOfQuestions} value={totalQuestions} disabled={!gameOver} />
        </SettingWrapper>
        {
          gameOver || userAnswers.length === totalQuestions ?
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
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        }
        {
          !gameOver && !loading &&
            userAnswers.length === number + 1 &&
            number !== totalQuestions - 1 ?
            (
              <button className="next" onClick={nextQuestion}>Next Question</button>
            ) : null
        }
      </Wrapper>
    </>
  );
}

export default App;
