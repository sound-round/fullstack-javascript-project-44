#!/usr/bin/env node

import askName from './cli.js';

const maxRound = 3;

export default function runEngine(playRound, condition) {
  const name = askName();

  console.log(condition);

  let currentRound = 1;

  while (currentRound <= maxRound) {
    const { correctAnswer, userAnswer } = playRound();
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      currentRound += 1;
    } else {
      currentRound = 1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
